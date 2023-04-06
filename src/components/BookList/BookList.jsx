import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context';
import Book from './Book';
import Loading from '../Loader/Loader';
import coverImg from '../../images/cover_not_found.jpg';
import './BookList.css';

const BookList = () => {
	const { books, loading, resultTitle } = useGlobalContext();
	const [filterKeyword, setFilterKeyword] = useState('');
	const [filteredBooks, setFilteredBooks] = useState([]);

	useEffect(() => {
		const bookCovers = books.map((singleBook) => {
			return {
				...singleBook,
				id: singleBook.id.replace('/works/', ''),
				cover_img: singleBook.cover_id
					? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg`
					: coverImg,
			};
		});

		const keyword = filterKeyword.toLowerCase();
		const newFilteredBooks = bookCovers.filter((book) =>
			book.title.toLowerCase().includes(keyword)
		);
		setFilteredBooks(newFilteredBooks);
	}, [books, filterKeyword]);

	const handleFilterChange = (e) => {
		setFilterKeyword(e.target.value);
	};

	if (loading) return <Loading />;

	return (
		<section className="booklist">
			<div className="container">
				<div className="section-title">
					<h2>{resultTitle}</h2>
				</div>
				<input
					type="text"
					className="book-filter-input"
					placeholder="Filter the list by title."
					value={filterKeyword}
					onChange={handleFilterChange}
				/>
				<div className="booklist-content grid">
					{filteredBooks.slice(0, 30).map((item, index) => {
						return <Book key={index} {...item} />;
					})}
				</div>
			</div>
		</section>
	);
};

export default BookList;
