import styled from 'styled-components';

export const NavBarStyle = styled.nav`
	width: 100%;
	height: 95px;
	background: var(--grey-11);
	border-radius: 100px;
	border: 1px solid var(--grey-15);
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	padding: 20px 34px;
`;

export const NavMenu = styled.div`
	width: 371px;
	height: 51px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
export const NavMenuReg = styled.div`
	width: 240px;
	height: 55px;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const NavLink = styled.a`
	color: var(--absolute-white);
	font-size: 18px;
	font-family: var(--font-primary), sans-serif;
	line-height: 150%;
	letter-spacing: 0;
	font-weight: 400;
	text-align: center;
	transition: 0.3s;
	padding: 12px 24px;
	cursor: pointer;
	border-radius: 82px;
	&:hover {
		background: var(--grey-15);
		transition: 0.3s;
	}
`;
export const NavLinkReg = styled.a`
	color: var(--absolute-white);
	font-size: 18px;
	font-family: var(--font-primary), sans-serif;
	line-height: 150%;
	letter-spacing: 0;
	font-weight: 400;
	text-align: center;
	transition: 0.3s;
	padding: 14px 30px;
	border-radius: 82px;
	cursor: pointer;
	&:hover {
		background: var(--green-60);
		color: var(--grey-11);
		transition: 0.3s;
	}
`;
