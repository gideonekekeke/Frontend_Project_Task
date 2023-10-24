import React from "react";
import styled from "styled-components";
import { FaTwitter } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

const FooterContainer = styled.footer`
	background-color: white;
	color: black;
	padding: 20px;
	text-align: center;
`;

const FooterText = styled.p`
	margin: 0;
`;

const SocialIcons = styled.div`
	margin-top: 10px;

	.social-icon {
		font-size: 1.5rem;
		margin: 0 10px;
		color: black;
		cursor: pointer;
	}
`;

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<FooterText>
				Developed by <b>Gideon Ekeke</b>, &copy; {new Date().getFullYear()}
			</FooterText>
			<SocialIcons>
				<a href='https://twitter.com/GiddyCode02'>
					<FaTwitter className='social-icon' />
				</a>
				<a href='https://github.com/gideonekekeke'>
					{" "}
					<AiFillGithub className='social-icon' />
				</a>
			</SocialIcons>
		</FooterContainer>
	);
};

export default Footer;
