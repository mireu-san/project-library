import React from 'react';
import PropTypes from 'prop-types';
import { useTransition, animated } from 'react-spring';
import './BookmarkModal.css';

const BookmarkModal = ({ show }) => {
	const transitions = useTransition(show, {
		from: { opacity: 0, transform: 'scale(0.8)' },
		enter: { opacity: 1, transform: 'scale(1)' },
		leave: { opacity: 0, transform: 'scale(0.8)' },
		config: {
			duration: 500,
		},
	});

	return transitions(
		(styles, item) =>
			item && (
				<animated.div className="bookmark-modal-container" style={styles}>
					<div className="bookmark-modal">
						<p className="star-symbol">⭐</p>
						<p>Added to bookmark</p>
					</div>
				</animated.div>
			)
	);
};

export default BookmarkModal;

BookmarkModal.propTypes = {
	show: PropTypes.bool.isRequired,
};
