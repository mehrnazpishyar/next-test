import Head from 'next/head'
import { Navbar } from '../components/navbar'



export default function Home() {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="" />
      </Head>
      <h1>Navbar</h1>
      <Navbar />
    </div>
  )
}
