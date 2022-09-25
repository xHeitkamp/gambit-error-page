import { Image } from '@mantine/core';

export interface LogoProps {
    width: Number;
    height?: Number;
}

export default function GambitLogo({ width, height }: LogoProps) {
	return (
			<Image
				width={ `${width}px` }
				src="assets/logo-gambit-consulting-350.png"
				alt="Gambit Consulting Logo"
			/>
	);
}
