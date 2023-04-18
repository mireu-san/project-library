import React from 'react';
import PropTypes from 'prop-types';
import './BookmarkModal.css';

const BookmarkModal = ({ show }) => {
	if (!show) {
		return null;
	}

	return (
		<div className="bookmark-modal-container">
			<div className="bookmark-modal">
				<p className="star-symbol">⭐</p>
				<p>Added to bookmark</p>
			</div>
		</div>
	);
};

export default BookmarkModal;

BookmarkModal.propTypes = {
	show: PropTypes.bool.isRequired,
};
