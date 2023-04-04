import React, { useState, useRef, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useGlobalContext } from '../../context';
import { useSpring, animated } from 'react-spring';
import './SearchForm.css';

const SearchForm = () => {
	const { setSearchTerm, setResultTitle } = useGlobalContext();
	const searchText = useRef('');
	const navigate = useNavigate();
	const [isFocused, setIsFocused] = useState(false);
	const animatedSpringForm = useSpring({
		transform: isFocused ? 'scale(1.2)' : 'scale(1)',
	});

	useEffect(() => searchText.current.focus(), []);
	const handleSubmit = (e) => {
		e.preventDefault();
		let tempSearchTerm = searchText.current.value.trim();
		if (tempSearchTerm.replace(/[^\w\s]/gi, '').length === 0) {
			setSearchTerm('');
			setResultTitle('Please input some keyword first.');
		} else {
			setSearchTerm(searchText.current.value);
		}

		navigate('/book');
	};

	return (
		<div className="search-form" style={{ position: 'relative' }}>
			<animated.div className="container" style={animatedSpringForm}>
				<div className="search-form-content">
					<form className="search-form" onSubmit={handleSubmit}>
						<div
							className={`search-form-elem flex flex-sb bg-white ${
								isFocused ? 'focused' : ''
							}`}
							onFocus={() => setIsFocused(true)}
							onBlur={() => setIsFocused(false)}
						>
							<input
								type="text"
								className="form-control"
								placeholder="Input keyword here."
								ref={searchText}
							/>
							<button
								type="submit"
								className="flex flex-c"
								onClick={handleSubmit}
							>
								<FaSearch className="text-purple" size={32} />
							</button>
						</div>
					</form>
				</div>
			</animated.div>
		</div>
	);
};

export default SearchForm;
