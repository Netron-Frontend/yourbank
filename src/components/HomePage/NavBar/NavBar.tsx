'use client';
import Image from 'next/image';
import { NavBarStyle, NavLink, NavLinkReg, NavMenu, NavMenuReg } from '@/components/HomePage/NavBar/NavBar.styled';

// @ts-ignore
import Logo from '@/MainPage/Logo.png';

export default function NavBar() {
	return (
		<NavBarStyle>
			<a href='#'>
				<Image src={Logo} alt={'logo'} width={155.83} height={40} />
			</a>
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
			{/*test text*/}
		</NavBarStyle>
	);
}
