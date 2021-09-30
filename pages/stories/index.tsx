import React from 'react'

import StoriesCards from "../../src/components/StoriesCards";

export async function getServerSideProps() {
	const backendURL = process.env.BACKEND_URL;
	// console.log(backendURL);
	const articlesURL = `${backendURL}/articles`;
	console.log(articlesURL);
	const res = await fetch(articlesURL);
	
	const articles = await res.json();
	if (!articles) {
		return {
			notFound: true,
		};
	}

	return {
		props: { articles },
	};
}


export default function Stories({articles}) {
    return (
        <StoriesCards articles={articles}/> 
    )
}
