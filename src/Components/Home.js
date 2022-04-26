import React from 'react'
import Slider from './Slider'
import Investing from './Investing'
import Rewards from './Rewards'
import Application from './Application'
import Referal from './Referal'
import Launching from './Launching'
const Home = () => {
  return (
    <div className='web-home'>
      <Slider />
      <Investing />
      <Launching />
      <Referal />
      <Application />
      <Rewards />
    </div>
  )
}

export default Home