import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { MdMenuOpen } from 'react-icons/md';

const Navbar = () => {
	const [toggleMenu, setToggleMenu] = useState(false);
	const handleNavbar = () => setToggleMenu(!toggleMenu);

	return (
		<nav className="navbar" id="navbar">
			<div className="container navbar-content flex">
				<div className="brand-and-toggler flex flex-sb">
					<Link to="/" className="navbar-brand flex">
						<span className="text-uppercase text-white fw-7 fs-24 ls-1">
							Private Book Searcher
						</span>
					</Link>
					<button
						type="button"
						className="navbar-toggler-btn"
						onClick={handleNavbar}
					>
						<MdMenuOpen
							size={35}
							style={{
								color: toggleMenu ? '#fff' : '#010101',
								backgroundColor: toggleMenu ? '#010101' : '#fff',
								borderRadius: '10px',
							}}
						/>
					</button>
				</div>

				<div
					className={
						toggleMenu
							? 'navbar-collapse show-navbar-collapse'
							: 'navbar-collapse'
					}
				>
					<ul className="navbar-nav">
						<li className="nav-item">
							<Link
								to="book"
								className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
							>
								History
							</Link>
						</li>
						<li className="nav-item">
							<Link
								to="about"
								className="nav-link text-uppercase text-white fs-22 fw-6 ls-1"
							>
								About
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
