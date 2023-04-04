import React from 'react';
import { motion } from 'framer-motion';
import SearchForm from '../SearchForm/SearchForm';
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
					<motion.p
						className="header-text fs-18 fw-3"
						variants={child}
						style={{ marginRight: '5px', marginTop: '10px' }}
					>
						Powered by <a href="https://openlibrary.org/">openlibrary.org</a>
					</motion.p>
					<SearchForm />
				</motion.div>
			</header>
		</div>
	);
};

export default Header;
