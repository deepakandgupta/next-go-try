import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        navPhoneroot: {
            flexGrow: 1,
            textAlign: "center",
            backgroundColor: theme.palette.primary.main,
            minWidth: "35vw",
            maxWidth: "100vw",
            [theme.breakpoints.down("xs")]:{
                minWidth: "50vw",
            }
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            // color: "#fff",
            flexGrow: 1,
            justifyContent: "center",
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer"
        },
        headings: {
            color: "#fff",
            fontSize: "2rem",
            [theme.breakpoints.down("xs")]:{
                fontSize: "1.5rem",
            }
        },
        navLinks: {
            color: "#fff",
            fontSize: "1.5rem",
            [theme.breakpoints.down("xs")]:{
                fontSize: "1rem",
            }
        },
        logoPhone: {
            justifyContent: "center",
        },
        iconsPhone: {
            color: "white"
        },
        companyTag:{
            padding: 0
        }
    })
);

export default useStyles;