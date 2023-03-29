import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import HomeBody from '../../components/HomeBody/HomeBody';
// yet to insert state.

const Home = () => {
	return (
		<section>
			<div className="home">
				<div className="home-container">
					<div className="home-navbar">
						<Header />
					</div>
					<div className="home-header">
						{/* <HomeBody /> */}
						{/* - add banner here. --- beyond this point, use css --- */}
						<div>banner top</div>
						<div>banner picture</div>
						<div>search bar</div>
					</div>
					<div className="home-body">
						<div>new Date</div>
						<div>Using the library</div>
						<div>subtitle</div>
						<div>may load the list of book here?</div>
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
