import React, { FC } from 'react'

interface PropRowProps {
  name?: string
  querySource: string
  query?: string
  type?: string
  description?: string
  defaultValue?: any
}

const PropRow: FC<PropRowProps> = ({
  name,
  type,
  description,
  defaultValue,
  querySource,
  query
}) => {
  return (
    <div className='py-2'>
      <div className='flex justify-between items-center'>
        <div className='font-bold'>{name}</div>
        <code className='text-sm'>
          (default: <b>{defaultValue?.toString() || 'undefined'}</b>)
        </code>
      </div>
      <code className='text-right'>{type}</code>
      {description && <div className='text-sm'>{description}</div>}
      {query && (
        <code className='text-right p-1 bg-black text-white select-all rounded text-xs'>
          {querySource}
          {query}
        </code>
      )}
    </div>
  )
}

export default PropRow
