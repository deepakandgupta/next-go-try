import React, {useEffect, useState} from 'react'

export default function Dashboard({articles}) {
	const getData = async () => {
		const backendURL = "http://localhost:5000";
		const url = `${backendURL}/dashboard`;
		console.log(url);
	
		const res = await fetch(url, {
			credentials: "include",
			method: "GET",
			headers: {
				'Content-Type': 'application/json',
			},
			mode: "cors"
		});
    
		const data = await res.json()
		setIsLoggedIn(res.status < 300);
		setUserData(data);
	}

	const [userData, setUserData] = useState(undefined);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		getData();
	}, [])

	if(!isLoggedIn || !userData){
		return (<div>Not Found</div>)
	}
    return (
        <div>Welcome {userData ? userData.message : {}}</div>
    )
}