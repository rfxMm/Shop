import React from 'react'
import Hero from '../Components/Hero'
import LatestCollection from '../Components/LatestCollection'
import BaseSeller from '../Components/BestSeller'
import OurPolicy from '../Components/OurPolicy'
import NewsletterBox from '../Components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <LatestCollection />
      <BaseSeller />
      <OurPolicy />
      <NewsletterBox />
    </div>
  )
}

export default Home
