import { useRouter } from "next/router";

import Cookies from "js-cookie";
import { routes, navText } from "../../../../constants/routes";

import {
  AppBar,
  IconButton,
  Toolbar,
  Button,
  Typography,
  Avatar,
  MenuItem,
  Menu,
} from "@material-ui/core";
import useStyles from "./Nav.styles";

import { logout } from "../../../helpers/handlers/auth";
import React, { useContext } from "react";
import { AuthContext } from "../../../helpers/AuthContext";

interface Props {
  isAuthenticated: boolean;
  name: string | undefined;
  isSmallScreen: boolean
}

const Nav = ({ isAuthenticated, name, isSmallScreen }: Props) => {
  const classes = useStyles();
  const router = useRouter();
  const authContext = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const logoutHandler = async () => {
    handleClose();
    const res = await logout();

    if (res.status < 300) {
      Cookies.remove("sessionID", {
        expires: 7,
        sameSite: "strict",
      });

      authContext.setAuth({ isAuthenticated: false, name: "", username: "" });
    }

    const data = await res.json();
    if (data) {
      router.push(routes.Home);
    }

    return data;
  };

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getNameInitials = () => {
    let first = "@";
    if (name && name.length > 0) {
      first = name.charAt(0);
      const strs = name.split(" ");
      if (strs && strs[1] && strs[1].length > 0) {
        first = first + " " + strs[1].charAt(0);
      }
    }
    return first;
  };

  return (
    <AppBar position="sticky" className={classes.appbar} elevation={0}>
      <Toolbar className={classes.appbarWrapper}>
        <span
          className={classes.titleWrapper}
          onClick={() => router.push(routes.Home)}
        >
          <Avatar className={classes.avatar} alt="Logo" src="/favicon.ico" />
          <Typography variant={isSmallScreen ? "body1" : "h5"} className={classes.appbarTitle}>
            Go-Next Site
          </Typography>
        </span>
        <Typography className={classes.appbarFlex}></Typography>
        {navText.map((nav, index) => {
          if (nav.link === routes.Login) {
            if (!isAuthenticated) {
              return (
                <Button
                  variant="contained"
                  color="secondary"
                  className={classes.navBtn}
                  onClick={() => router.push(nav.link)}
                  key={index}
                >
                  Sign In
                </Button>
              );
            }

            return (
              <React.Fragment key={index}>
                <IconButton
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <Avatar className={classes.green}>{getNameInitials()}</Avatar>
                </IconButton>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      router.push(routes.Dashboard);
                    }}
                  >
                    Dashboard
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      router.push(routes.AddStory);
                    }}
                  >
                    Add Story
                  </MenuItem>
                  <MenuItem onClick={logoutHandler}>Logout</MenuItem>
                </Menu>
              </React.Fragment>
            );
          }
          return (
            <Button
              key={index}
              className={classes.navBtn}
              onClick={() => {
                router.push(nav.link);
              }}
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
