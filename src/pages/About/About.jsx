import React from 'react';
import './About.css';
// import aboutImg from '../../images/library-bg2.gif';
import BookshelfCanvas from '../../components/canvas/Book';

const About = () => {
	return (
		<section className="about">
			<div className="container">
				<div className="section-title">
					<h2>About this page</h2>
				</div>

				<div className="about-content grid">
					<div className="about-img">
						<BookshelfCanvas />
						{/* <img src={aboutImg} alt="" /> */}
					</div>
					<div className="about-text">
						<h2 className="about-title fs-26 ls-1">
							Do you wonder why I made this space?
						</h2>
						<p className="fs-17">
							What if there is my own space I can apply for a new feature I
							discovered, but I can enjoy the space itself? As a bibliophile, I
							love to visit the public, university library. The online resources
							allow everyone to access their favorite books anytime, anywhere.
						</p>
						<p className="fs-17">
							Though the page look very simple, I hope the page could relief
							your burden for a moment.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
