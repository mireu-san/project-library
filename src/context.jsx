import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
// Highly linked to BookList file.

const URL = 'http://openlibrary.org/search.json?title=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
	const [searchTerm, setSearchTerm] = useState('input keyword here.');
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);
	const [resultTitle, setResultTitle] = useState('');

	const fetchBooks = useCallback(async () => {
		setLoading(true);
		try {
			const response = await axios.get(`${URL}${searchTerm}`);
			const data = response.data;
			const { docs } = data;
			console.log('Data here!', data.docs);

			if (docs) {
				const newBooks = docs.slice(0, 20).map((bookSingle) => {
					const {
						key,
						author_name,
						cover_i,
						edition_count,
						first_publish_year,
						title,
					} = bookSingle;

					return {
						id: key,
						author: author_name,
						cover_id: cover_i,
						edition_count: edition_count,
						first_publish_year: first_publish_year,
						title: title,
					};
				});

				setBooks(newBooks);

				if (newBooks.length > 1) {
					setResultTitle('Your Search Result');
				} else {
					setResultTitle(
						'No search results found. Please try again using a different approach.'
					);
				}
			} else {
				setBooks([]);
				setResultTitle(
					'No search results found. Please try again using a different approach.'
				);
			}
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	}, [searchTerm]);

	useEffect(() => {
		fetchBooks();
	}, [searchTerm, fetchBooks]);

	return (
		<AppContext.Provider
			value={{
				// BookList
				books,
				loading,
				resultTitle,
				// SearchForm
				setSearchTerm,
				setResultTitle,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

AppProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export { AppContext, AppProvider };
