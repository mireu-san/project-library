import React, { useState, useEffect } from 'react';
import Book from '../BookList/Book';
import { useSpring } from 'react-spring';
import './BookmarkList.css';

const BookmarkList = () => {
	const [bookmarks, setBookmarks] = useState([]);
	const styles = useSpring({
		transform: 'scale(1)', // initial scale
		from: { transform: 'scale(0)' }, // animate from scale 0
		config: { tension: 150, friction: 10 }, // animation config
	});

	useEffect(() => {
		const bookmarkKeys = Object.keys(localStorage);
		if (bookmarkKeys.length === 0) {
			// call setBookmarks with blank array to empty default bookmark section.
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

	return (
		<form style={styles}>
			<div className="root-style-bookmark">
				<h2>Bookmarked Items:</h2>
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
		</form>
	);
};

export default BookmarkList;
