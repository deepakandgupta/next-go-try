const backendURL = "http://localhost:5000";
enum routes {
    Home = "/",
    Article = "/stories",
    Dashboard = "/dashboard",
    AddStory = "mystories/add",
    Login = "/login",
}

const navText = [
    { text: "Home", link: routes.Home },
    { text: "Stories", link: routes.Article },
    {
        text: "Login",
        link: routes.Login,
    },
];

export {routes, navText, backendURL};
