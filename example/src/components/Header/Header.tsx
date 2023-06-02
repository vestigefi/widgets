import React from 'react'
import ShieldImage from './ShieldImage'

const Header = () => {
  return (
    <div className='flex flex-col bg-black text-white py-6'>
      <div className='flex flex-col sm:flex-row justify-center items-center gap-4'>
        <div className='text-4xl'>@vestigefi/widgets</div>
        <div>
          by{' '}
          <a
            href='https://github.com/vestigefi'
            className='text-blue-300 hover:text-blue-100'
          >
            Vestige Labs
          </a>
        </div>
      </div>
      <div className='text-sm flex justify-center items-center pt-4 px-4 text-center'>
        Embeddable asset charts & swap widgets for Algorand
      </div>
      <div className='flex gap-2 justify-center p-2'>
        <ShieldImage
          href={'https://www.npmjs.com/package/@vestigefi/widgets'}
          src={'https://img.shields.io/npm/v/@vestigefi/widgets.svg'}
          alt='npm package version'
        />
        <ShieldImage
          href={'https://github.com/vestigefi/widgets'}
          src={
            'https://img.shields.io/github/stars/vestigefi/widgets?style=social'
          }
          alt='github stars'
        />
        <ShieldImage
          href='https://github.com/vestigefi/widgets'
          src='https://img.shields.io/npm/l/@vestigefi/widgets'
          alt='MIT license'
        />
      </div>
    </div>
  )
}

export default Header
