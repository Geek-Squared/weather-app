import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../components/AppBar'
import Search from '../components/SearchBoxField'
import styles from '../styles/styles'

const Home: NextPage = () => {
 const classes = styles()
  return (
    <div>
      <Head>
        <title>Weather Showcast</title>
        <meta name="description" content="A weather application" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

       <Nav />
      <main className={classes.root}>
        <Search />
      </main>

    </div>
  )
}

export default Home
