import React from 'react'
import Hero from '../components/Home/Hero'
import RecentlyAdded from '../components/Home/RecentlyAdded'

const Home = () => {
  return (
    <div className="bg-zinc-900 text-white" >
      <Hero/>
      <RecentlyAdded/>
      </div>
  )
}

export default Home