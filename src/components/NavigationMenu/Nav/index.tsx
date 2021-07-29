import { useRouter } from "next/router";

import { routes, navText } from "../../../../constants/routes";

import {
    AppBar,
    IconButton,
    Toolbar,
    Button,
    Typography,
    Avatar,
} from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountBox";
import useStyles from "./Nav.styles"

const Nav = () => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <AppBar position="sticky" className={classes.appbar} elevation={0}>
            <Toolbar className={classes.appbarWrapper}>
                <span
                    className={classes.titleWrapper}
                    onClick={() => router.push(routes.Home)}
                >
                    <Avatar
                        className= {classes.avatar}
                        alt="Logo"
                        src="/favicon.ico"
                    />
                    <Typography variant="h5" className={classes.appbarTitle}>
                        Go-Next Site
                    </Typography>
                </span>
                <Typography className={classes.appbarFlex}></Typography>
                {navText.map((nav, index) => {
                    if (nav.link === routes.Login) {
                        return (
                            <IconButton
                                onClick={() => router.push(nav.link)}
                                key={index}
                            >
                                <AccountCircleIcon className={classes.icon} />
                            </IconButton>
                        );
                    }
                    return (
                        <Button
                            key={index}
                            className={classes.navBtn}
                            onClick={() => {router.push(nav.link)}}
                        >
                            {nav.text}
                        </Button>
                    );
                })}
            </Toolbar>
        </AppBar>
    );
};

export default Nav;
