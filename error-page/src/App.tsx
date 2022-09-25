import React from 'react';
import { MantineProvider } from '@mantine/core';
import i18next from './i18n'

import HeaderSimple from './Header';
import FooterSimple from './Footer';

function App() {
	return (
		<MantineProvider
			theme={{
				// Override any other properties from default theme
				fontFamily: 'Century Gothic, Helvetica, Arial, sans-serif',
				spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
			}}
		>
			<div className="App">
				<HeaderSimple
					links={[
						{
							link: 'https://www.gambit.de',
							label: 'GAMBIT Homepage',
						},
						{ link: 'https://www.gambug.de', label: 'Gambug' },
						{ link: 'https://kimai.gambit.de', label: 'Kimai' },
					]}
				/>
				<FooterSimple
					links={[
						{
							link: 'https://www.gambit.de/kontakt/',
							label: i18next.t('footer.contact'),
						},
						{
							link: 'https://www.gambit.de/datenschutz/',
							label: i18next.t('footer.privacy'),
						},
						{
							link: 'https://www.gambit.de/impressum/',
							label: i18next.t('footer.impressum'),
						},
					]}
				/>
			</div>
		</MantineProvider>
	);
}

export default App;
