import React from 'react';
import styled from 'styled-components';

interface NavLinkPropsHeader {
	active?: boolean;
}

const HeaderWrapper = styled.header`
	padding: 3px;
	background-color: #343a40;
	color: white;
`;

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	justify-content: lg-start;
	padding: 0 15px;
`;

const LogoLink = styled.a`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
	margin-bottom: lg-0;
	color: white;
	text-decoration: none;
`;

const LogoSvg = styled.svg`
	width: 40px;
	height: 32px;
	margin-right: 10px;
`;

const Nav = styled.ul`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: center;
	justify-content: lg-start;
	margin-bottom: 20px;
	margin-bottom: lg-0;
`;

const NavItem = styled.li`
	margin-right: 15px;
`;

const NavLink = styled.a<NavLinkPropsHeader>`
	color: ${(props) => (props.active ? 'white' : '#6c757d')};
	text-decoration: none;
	padding: 0.5rem 1rem;
	border-radius: 0.25rem;
	&:hover {
		color: white;
	}
`;

// const SearchForm = styled.form`
// 	display: flex;
// 	flex-wrap: wrap;
// 	align-items: center;
// 	justify-content: center;
// 	justify-content: lg-start;
// 	margin-bottom: 20px;
// 	margin-bottom: lg-0;
// `;

// const SearchInput = styled.input`
// 	width: auto;
// 	border-radius: 0.25rem;
// 	margin-right: 15px;
// `;

const LoginWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: flex-end;
	margin-left: auto;
`;

const LoginButton = styled.button`
	color: white;
	border-color: white;
	margin-right: 10px;
`;

const SignUpButton = styled.button`
	background-color: #ffc107;
	color: white;
	border-color: #ffc107;
`;

const DropdownMenu = styled.ul`
	display: none;
	position: absolute;
	background-color: #f9f9f9;
	min-width: 160px;
	z-index: 1;
`;

const DropdownItem = styled.li`
	color: black;
	padding: 12px 16px;
	text-decoration: none;
	display: block;
	&:hover {
		background-color: #f1f1f1;
	}
`;

const DropdownLink = styled.a`
	color: black;
	text-decoration: none;
`;

const NavDropdown = styled(NavItem)`
	position: relative;
	&:hover ${DropdownMenu} {
		display: block;
	}
`;

const Header = () => {
	return (
		<HeaderWrapper>
			<Container>
				<LogoLink href="/">
					<LogoSvg role="img" aria-label="Bootstrap">
						<use xlinkHref="#bootstrap" />
					</LogoSvg>
				</LogoLink>

				<Nav>
					<NavItem>
						<NavLink href="#" active>
							Home
						</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">Features</NavLink>
					</NavItem>
					<NavItem>
						<NavDropdown>
							<NavLink href="#">Collections</NavLink>
							<DropdownMenu>
								<DropdownItem>
									<DropdownLink href="#">Books</DropdownLink>
								</DropdownItem>
								<DropdownItem>
									<DropdownLink href="#">Archives</DropdownLink>
								</DropdownItem>
								<DropdownItem>
									<DropdownLink href="#">Maps</DropdownLink>
								</DropdownItem>
							</DropdownMenu>
						</NavDropdown>
					</NavItem>
					<NavItem>
						<NavLink href="#">Pricing</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">FAQs</NavLink>
					</NavItem>
					<NavItem>
						<NavLink href="#">About</NavLink>
					</NavItem>
				</Nav>

				{/* <SearchForm>
					<SearchInput
						type="search"
						className="form-control form-control-dark"
						placeholder="Search..."
						aria-label="Search"
					/>
				</SearchForm> */}

				<LoginWrapper>
					<LoginButton type="button" className="btn btn-outline-light me-2">
						Login
					</LoginButton>
					<SignUpButton type="button" className="btn btn-warning">
						Sign-up
					</SignUpButton>
				</LoginWrapper>
			</Container>
		</HeaderWrapper>
	);
};

export default Header;
