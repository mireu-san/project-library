import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';

const Book = (book) => {
	const [isChecked, setIsChecked] = useState(false);
	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
		const selectedBooks =
			JSON.parse(localStorage.getItem('selectedBooks')) || {};
		if (!isChecked) {
			selectedBooks[book.id] = true;
		} else {
			delete selectedBooks[book.id];
		}
		localStorage.setItem('selectedBooks', JSON.stringify(selectedBooks));
	};

	useEffect(() => {
		const selectedBooks =
			JSON.parse(localStorage.getItem('selectedBooks')) || {};
		setIsChecked(selectedBooks[book.id] || false);
	}, [book.id]);

	return (
		<div className="book-item flex flex-column flex-sb">
			<div className="book-item-checkbox">
				<input
					type="checkbox"
					checked={isChecked}
					onChange={handleCheckboxChange}
				/>
			</div>
			<div className="book-item-img">
				<img src={book.cover_img} alt="cover" />
			</div>
			<div className="book-item-info text-center">
				<Link to={`/book/${book.id}`} {...book}>
					<div className="book-item-info-item title fw-7 fs-18">
						<span>{book.title}</span>
					</div>
				</Link>
				<div className="book-item-info-item author fs-15">
					<span className="text-capitalize fw-7">Author: </span>
					<span>{book.author.join(', ')}</span>
				</div>
				<div className="book-item-info-item edition-count fs-15">
					<span className="text-capitalize fw-7">Total Editions: </span>
					<span>{book.edition_count}</span>
				</div>
				<div className="book-item-info-item publish-year fs-15">
					<span className="text-capitalize fw-7">First Publish Year: </span>
					<span>{book.first_publish_year}</span>
				</div>
			</div>
		</div>
	);
};

export default Book;
