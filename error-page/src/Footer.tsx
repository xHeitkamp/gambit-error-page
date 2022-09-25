import { createStyles, Anchor, Group, ActionIcon } from '@mantine/core';
import {
	IconBrandLinkedin,
	IconBrandXing,
	IconBrandYoutube,
	IconBrandInstagram,
} from '@tabler/icons';
import GambitLogo from './Logo';

const useStyles = createStyles((theme) => ({
	footer: {
		marginTop: 120,
		borderTop: `1px solid ${
			theme.colorScheme === 'dark'
				? theme.colors.dark[5]
				: theme.colors.gray[2]
		}`,
	},

	inner: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: `${theme.spacing.md}px ${theme.spacing.md}px`,

		[theme.fn.smallerThan('sm')]: {
			flexDirection: 'column',
		},
	},

	links: {
		[theme.fn.smallerThan('sm')]: {
			marginTop: theme.spacing.lg,
			marginBottom: theme.spacing.sm,
		},
	},
}));

interface FooterCenteredProps {
	links: { link: string; label: string }[];
}

export default function FooterSimple({ links }: FooterCenteredProps) {
	const { classes } = useStyles();
	const items = links.map((link) => (
		<Anchor<'a'>
			color="dimmed"
			key={link.label}
			href={link.link}
			sx={{ lineHeight: 1 }}
			size="sm"
		>
			{link.label}
		</Anchor>
	));

	return (
		<div className={classes.footer}>
			<div className={classes.inner}>
				<GambitLogo width={100} />
				<Group className={classes.links}>{items}</Group>

				<Group spacing="xs" position="right" noWrap>
					<ActionIcon
						size="lg"
						variant="default"
						radius="xl"
						component="a"
						href="https://www.linkedin.com/company/gambit-consulting-gmbh/"
					>
						<IconBrandLinkedin size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon
						size="lg"
						variant="default"
						radius="xl"
						component="a"
						href="https://www.xing.com/pages/gambit"
					>
						<IconBrandXing size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon
						size="lg"
						variant="default"
						radius="xl"
						component="a"
						href="https://www.instagram.com/gambitconsulting/"
					>
						<IconBrandInstagram size={18} stroke={1.5} />
					</ActionIcon>
					<ActionIcon
						size="lg"
						variant="default"
						radius="xl"
						component="a"
						href="https://www.youtube.com/c/GambitConsultingGmbH"
					>
						<IconBrandYoutube size={18} stroke={1.5} />
					</ActionIcon>
				</Group>
			</div>
		</div>
	);
}
