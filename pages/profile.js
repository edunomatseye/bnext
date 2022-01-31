import React from 'react';
import { useSWR, SWRConfig } from 'swr'

function Profile({ users }) {
    
    return ( 
        <>
            {users.map(user => <div key={user.id}>
                <span>Name: {user.name}</span>
                <span>Username: {user.username}</span>
                <span>Email: {user.email}</span>
            </div>)}
        </>
    );
}

export async function getServerSideProps({}) {

    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    
    return {
        props: {
            users
        }
    }
}

export default Profile;
