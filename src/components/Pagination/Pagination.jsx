import React from 'react';
import PropTypes from 'prop-types';
import './Pagination.css';

const Pagination = ({ totalPages, currentPage, onPageChange }) => {
	return (
		<div className="pagination">
			{Array.from({ length: totalPages }, (_, index) => (
				<button
					key={index}
					className={`pagination-button ${
						currentPage === index + 1 ? 'active' : ''
					}`}
					onClick={() => onPageChange(index + 1)}
				>
					{index + 1}
				</button>
			))}
		</div>
	);
};

export default Pagination;

Pagination.propTypes = {
	totalPages: PropTypes.number.isRequired,
	currentPage: PropTypes.number.isRequired,
	onPageChange: PropTypes.func.isRequired,
};
