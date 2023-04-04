import React, { useState, useEffect } from 'react';
import Book from '../BookList/Book';

const BookmarkList = () => {
	const [bookmarks, setBookmarks] = useState([]);

	useEffect(() => {
		const bookmarkKeys = Object.keys(localStorage);
		const selectedBooks = bookmarkKeys.filter((key) => key !== 'selectedBooks');
		setBookmarks(
			selectedBooks.map((bookId) => JSON.parse(localStorage.getItem(bookId)))
		);
	}, []);

	const handleRemoveBookmark = (bookId) => {
		localStorage.removeItem(bookId);
		setBookmarks((prevBookmarks) =>
			prevBookmarks.filter((bookmark) => bookmark.id !== bookId)
		);
	};

	return (
		<div>
			<h2>Bookmarks:</h2>
			{bookmarks.length === 0 ? (
				<p>No bookmarks yet.</p>
			) : (
				bookmarks.map((book) => (
					<div key={book.id}>
						<Book {...book} />
						<button onClick={() => handleRemoveBookmark(book.id)}>
							Remove Bookmark
						</button>
					</div>
				))
			)}
		</div>
	);
};

export default BookmarkList;
