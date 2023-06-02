import React from 'react'

const InstallationGuide = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='w-full flex justify-center text-3xl gap-2 bg-black text-white py-3'>
        Installation Guide
      </div>
      <div className='flex flex-col max-w-2xl items-center justify-center p-4'>
        <div className='p-4'>
          <div className='p-2'>As with any other library, use:</div>
          <div className='shadow bg-black text-white p-4 rounded select-all'>
            <code>yarn add @vestigefi/widgets</code>
          </div>
          <div className='p-2'>
            if you're using <b>Yarn</b>, and
          </div>
          <div className='shadow bg-black text-white p-4 rounded select-all'>
            <code>npm install @vestigefi/widgets</code>
          </div>
          <div className='p-2'>
            if you're using <b>NPM</b>.
          </div>
        </div>
        <div className='p-4'>
          <div className='p-2'>
            After that, you will be able to import components like this:
          </div>
          <div className='shadow bg-black text-white p-4 rounded select-all'>
            <code>{`import { Chart, Swap } from '@vestigefi/widgets'`}</code>
          </div>
        </div>
        <div className='p-4'>
          <div className='p-2'>
            You can also create your own components based on this code:
          </div>
          <div className='shadow bg-black text-white p-4 rounded select-all'>
            <code>
              {`<iframe`}
              <br />
              {`title="Vestige Widget"`}
              <br />
              {`src="https://vestige.fi/widget/700965019/chart"`}
              <br />
              {`width="200" height="200"`}
              <br />
              {`/>`}
            </code>
          </div>
          <div className='p-2'>
            Simply replace <i>src</i> with your desired link using query string
            examples below.
          </div>
        </div>
      </div>
    </div>
  )
}

export default InstallationGuide
