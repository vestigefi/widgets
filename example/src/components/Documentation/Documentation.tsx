import React from 'react'
import PropRow from './PropRow'

const CHART_PROPS = [
  {
    name: 'assetId',
    type: 'number',
    defaultValue: 700965019,
    description: 'Primary ASA id for which the chart should be displayed'
  },
  {
    name: 'poolId',
    type: 'number',
    defaultValue: undefined,
    description:
      'Vestige internal pool id for a specific pool. Can be found through free-api.vestige.fi/asset/<id>/pools',
    query: '?poolId=123'
  },
  {
    name: 'currency',
    type: "one of ['ALGO', 'USD', 'EUR', 'GBP', 'BTC']",
    defaultValue: 'ALGO',
    description:
      'Currency in which the chart should be denominated (ignored if poolId specified)',
    query: '?currency=USD'
  },
  {
    name: 'invert',
    type: 'boolean',
    defaultValue: false,
    description: 'Whether the chart should be inverted (true) or not (false)',
    query: '?invert=true'
  },
  {
    name: 'adjust',
    type: 'boolean',
    defaultValue: true,
    description:
      'Whether the chart should be adjusted using IQR for better viewing (true) or not (false)',
    query: '?adjust=false'
  },
  {
    name: 'tools',
    type: 'boolean',
    defaultValue: undefined,
    description:
      'Whether the chart should display drawing tools by default (true) or not (false)',
    query: '?tools=true'
  },
  {
    name: 'interval',
    type: "one of ['1', '3', '5', '15', '30', '45', '60', '120', '180', '240', '1D', '1W', '1M']",
    defaultValue: '1D',
    description:
      'Time interval selected for the chart, in minutes or 1D for day, 1W for week, 1M for month',
    query: '?interval=240'
  },
  {
    name: 'width',
    type: 'number',
    defaultValue: 1024,
    description: 'Width of chart component in pixels'
  },
  {
    name: 'height',
    type: 'number',
    defaultValue: 650,
    description: 'Height of chart component in pixels'
  },
  {
    name: 'className',
    type: 'string',
    defaultValue: undefined,
    description: 'CSS class names passed to to chart component'
  },
  {
    name: 'style',
    type: 'React.CSSProperties',
    defaultValue: {},
    description: 'Style object object passed to chart component'
  }
]

const SWAP_PROPS = [
  {
    name: 'assetIn',
    type: 'number',
    defaultValue: 0,
    description: 'Asset id for trade source',
    query: '?asset_in=0'
  },
  {
    name: 'assetOut',
    type: 'number',
    defaultValue: 31566704,
    description: 'Asset id for trade destination',
    query: '?asset_out=0'
  },
  {
    name: 'amountIn',
    type: 'number',
    defaultValue: undefined,
    description: 'Default amount (with decimals) for trade source',
    query: '?amount_in=100'
  },
  {
    name: 'amountOut',
    type: 'number',
    defaultValue: undefined,
    description: 'Default amount (with decimals) for trade destination',
    query: '?amount_out=100'
  },
  {
    name: 'width',
    type: 'number',
    defaultValue: 400,
    description: 'Width of chart component in pixels'
  },
  {
    name: 'height',
    type: 'number',
    defaultValue: 450,
    description: 'Height of chart component in pixels'
  },
  {
    name: 'className',
    type: 'string',
    defaultValue: undefined,
    description: 'CSS class names passed to to chart component'
  },
  {
    name: 'style',
    type: 'React.CSSProperties',
    defaultValue: {},
    description: 'Style object object passed to chart component'
  }
]

const Documentation = () => {
  return (
    <>
      <div className='flex justify-center text-3xl gap-2 bg-black text-white py-3'>
        API Docs
      </div>
      <div className='flex justify-center items-center'>
        <div className='w-full flex flex-col gap-8 max-w-2xl py-4'>
          <div className='p-2 border shadow'>
            <div className='text-xl font-bold'>Chart props</div>
            <div className='text-sm text-gray-600 pb-4'>
              All props are optional
            </div>
            {CHART_PROPS.map((prop, index) => (
              <PropRow
                querySource='https://vestige.fi/widget/700965019/chart'
                key={`${prop.name}-${index}`}
                {...prop}
              />
            ))}
          </div>
          <div className='p-2 border shadow'>
            <div className='text-xl font-bold'>Swap props</div>
            <div className='text-sm text-gray-600 pb-4'>
              All props are optional
            </div>
            {SWAP_PROPS.map((prop, index) => (
              <PropRow
                querySource='https://vestige.fi/widget/swap'
                key={`${prop.name}-${index}`}
                {...prop}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Documentation
