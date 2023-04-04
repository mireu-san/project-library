import React, { useState, useEffect } from 'react';
import Book from '../BookList/Book';

const BookmarkList = () => {
	const [bookmarks, setBookmarks] = useState([]);

	useEffect(() => {
		const selectedBooks = localStorage.getItem('selectedBooks');
		if (selectedBooks) {
			const parsedBooks = JSON.parse(selectedBooks);
			if (Array.isArray(parsedBooks)) {
				setBookmarks(parsedBooks);
			}
		}
	}, []);

	const handleRemoveBookmark = (bookId) => {
		localStorage.removeItem(bookId);
		setBookmarks((prevBookmarks) =>
			prevBookmarks.filter((bookmark) => bookmark !== bookId)
		);
	};

	return (
		<div>
			<h2>Bookmarks:</h2>
			{bookmarks.length === 0 ? (
				<p>No bookmarks yet.</p>
			) : (
				bookmarks.map((bookId) => (
					<div key={bookId}>
						<Book {...JSON.parse(localStorage.getItem(bookId))} />
						<button onClick={() => handleRemoveBookmark(bookId)}>
							Remove Bookmark
						</button>
					</div>
				))
			)}
		</div>
	);
};

export default BookmarkList;
