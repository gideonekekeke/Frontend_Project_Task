import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import log from "../../Assets/logo.png";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Header:React.FC = () => {
	return (
		<Container>
			<Logo src={log} />
			<NavHold>
				<NavLink to='/'>
					<Nav>Home</Nav>
				</NavLink>
				<Nav>About</Nav>
				<Nav>Services</Nav>
				<NavLink to='/products'>
					<Nav>Products</Nav>
				</NavLink>
			</NavHold>

			<IconsHold>
				<Icon>
					<BsSearch />
				</Icon>
				<Link to='/'>
					<Icon>
						<AiOutlineShoppingCart />
						<Count>0</Count>
					</Icon>
				</Link>

				<NavLink to='/'>
					<Button>Get Started</Button>
				</NavLink>
			</IconsHold>

			<NavLinkMobile to='/products'>
				<Button>Products</Button>
			</NavLinkMobile>
		</Container>
	);
};

export default Header;

const NavLinkMobile = styled(NavLink)`
	display: none;
	@media screen and (max-width: 900px) {
		display: block;
	}
`;

const Count = styled.div`
	height: 15px;
	width: 15px;
	border-radius: 50%;
	background-color: lightblue;
	font-size: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
`;

const Button = styled.button`
	height: 40px;
	width: 120px;
	background-color: #123456;
	color: white;
	border: none;
	outline: none;
	border-radius: 5px;
	transition: all 350ms;
	cursor: pointer;
	margin-left: 40px;

	:hover {
		background-color: transparent;
		color: black;
		transform: scale(0.98);
	}
`;

const IconsHold = styled.div`
	display: flex;
	align-items: center;

	@media screen and (max-width: 900px) {
		display: none;
	}
`;
const NavHold = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 900px) {
		display: none;
	}
`;
const Nav = styled.div`
	margin-left: 15px;
	margin-right: 15px;
`;
const Icon = styled.div`
	margin-left: 10px;
	margin-right: 10px;
	display: flex;
	align-items: center;
	cursor: pointer;
`;
const Logo = styled.img`
	/* height: 40px; */

	object-fit: contain;
	width: 100px;
	/* background-color: #123456; */
`;

const Container = styled.div`
	height: 70px;
	width: 100%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
		rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
`;
