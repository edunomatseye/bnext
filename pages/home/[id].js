import React from 'react';
import { useRouter } from 'next/router'

export async function getStaticPaths() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = await response.json()

    const paths = posts.map(post => ({
        params: {
            id: `${post.id}`
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    const profile = await response.json()

    return {
        props: {
            profile
        },
        revalidate: 1
    }
}

function Home({ profile }) {
    const router = useRouter();

    if(router.isFallback){
        return <div>Loading fallback...</div>
    }
    return (<div>

        <h1>Welcome to the home page, Read about your profile.</h1>
        <button style={{margin: '30px', padding: '30px'}} onClick={()=>router.push('/home')}>GO back to Home</button>

        <div className="">
            <div>
                <span>Title: {profile.title}</span>
                <br/><hr/>
                <span>{profile.body}</span>
            </div>
        </div>
    </div>);
}

export default Home;
