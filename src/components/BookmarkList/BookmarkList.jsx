import React, { useState, useEffect } from 'react';
import Book from './Book';

const BookmarkList = () => {
	const [bookmarks, setBookmarks] = useState([]);

	useEffect(() => {
		const selectedBooks =
			JSON.parse(localStorage.getItem('selectedBooks')) || {};
		const bookmarkedBooks = Object.keys(selectedBooks);
		setBookmarks(bookmarkedBooks);
	}, []);

	const handleRemoveBookmark = (bookId) => {
		const selectedBooks =
			JSON.parse(localStorage.getItem('selectedBooks')) || {};
		delete selectedBooks[bookId];
		localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
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
