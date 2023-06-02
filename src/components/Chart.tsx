import React, { useMemo } from 'react'

const intervals = [
  '1',
  '3',
  '5',
  '15',
  '30',
  '45',
  '60',
  '120',
  '180',
  '240',
  '1D',
  '1W',
  '1M'
]
type Interval = typeof intervals[number]

interface ChartProps {
  assetId?: number
  poolId?: number
  currency?: 'ALGO' | 'USD' | 'EUR' | 'GBP' | 'BTC'
  invert?: boolean
  adjust?: boolean
  tools?: boolean
  interval?: Interval
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
}

const Chart: React.FC<ChartProps> = ({
  assetId,
  poolId,
  currency,
  invert,
  adjust,
  tools,
  interval,
  width,
  height,
  className,
  style
}) => {
  const src = useMemo(() => {
    const url = new URL(
      `https://vestige.fi/widget/${assetId || 700965019}/chart`
    )
    if (poolId) url.searchParams.append('poolId', poolId.toString())
    if (interval) url.searchParams.append('interval', interval)
    if (currency) url.searchParams.append('currency', currency)
    if (invert !== undefined)
      url.searchParams.append('invert', invert ? 'true' : 'false')
    if (adjust !== undefined)
      url.searchParams.append('adjust', adjust ? 'true' : 'false')
    if (tools !== undefined)
      url.searchParams.append('tools', tools ? 'true' : 'false')
    return url.href
  }, [assetId, poolId, currency, invert, adjust, tools, interval])

  return (
    <iframe
      title='Vestige.fi Chart'
      src={src}
      className={className}
      style={{ width: width || 1024, height: height || 650, ...(style || {}) }}
    />
  )
}

export default Chart
