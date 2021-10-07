
import React from "react";
import { useRouter } from "next/router";

import { Button, Paper, Typography } from "@material-ui/core";
import { routes } from "../constants/routes";

export default function NotFound() {
    const router = useRouter();
	return (
		<Paper style={{ minHeight: "calc(100vh - 180px)", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} elevation={0}>
			<Typography variant="h1">404</Typography>
			<Typography variant="h5">
				The page you are looking for does not exist
			</Typography>
			<div style={{ textAlign: "center", padding: "20px" }}>
				<Button onClick={() => router.push(routes.Home)} variant="contained" color="primary">
					Home
				</Button>
			</div>
		</Paper>
	);
}