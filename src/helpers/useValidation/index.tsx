import { useState, useEffect } from "react";

export const useNameValidation = (name) => {
  const [err, setErr] = useState("");
  useEffect(() => {
    if (name.length !== 0) {
      if (!name.match(/^[a-zA-Z]+$/))
        setErr("Name Should only contain alphabets unless its Jr Musk");
      else if (name.length < 3)
        setErr("Name should be Greater than 3 character");
      else setErr("");
    } else setErr("");
  }, [name]);

  return err;
};

export const useEmailValidation = (email) => {
  const [err, setErr] = useState("");
  useEffect(() => {
    if (
      email.length !== 0 &&
      !email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)
    ) {
      setErr("Enter a Valid Email Address");
    } else setErr("");
  }, [email]);
  return err;
};

export const usePasswordValidation = (password) => {
  const [err, setErr] = useState("");
  useEffect(() => {
    if (
      password.length > 0 &&
      !password.match(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/
      )
    ) {
      setErr(
        "The force is not strong with this password, add atleast 1 special characters, 1 digit and capital letter to it"
      );
    } else setErr("");
  }, [password]);
  return err;
};
