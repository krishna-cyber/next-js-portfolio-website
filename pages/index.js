import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import  {data}  from '../data'

import styles from '../styles/Home.module.css'


export default function Home({services}){
  console.log(services);
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro/>
      <Services services={services}/>
    </div>
  )
}

export async function getStaticProps() {
  const services = await data;
  return {
    props: {services:data}
  }
}