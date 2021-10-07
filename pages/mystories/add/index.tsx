import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";

import MarkdownIt from "markdown-it";
const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});
import "react-markdown-editor-lite/lib/index.css";
import { Button, Snackbar, TextField } from "@material-ui/core";
import { addArticle } from "../../../src/helpers/handlers/article";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import { AuthContext } from "../../../src/helpers/AuthContext";
import Loader from "../../../src/components/Loader";

const mdParser = new MarkdownIt();

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddArticle = () => {
  const authContext = useContext(AuthContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [snackBarType, setSnackBarType] = useState(false);

  const [loading, setLoading] = useState(false);

  const [articleErr, setArticleErr] = useState("");

  useEffect(() => {}, [title, content]);

  const handleSubmit = async (event) => {
    setLoading(true);
    try {
      if (title.length === 0) {
        const errorMsg = "Title cannot be empty";
        setArticleErr(errorMsg);
        throw new Error(errorMsg);
      }
      if (content.length === 0) {
        const errorMsg = "Story cannot be empty";
        setArticleErr(errorMsg);
        throw new Error(errorMsg);
      }
      event.preventDefault();
      const res = await addArticle(title, content);
      setTitle("");
      setContent("");
      const data = await res.json();
      if (data && data.error) {
        setArticleErr(data.error);
        throw new Error(data.error);
      }
      handleSnackbarClick(true);
      setArticleErr("Story Posted");
    } catch (err) {
      handleSnackbarClick();
    } finally {
      setLoading(false);
    }
  };

  const handleEditorChange = ({ _, text }) => {
    setContent(text);
  };

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleSnackbarClick = (success?: boolean) => {
    if (success) {
      setSnackBarType(true);
    } else {
      setSnackBarType(false);
    }
    setOpenSnackbar(true);
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSnackbar(false);
  };

  if (!authContext.auth.isAuthenticated) {
    return <Loader />;
  }

  return (
    <div>
      {loading && <Loader />}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackBarType ? "success" : "error"}
        >
          {articleErr}
        </Alert>
      </Snackbar>
      <TextField
        required
        onChange={(event) => setTitle(event.target.value)}
        id="story-title"
        label="Title"
        variant="standard"
        value={title}
      />
      <MdEditor
        plugins={[
          "header",
          "font-bold",
          "font-italic",
          "list-ordered",
          "table",
          "divider",
          "list-unordered",
          "logger",
          "clear",
          "mode-toggle",
        ]}
        style={{ height: "80vh" }}
        renderHTML={(text) => mdParser.render(text)}
        onChange={handleEditorChange}
        value={content}
      />
      <div style={{ width: "100%", textAlign: "center" }}>
        <Button
          onClick={handleSubmit}
          type="submit"
          variant="contained"
          color="primary"
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default AddArticle;
