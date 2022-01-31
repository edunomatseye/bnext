import React, {useCallback, useEffect} from 'react';
import {useRouter} from 'next/router'

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos = await response.json();

    return {
        props: {
            todos,
            revalidate: 600
        }
    }
}

function About({ todos }) {
    const router = useRouter()

    return <div>
        <h1>Welcome to the About page!</h1>
        <button  style={{margin: '30px', padding: '30px'}} onClick={()=>router.push('/')}>GO back to Home</button>

        {todos.map(t => <div key={t.id}>
            <span>UserID: {t.userId}</span>
            <span>Title: {t.title}</span>
            <span>Completed: {t.completed}</span>
        </div>)}

        <button style={{margin: '30px', padding: '30px'}} onClick={()=>router.push('/')}>GO back to Home noe</button>
    </div>;
}

export default About;
