import React, { useMemo } from 'react'

interface SwapProps {
  assetIn?: number
  assetOut?: number
  forceAssetId?: number
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
}

const Swap: React.FC<SwapProps> = ({
  assetIn,
  assetOut,
  forceAssetId,
  width,
  height,
  className,
  style
}) => {
  const src = useMemo(() => {
    const url = new URL('https://vestige.fi/widget/swap')
    url.searchParams.append('noCookie', 'true')
    if (typeof assetIn === 'number')
      url.searchParams.append('assetIn', assetIn.toString())
    if (typeof assetOut === 'number')
      url.searchParams.append('assetOut', assetOut.toString())
    if (typeof forceAssetId === 'number')
      url.searchParams.append('forceAssetId', forceAssetId.toString())
    return url.href
  }, [])

  return (
    <iframe
      title='Vestige Swap'
      src={src}
      className={className}
      style={{ width: width || 400, height: height || 450, ...(style || {}) }}
    />
  )
}

export default Swap
