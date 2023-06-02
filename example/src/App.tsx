import React from 'react'
import './index.css'
import Header from './components/Header/Header'
import InstallationGuide from './components/InstallationGuide'
import Documentation from './components/Documentation/Documentation'
import { Chart, Swap } from '@vestigefi/widgets'

const App = () => {
  return (
    <div className='w-full pb-20 pointer-events-auto'>
      <Header />
      <div className='flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 p-4 md:space-x-4'>
        <Chart className='rounded-lg max-w-full' />
        <Swap className='rounded-lg' />
      </div>
      <InstallationGuide />
      <Documentation />
    </div>
  )
}

export default App
