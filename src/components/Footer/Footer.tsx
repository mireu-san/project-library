import React from 'react';
import styled from 'styled-components';

interface NavLinkPropsFooter {
	active?: boolean;
}

const FooterWrapper = styled.div`
	.nav {
		justify-content: center;
		border-bottom: 1px solid #dee2e6;
		padding-bottom: 0.5rem;
		margin-bottom: 1rem;
	}

	.nav-item {
		margin-right: 0.5rem;
	}

	.nav-link {
		color: #6c757d;
		&:hover {
			color: #212529;
		}
	}

	.text-body-secondary {
		color: #6c757d;
	}
`;

const NavLink = styled.a<NavLinkPropsFooter>`
	color: ${(props) => (props.active ? 'white' : '#6c757d')};
	text-decoration: none;
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
	&:hover {
		color: #212529;
	}
`;

const Footer = () => {
	return (
		<FooterWrapper>
			<div className="container">
				<footer className="py-3 my-4">
					<ul className="nav justify-content-center border-bottom pb-3 mb-3">
						<li className="nav-item">
							<NavLink href="/" className="nav-link">
								Home
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink href="/" className="nav-link">
								Features
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink href="/" className="nav-link">
								Pricing
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink href="/" className="nav-link">
								FAQs
							</NavLink>
						</li>
						<li className="nav-item">
							<NavLink href="/" className="nav-link">
								About
							</NavLink>
						</li>
					</ul>
					<p className="text-center text-body-secondary">
						&copy; 2023 Company, Inc
					</p>
				</footer>
			</div>
		</FooterWrapper>
	);
};

export default Footer;
