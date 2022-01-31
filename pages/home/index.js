import React from 'react';
import Link from 'next/link'
import {useRouter} from 'next/router'

export async function getStaticProps(ctx) {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const profiles = await response.json()

    return {
        props: {
            profiles
        },
        revalidate: 300
    }
}


function Index({ profiles }) {
    const router = useRouter()
  return <div>

      <h1>Welcome to the home page, pls select your profile.</h1>
      <button style={{margin: '30px', padding: '30px'}} onClick={()=>router.push('/')}>GO back to Home</button>


      {profiles.map(p => <div key={p.id}>
          <div>
              Title: <Link href={`/home/${p.id}`}><a>{p.title}</a></Link>
          </div>
      </div>)}
  </div>;
}

export default Index;
