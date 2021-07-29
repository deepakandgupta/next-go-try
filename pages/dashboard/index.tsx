import React from 'react'
import axios from 'axios';

export async function getServerSideProps() {
	const backendURL = process.env.BACKEND_URL;
	const url = `${backendURL}/dashboard`;
	console.log(url);
	// const res = await axios.get(url, {withCredentials: true})
	const res = await fetch(url, {
		credentials: "include",
		method: "GET",
		headers: {
            'Content-Type': 'application/json'
        },
		mode: "cors"
	});
    
	const data = await res.json()
	console.log(data);
	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { data },
	};
}

export default function Dashboard({articles}) {
    return (
        <div>Welcome</div>
    )
}