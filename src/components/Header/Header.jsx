import React from 'react';
import { motion } from 'framer-motion';
import SearchForm from '../SearchForm/SearchForm';
import StarsCanvas from '../canvas/Stars';
import PaladinCanvas from '../canvas/Paladin';
import './Header.css';

const Header = () => {
	const container = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: { staggerChildren: 0.12, delayChildren: 0.04 },
		},
	};

	const child = {
		hidden: {
			opacity: 0,
			x: 20,
		},
		visible: {
			opacity: 1,
			x: 0,
			transition: {
				type: 'spring',
				damping: 12,
				stiffness: 100,
			},
		},
	};

	return (
		<div className="holder">
			<header className="header">
				<motion.div
					className="header-content flex flex-c text-center text-white"
					style={{ overflow: 'hidden' }}
					variants={container}
					initial="hidden"
					animate="visible"
				>
					<motion.h2
						className="header-title text-capitalize"
						variants={child}
						style={{ marginRight: '5px' }}
					>
						Welcome to Library.Mireu-san
					</motion.h2>
					<br />
					<motion.p className="header-text fs-18 fw-3" variants={child}>
						Powered by openlibrary.org
					</motion.p>
					<div
						className="search-form"
						style={{
							position: 'absolute',
							zIndex: 2,
							marginTop: window.innerWidth <= 768 ? '10px' : '-30px',
							marginBottom: '20px',
						}}
					>
						<SearchForm />
					</div>
					<div
						className="star-canvas"
						style={{ position: 'absolute', zIndex: 0 }}
					>
						<StarsCanvas />
					</div>
					<div
						className="paladin-book"
						style={{
							position: 'relative',
							zIndex: 1,
							marginTop: window.innerWidth <= 768 ? '60px' : '160px',
						}}
					>
						<PaladinCanvas />
					</div>
					<p style={{ position: 'relative', zIndex: 2 }}>
						&copy; 2023{' '}
						<a
							href="https://github.com/mireu-san/project-library"
							style={{ color: 'white', cursor: 'pointer' }}
						>
							mireu-san
						</a>
					</p>
					<p>
						DISCLAIMER <br />I do not own any of the 3D objects and images here.
					</p>
				</motion.div>
			</header>
		</div>
	);
};

export default Header;
