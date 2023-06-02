import React, { useMemo } from 'react'

interface SwapProps {
  assetIn?: number
  assetOut?: number
  amountIn?: number
  amountOut?: number
  width?: number
  height?: number
  className?: string
  style?: React.CSSProperties
}

const Swap: React.FC<SwapProps> = ({
  assetIn,
  assetOut,
  amountIn,
  amountOut,
  width,
  height,
  className,
  style
}) => {
  const src = useMemo(() => {
    const url = new URL('https://vestige.fi/widget/swap')
    if (typeof assetIn === 'number')
      url.searchParams.append('asset_in', assetIn.toString())
    if (typeof assetOut === 'number')
      url.searchParams.append('asset_out', assetOut.toString())
    if (amountIn && typeof amountIn === 'number')
      url.searchParams.append('amount_in', amountIn.toString())
    if (amountIn && typeof amountOut === 'number')
      url.searchParams.append('amount_out', amountOut.toString())
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
