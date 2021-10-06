import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

import MarkdownIt from "markdown-it";
const MdEditor = dynamic(() => import("react-markdown-editor-lite"), {
  ssr: false,
});
import "react-markdown-editor-lite/lib/index.css";
import { Button, Snackbar, TextField } from "@material-ui/core";
import { addArticle } from "../../../src/helpers/handlers/article";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";

const mdParser = new MarkdownIt();

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const AddArticle = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [articleErr, setArticleErr] = useState("");

  useEffect(() => {
    setTitle("");
    setContent("");
  }, []);

  const handleSubmit = async (event) => {
    try {
      if (title.length === 0) {
        const errorMsg = "Title cannot be empty"
        setArticleErr(errorMsg);
        throw new Error(errorMsg);
      }
      if (content.length === 0) {
        const errorMsg = "Story cannot be empty"
        setArticleErr(errorMsg);
        throw new Error(errorMsg);
      }
      event.preventDefault();
      const res = await addArticle(title, content);
      const data = await res.json();
      if (data && data.error) {
        setArticleErr(data.error);
        throw new Error(data.error);
      }
    } catch (err) {
      handleSnackbarClick();
    }
  };

  const handleEditorChange = ({ _, text }) => {
    setContent(text);
  };

  const [openSnackbar, setOpenSnackbar] = React.useState(false);

  const handleSnackbarClick = () => {
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

  return (
    <div>
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert onClose={handleSnackbarClose} severity="error">
          {articleErr}
        </Alert>
      </Snackbar>
      <TextField
        required
        onChange={(event) => setTitle(event.target.value)}
        id="story-title"
        label="Title"
        variant="standard"
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
