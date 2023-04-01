import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
// import HomeBody from '../../components/HomeBody/HomeBody';
// yet to insert state.

const Home = () => {
	return (
		<section>
			<div className="home">
				<div className="home-container">
					<div className="home-navbar">
						<Header />
					</div>
					<div className="home-heading-header">
						{/* <HomeBody /> */}
						{/* - add banner here. --- beyond this point, use css --- */}
						<span>banner top</span>
						<span>banner picture</span>
						<span>search bar</span>
					</div>
					<div className="home-body">
						<span>new Date</span>
						<span>Using the library</span>
						<span>subtitle</span>
						<span>may load the list of book here?</span>
					</div>
					<div className="home-footer">
						<Footer />
					</div>
				</div>
			</div>
		</section>
	);
};
// add return later.

export default Home;
