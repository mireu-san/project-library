import React from 'react';
import PropTypes from 'prop-types';
import './RemoveModal.css';

const RemoveModal = ({ show, bookId, bookTitle }) => {
	if (!show || !bookId) {
		return null;
	}

	return (
		<div className="remove-modal-container">
			<div className="remove-modal">
				<p className="trash-symbol">🗑️</p>
				<p>
					Removed <br />
					{bookTitle}
				</p>
			</div>
		</div>
	);
};

export default RemoveModal;

RemoveModal.propTypes = {
	show: PropTypes.bool.isRequired,
	bookId: PropTypes.string,
	bookTitle: PropTypes.string,
};
