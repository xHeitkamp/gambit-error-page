// import { useState } from 'react';
import { createStyles, Header, Container, Group } from '@mantine/core';
import GambitLogo from './Logo';

const useStyles = createStyles((theme) => ({
	header: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		height: '100%',
	},

	links: {
		[theme.fn.smallerThan('xs')]: {
			display: 'none',
		},
	},

	link: {
		display: 'block',
		lineHeight: 1,
		padding: '8px 12px',
		borderRadius: theme.radius.sm,
		textDecoration: 'none',
		color:
			theme.colorScheme === 'dark'
				? theme.colors.dark[0]
				: theme.colors.gray[7],
		fontSize: theme.fontSizes.sm,
		fontWeight: 500,

		'&:hover': {
			backgroundColor:
				theme.colorScheme === 'dark'
					? theme.colors.dark[6]
					: theme.colors.gray[0],
		},
	},
}));

interface HeaderSimpleProps {
	links: { link: string; label: string }[];
}

export default function HeaderSimple({ links }: HeaderSimpleProps) {
	const { classes, cx } = useStyles();

	const items = links.map((link) => (
		<a key={link.label} href={link.link} className={cx(classes.link)}>
			{link.label}
		</a>
	));

	return (
		<Header height={60} mb={120}>
			<Container className={classes.header}>
			<GambitLogo width={ 150 }  />
				<Group spacing={5} className={classes.links}>
					{items}
				</Group>
			</Container>
		</Header>
	);
}
