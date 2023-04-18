import React from 'react';
import PropTypes from 'prop-types';
import './RemoveModal.css';
import { useTransition, animated } from 'react-spring';

const RemoveModal = ({ show, bookTitle }) => {
	const transitions = useTransition(show, {
		from: { opacity: 0, transform: 'scale(0.8)' },
		enter: { opacity: 1, transform: 'scale(1)' },
		leave: { opacity: 0, transform: 'scale(0.8)' },
		config: {
			duration: 300,
		},
	});

	return transitions(
		(styles, item) =>
			item && (
				<animated.div className="remove-modal-container" style={styles}>
					<div className="remove-modal">
						<p className="trash-symbol">🗑️</p>
						<p>
							Removed <br />
							{bookTitle}
						</p>
					</div>
				</animated.div>
			)
	);
};

export default RemoveModal;

RemoveModal.propTypes = {
	show: PropTypes.bool.isRequired,
	bookId: PropTypes.string,
	bookTitle: PropTypes.string,
};
