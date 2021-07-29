import React, { useState } from "react";

import {
  useNameValidation,
  useEmailValidation,
  usePasswordValidation,
} from "../../helpers/useValidation";

import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { useRouter } from "next/router";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },

  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },

  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const RegistrationForm = (props) => {
  const classes = useStyles();

  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameError = useNameValidation(name);
  const emailError = useEmailValidation(email);
  const passwordError = usePasswordValidation(password);

  const [cognitoError, setCognitoError] = useState("");

  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // try {
    //   await Auth.signUp({
    //     username: email,
    //     password,
    //     attributes: {
    //       name: name,
    //     },
    //   });
    //   props.history.push("/registrationsuccess");
    // } catch (error) {
    //   console.log(error);
    //   setCognitoError(error.message);
    // }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography component="h1" variant="h5">
          Sign up
        </Typography>

        <div style={{ color: "red" }}>{cognitoError}</div>

        <form onSubmit={handleSubmit} className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="name"
                name="name"
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                autoFocus
                onChange={nameChangeHandler}
              />
              <div style={{ color: "red" }}>{nameError}</div>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={emailChangeHandler}
              />
              <div style={{ color: "red" }}>{emailError}</div>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
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
          </Grid>

          <Button
            disabled={
              nameError !== "" || emailError !== "" || passwordError !== ""
            }
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item xs>
              <Link onClick={() => router.push("login")} variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default RegistrationForm;
