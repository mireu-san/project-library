import React from 'react';
import './About.css';
import BookshelfCanvas from '../../components/canvas/Book';
// import Footer from '../../components/Footer/Footer';

const About = () => {
	return (
		<section className="about">
			<div className="container-about">
				<div className="section-title">
					<h2>About this page</h2>
				</div>

				<div className="about-content grid">
					<div className="about-img">
						<BookshelfCanvas />
					</div>
					<div className="about-text">
						<h2 className="about-title fs-26 ls-1">
							Do you wonder why I created this space?
						</h2>
						<p className="fs-17">
							What if there was a personal space where I could apply new
							features I discovered while still being able to enjoy the space
							itself? As a bibliophile, I love visiting public and university
							libraries. Online resources allow everyone to access their
							favorite books anytime, anywhere.
						</p>
						<p className="fs-17">
							Although the page may look quite simple, I hope this Private Book
							Searcher can offer you a unique experience, even if just for a
							moment.
						</p>
					</div>
				</div>
			</div>
			{/* <Footer /> */}
		</section>
	);
};

export default About;
