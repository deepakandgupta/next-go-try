import React, { useState } from "react";
import { useRouter } from "next/router";

import { routes, navText } from "../../../../constants/routes";

import {
	Avatar,
	Box,
	SwipeableDrawer,
	List,
	Divider,
	ListItem,
	ListItemIcon,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./NavPhone.styles";


interface Props {
	isAuthenticated: boolean;
	name: string | undefined;
}

const NavPhone = ({isAuthenticated, name}: Props) => {
	const [openDrawer, setOpenDrawer] = useState(false);
	const router = useRouter();
	const classes = useStyles();

	const toggleDrawer = (open: boolean) => {
		setOpenDrawer(open);
	};

	const list = () => (
		<div
			className={classes.navPhoneroot}
			role="presentation"
			onClick={() => toggleDrawer(false)}
			onKeyDown={() => toggleDrawer(false)}
		>
			<List className={classes.companyTag}>
				<ListItem
					onClick={() => router.push(routes.Home)}
					className={classes.logoPhone}
				>
					<ListItemIcon>
						<Avatar
							alt="Logo"
							src="favicon.ico"
						/>
					</ListItemIcon>
				</ListItem>
				<Typography className={classes.headings}>
					Go-Next Site
				</Typography>
			</List>
			<List>
				<Divider />
				{navText.map((nav, index) => {
					return (
						<ListItem
							button
							key={index}
							onClick={() => {
								router.push(nav.link);
							}}
						>
							{/* <MenuBookIcon className={classes.iconsPhone} /> */}
							<Typography className={classes.navLinks}>
								{nav.text}{" "}
							</Typography>
						</ListItem>
					);
				})}
			</List>
		</div>
	);

	return (
		<div>
			<AppBar position="relative">
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
						onClick={() => toggleDrawer(true)}
					>
						<MenuIcon />
					</IconButton>
					<Box
						onClick={() => router.push(routes.Home)}
						className={classes.title}
					>
						<Avatar
							alt="Logo"
							src="/favicon.ico"
						/>
						<Typography className={classes.headings} variant="h6">
							Go-Next Site
						</Typography>
					</Box>
					{/* <Button color="inherit">Login</Button> */}
				</Toolbar>
			</AppBar>
			<SwipeableDrawer
				anchor="left"
				open={openDrawer}
				onClose={() => toggleDrawer(false)}
				onOpen={() => toggleDrawer(true)}
			>
				{list()}
			</SwipeableDrawer>
		</div>
	);
}

export default NavPhone;