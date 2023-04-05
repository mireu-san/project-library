import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loader/Loader';
import coverImg from '../../images/cover_not_found.jpg';
import './BookDetails.css';
import { FaArrowLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// const URL = 'https://openlibrary.org/works/';
const URL = 'http://localhost:3001/works/';

const BookDetails = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(false);
	const [book, setBook] = useState(null);
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	useEffect(() => {
		setLoading(true);
		async function getBookDetails() {
			try {
				const response = await axios.get(`${URL}${id}`);
				const data = response.data;
				// remove this once test is done!
				console.log(data);

				if (data) {
					const {
						description,
						title,
						covers,
						subject_places,
						subject_times,
						subjects,
					} = data;
					const newBook = {
						description: description
							? description.value
							: 'No description found',
						title: title,
						cover_img: covers
							? `https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`
							: coverImg,
						subject_places: subject_places
							? subject_places.join(', ')
							: 'No subject places found',
						subject_times: subject_times
							? subject_times.join(', ')
							: 'No subject times found',
						subjects: subjects ? subjects.join(', ') : 'No subjects found',
					};
					setBook(newBook);
					setError(null);
				} else {
					setBook(null);
					setError('No data found for this book.');
				}
			} catch (error) {
				console.log(error);
				setError('Something went wrong. Please try again later.');
			}
			setLoading(false);
		}
		getBookDetails();
	}, [id]);

	if (loading) return <Loading />;
	if (error) return <div>{error}</div>;

	return (
		<section className="book-details">
			<div className="container">
				<button
					type="button"
					className="flex flex-c back-btn"
					onClick={() => navigate('/book')}
				>
					<FaArrowLeft size={22} />
					<span className="fs-18 fw-6">Go Back</span>
				</button>

				{book ? (
					<div className="book-details-content grid">
						<div className="book-details-img">
							<img src={book.cover_img} alt="cover img" />
						</div>
						<div className="book-details-info">
							<div className="book-details-item title">
								<span className="fw-6 fs-24">{book.title}</span>
							</div>
							<div className="book-details-item description">
								<span>{book.description}</span>
							</div>
							<div className="book-details-item">
								<span className="fw-6">Subject Places: </span>
								<span className="text-italic">{book.subject_places}</span>
							</div>
							<div className="book-details-item">
								<span className="fw-6">Subject Times: </span>
								<span className="text-italic">{book.subject_times}</span>
							</div>
							<div className="book-details-item">
								<span className="fw-6">Subjects: </span>
								<span>{book.subjects}</span>
							</div>
						</div>
					</div>
				) : (
					<div className="book-not-found">
						<span>Book not found!</span>
					</div>
				)}
			</div>
		</section>
	);
};

export default BookDetails;
