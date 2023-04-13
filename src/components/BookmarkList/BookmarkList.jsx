import React, { useState, useEffect } from 'react';
// import Book from '../BookList/Book';
import './BookmarkList.css';

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

	const handleRemoveBookmark = (bookId) => {
		localStorage.removeItem(bookId);
		setBookmarks((prevBookmarks) =>
			prevBookmarks.filter((bookmark) => bookmark.id !== bookId)
		);
	};

	const handleBookSelect = (bookId) => {
		setSelectedBooks([...selectedBooks, bookId]);
	};

	const handleBookDeselect = (bookId) => {
		setSelectedBooks(selectedBooks.filter((id) => id !== bookId));
	};

	const handleDownloadFile = () => {
		const fileContents = selectedBooks
			.map((bookId) => {
				const book = bookmarks.find((b) => b.id === bookId);
				return book.title;
			})
			.join('\n');

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
		<div className="root-style-bookmark">
			<h2>Bookmarked Items</h2>
			<div className="download-button-container">
				<button
					onClick={handleDownloadFile}
					disabled={selectedBooks.length === 0}
					className="download-button"
				>
					Extract the list as a text file
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
									<p className="book-author">{book.author}</p>
									<p className="book-edition-count">{book.edition_count}</p>
									<p className="book-first-publish-year">
										{book.first_publish_year}
									</p>
									<button
										onClick={() => handleRemoveBookmark(book.id)}
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
		</div>
	);
};

export default BookmarkList;
