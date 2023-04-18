import React, { useState, useEffect } from 'react';
import './BookmarkList.css';
import noteIcon from '../../images/note.svg';
import RemoveModal from '../BookmarkModal/RemoveModal';

const BookmarkList = () => {
	const [bookmarks, setBookmarks] = useState([]);
	const [selectedBooks, setSelectedBooks] = useState([]);

	useEffect(() => {
		const bookmarkKeys = Object.keys(localStorage);
		if (bookmarkKeys.length === 0) {
			setBookmarks([]);
		} else {
			const selectedBooks = bookmarkKeys.filter(
				(key) => key !== 'selectedBooks'
			);
			setBookmarks(
				selectedBooks.map((bookId) => JSON.parse(localStorage.getItem(bookId)))
			);
		}
	}, []);

	const [showRemoveModal, setShowRemoveModal] = useState({
		show: false,
		bookId: null,
		bookTitle: null,
	});

	const handleRemoveBookmark = (bookId, bookTitle) => {
		localStorage.removeItem(bookId);
		setBookmarks((prevBookmarks) =>
			prevBookmarks.filter((bookmark) => bookmark.id !== bookId)
		);

		// Show the RemoveModal and set the bookId
		setShowRemoveModal({ show: true, bookId, bookTitle });

		// Hide the RemoveModal after 2 seconds
		setTimeout(
			() => setShowRemoveModal({ show: false, bookId: null, bookTitle: null }),
			2000
		);
	};

	const handleBookSelect = (bookId) => {
		setSelectedBooks([...selectedBooks, bookId]);
	};

	const handleBookDeselect = (bookId) => {
		setSelectedBooks(selectedBooks.filter((id) => id !== bookId));
	};

	const createFileContents = () => {
		return selectedBooks
			.map((bookId) => {
				const book = bookmarks.find((b) => b.id === bookId);
				return `Title: ${book.title}\nAuthor: ${book.author}\nPublished: ${book.first_publish_year}`;
			})
			.join('\n\n');
	};

	const handleDownloadFile = () => {
		const fileContents = createFileContents();

		// Download all checked books/book as txt file
		const blob = new Blob([fileContents], { type: 'text/plain' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.download = 'bookmarks.txt';
		link.href = url;
		link.click();

		// Once download file is clicked, clear the checkbox selection
		setSelectedBooks([]);
	};

	return (
		<div className="root-style-bookmark bookmark-list">
			<h2>Bookmarked Items</h2>
			<div className="download-button-container">
				<button
					onClick={handleDownloadFile}
					disabled={selectedBooks.length === 0}
					className="download-button"
					aria-disabled={selectedBooks.length === 0}
				>
					<img src={noteIcon} alt="" className="download-icon" />
					Extract!
				</button>
			</div>
			{bookmarks.length === 0 ? (
				<p className="no-bookmark-message">No bookmarks yet.</p>
			) : (
				bookmarks.map((book) => (
					<div key={book.id} className="bookmark-container">
						<div className="book-content">
							<label className="book-label">
								<input
									type="checkbox"
									checked={selectedBooks.includes(book.id)}
									onChange={(e) =>
										e.target.checked
											? handleBookSelect(book.id)
											: handleBookDeselect(book.id)
									}
									className="book-checkbox"
								/>
								<img src={book.cover_img} alt="cover" className="book-image" />
								<div className="book-details">
									<p className="book-title">{book.title}</p>
									<p className="book-author">Author: {book.author}</p>
									<p className="book-edition-count">
										Edition: {book.edition_count}
									</p>
									<p className="book-first-publish-year">
										Published: {book.first_publish_year}
									</p>
									<button
										onClick={() => handleRemoveBookmark(book.id, book.title)}
										className="remove-bookmark-button"
									>
										Remove Bookmark
									</button>
								</div>
							</label>
						</div>
					</div>
				))
			)}
			<RemoveModal
				show={showRemoveModal.show}
				bookId={showRemoveModal.bookId}
				bookTitle={showRemoveModal.bookTitle} // Pass the bookTitle prop
			/>
		</div>
	);
};

export default BookmarkList;
