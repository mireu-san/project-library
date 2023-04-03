import React from 'react';
import { useGlobalContext } from '../../context';
import Book from './Book';
import Loading from '../Loader/Loader';
import coverImg from '../../images/cover_not_found.jpg';
import './BookList.css';

// Highly linked to context file.

const BookList = () => {
	const { books, loading, resultTitle } = useGlobalContext();
	const bookCovers = books.map((singleBook) => {
		return {
			// load
			...singleBook,
			// remove /works/ and get id only.
			id: singleBook.id.replace('/works/', ''),
			cover_img: singleBook.cover_id
				? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
				: coverImg,
		};
	});

	if (loading) return <Loading />;

	return (
		<section className="booklist">
			<div className="container">
				<div className="section-title">
					<h2>{resultTitle}</h2>
				</div>
				<div className="booklist-content grid">
					{bookCovers.slice(0, 30).map((item, index) => {
						return <Book key={index} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default BookList;
