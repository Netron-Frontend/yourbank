'use client';
import Image from 'next/image';
import { NavBarStyle, NavLink, NavLinkReg, NavLogo, NavMenu, NavMenuReg } from '@/components/HomePage/NavBar/NavBar.styled';

import Logo from '@/MainPage/Logo.png';

export default function NavBar() {
	return (
		<NavBarStyle>
			<NavLogo href='#'>
				<Image src={Logo} alt={'logo'} />
			</NavLogo>
			<NavMenu>
				<NavLink href='#'>Home</NavLink>
				<NavLink href='#'>Careers</NavLink>
				<NavLink href='#'>About</NavLink>
				<NavLink href='#'>Security</NavLink>
			</NavMenu>
			<NavMenuReg>
				<NavLinkReg href='#'>Sign Up</NavLinkReg>
				<NavLinkReg href='#'>Login</NavLinkReg>
			</NavMenuReg>
		</NavBarStyle>
	);
}
