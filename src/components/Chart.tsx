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
type Interval = (typeof intervals)[number]

interface ChartProps {
  assetId?: number
  denominatingAssetId?: number
  interval?: Interval
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
}

const Chart: React.FC<ChartProps> = ({
  assetId,
  denominatingAssetId,
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
    url.searchParams.append('noCookie', 'true')
    if (interval) url.searchParams.append('interval', interval)
    if (denominatingAssetId) {
      url.searchParams.append(
        'denominatingAssetId',
        denominatingAssetId.toString()
      )
    }
    return url.href
  }, [assetId, denominatingAssetId, interval])

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
