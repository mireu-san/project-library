import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { Outlet } from 'react-router-dom';
import './Home.css';

const Home = () => {
	return (
		<div className="app">
			<Header />
			<main className="body">
				<Outlet />
			</main>
			{/* <Footer /> */}
		</div>
	);
};

export default Home;
