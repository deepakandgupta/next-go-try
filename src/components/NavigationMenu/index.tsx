import React, { useEffect } from "react";
import Nav from "./Nav";
import NavPhone from "./NavPhone";

import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const NavigationMenu = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.up("md"));

    useEffect(() => {}, [matches]);

    return <>{matches ? <Nav /> : <NavPhone />}</>;
};
export default NavigationMenu;
