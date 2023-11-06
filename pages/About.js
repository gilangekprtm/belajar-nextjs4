import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from './components/navbar'

export default function About({data}) {
  return (
    <>
      <Head>
        <title>About | Belajar Nextjs</title>
        <meta name="description" content="Belajar Nextjs" />
      </Head>
        <Navbar />
        <Image src='/vercel.svg' alt='Vercel Logo' width={100} height={100} />
      {data.map((item) => (
        <div key={item.id}>
          <h1>{item.name}</h1>
          <p>{item.email}</p>
        </div>
      ))}
    </>
  )
}

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      data: data,
    },
  }
}
