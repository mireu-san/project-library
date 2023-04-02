import React from 'react';
import Navbar from '../Navbar/Navbar';
import SearchForm from '../SearchForm/SearchForm';
import './Header.css';

const Header = () => {
	return (
		<div className="header-root">
			<header className="header">
				<Navbar />
				<div className="header-content flex flex-c text-center text-white">
					<h2 className="header-title text-capitalize">Welcome to LIBRARY.</h2>
					<br />
					<SearchForm />
					<p className="header-text fs-18 fw=3">
						Note: This database search provider is from NHN(Naver).
					</p>
				</div>
			</header>
		</div>
	);
};

export default Header;
