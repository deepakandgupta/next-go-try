import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import { green, pink } from "@material-ui/core/colors";

const useStyles = makeStyles((theme: Theme) =>
createStyles({
    appbar: {
        margin: 0,
        padding: 0,
        zIndex: theme.zIndex.drawer + 1,
        height: "80px",
        justifyContent: "center"
    },
    avatar: {
        transformOrigin: "center",
        transition: "transform 1s",
        "&:hover": {
            transform: "rotate(360deg)",
        },
    },
    appbarWrapper: {
        width: "100%",
        margin: "0 auto",
        textAlign: "center"
    },
    titleWrapper: {
        cursor: "pointer",
        display: "contents",
    },
    appbarTitle: {
        color: "fff",
        textAlign: "left",
    },
    appbarFlex: {
        flexGrow: 1,
    },
    icon: {
        color: "#ffffff",
        fontSize: "2rem",
    },
    colorText: {
        color: "#326872",
    },
    navBtn: {
        color: "white",
        fontSize: "20px",
        textTransform: "capitalize"
    },
    pink: {
        color: theme.palette.getContrastText(pink[500]),
        backgroundColor: pink[500],
      },
      green: {
        color: '#fff',
        backgroundColor: theme.palette.secondary.main,
        minWidth: "50px",
        minHeight: "50px"
      },
}),
);

export default useStyles;