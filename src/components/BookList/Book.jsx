import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';
import { useTrail, animated } from 'react-spring';
import Tilt from 'react-parallax-tilt';

const Book = (book) => {
	const [isChecked, setIsChecked] = useState(() => {
		const storedValue = localStorage.getItem(book.id);
		return storedValue !== null ? JSON.parse(storedValue) : false;
	});

	useEffect(() => {
		if (isChecked) {
			localStorage.setItem(book.id, JSON.stringify(book));
		} else {
			localStorage.removeItem(book.id);
		}
	}, [isChecked, book.id]);

	const handleCheckboxChange = () => {
		setIsChecked(!isChecked);
	};

	const trail = useTrail(1, {
		from: { transform: 'translateX(-50px)', opacity: 0 },
		to: { transform: 'translateX(0)', opacity: 1 },
	});

	return (
		<animated.div style={trail[0]}>
			<Tilt
				tiltReverse={true}
				className="tilt"
				tiltMaxAngleX={10}
				tiltMaxAngleY={10}
				perspective={1000}
				transitionSpeed={1000}
				scale={1.2}
				gyroscope={true}
			>
				<div className="book-item flex flex-column flex-sb">
					<div className="book-item-img">
						<img src={book.cover_img} alt="cover" />
					</div>
					<div className="book-item-info text-center">
						<Link to={`/book/${book.id}`} {...book}>
							<div className="book-item-info-item title fw-7 fs-18">
								<p>{book.title}</p>
							</div>
						</Link>

						{/* {book.author && (
						<div className="book-item-info-item author fs-15">
							<p className="text-capitalize fw-7">Author: </p>
							<p>{book.author.join(', ')}</p>
						</div>
					)} */}
						{book.author && (
							<div className="book-item-info-item author fs-15">
								<p className="text-capitalize fw-7">Author: </p>
								<p>
									{book.author.map((author, index) => (
										// Use React.Fragment here to prevent burden on DOM performance.
										<React.Fragment key={index}>
											<p>{author}</p>
											{index !== book.author.length - 1 && <p>, </p>}
										</React.Fragment>
									))}
								</p>
							</div>
						)}

						{book.edition_count && (
							<div className="book-item-info-item edition-count fs-15">
								<p className="text-capitalize fw-7">Total Editions: </p>
								<p>{book.edition_count}</p>
							</div>
						)}

						{book.first_publish_year && (
							<div className="book-item-info-item publish-year fs-15">
								<p className="text-capitalize fw-7">First Publish Year: </p>
								<p>{book.first_publish_year}</p>
							</div>
						)}
					</div>
					<div className="book-item-bookmark">
						<label>
							<input
								type="checkbox"
								checked={isChecked}
								onChange={handleCheckboxChange}
							/>
						</label>
					</div>
				</div>
			</Tilt>
		</animated.div>
	);
};

export default Book;
