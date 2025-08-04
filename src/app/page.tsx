'use client';

import { MainPage, PageContainer } from './page.styled';
import Image from 'next/image';
import AbstractDesign1 from '../../public/images/MainPage/Abstract Design-1.png';
import NavBar from '@/components/HomePage/NavBar/NavBar';

export default function Page() {
	return (
		<MainPage>
			<Image
				src={AbstractDesign1}
				alt={'Abstract Design-1'}
				style={{
					width: 759,
					height: 610.81,
					left: '-70px',
					top: '-120px',
					position: 'absolute',
					zIndex: 900
				}}
			/>
			<PageContainer style={{ position: 'relative', zIndex: 1000 }}>
				<NavBar />
			</PageContainer>
		</MainPage>
	);
}
