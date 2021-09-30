enum routes {
    Home = "/",
    Article = "/stories",
    Dashboard = "/dashboard",
    AddArticle = "/:addArticle",
    Login = "/login",
}

const navText = [
    { text: "Home", link: routes.Home },
    { text: "Stories", link: routes.Article },
    { text: "Dashboard", link: routes.Dashboard },
    { text: "AddArticle", link: routes.AddArticle },
    {
        text: "Login",
        link: routes.Login,
    },
];

export {routes, navText};
