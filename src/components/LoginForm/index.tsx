import React, { useState } from "react";
import {
  useEmailValidation,
  usePasswordValidation,
} from "../../helpers/useValidation"

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { useRouter } from "next/router";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },

  image: {
    backgroundImage: "url(https://source.unsplash.com/user/erondu)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },

  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const LoginForm = ({submitHandler}) => {
  const classes = useStyles();

  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const emailError = useEmailValidation(email);
  const passwordError = usePasswordValidation(password);
  const [authError, setAuthError] = useState("");

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const res = await submitHandler(email, password)
    console.log(res);
    // router.push("/dashboard")
    // try {
    // //   const signedInUserData = await Auth.signIn(email, password);
    //   setIsAuthenticatedHandler(true);
    // //   setUserDataHandler(signedInUserData.signInUserSession.idToken.payload);
    // //   props.history.push("/dashboard");
    // } catch (error) {
    //   setIsAuthenticatedHandler(false);
    //   setUserDataHandler(null);
    // }
  };

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />

      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>

          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <div style={{ color: "red" }}>{authError}</div>

          <form onSubmit={handleSubmit} className={classes.form}>
            <Grid item>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={emailChangeHandler}
              />
              <div style={{ color: "red" }}>{emailError}</div>
            </Grid>

            <Grid item>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={passwordChangeHandler}
              />
              <div style={{ color: "red" }}>{passwordError}</div>
            </Grid>

            <Button
              className={classes.submit}
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={emailError !== "" || passwordError !== ""}
            >
              Sign In
            </Button>

            <Grid container>
              <Grid item>
                <Link onClick={() => router.push("register")} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
