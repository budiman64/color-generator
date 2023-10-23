import React from 'react'
import { toast } from 'react-toastify';

const SingleColor = ({color, index}) => {
  const {hex, weight} = color;
  const copyToClipboard = async () => {
    if(navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Copied to clipboard')
      } catch (error) {
        toast.error('Failed to copy to clipboard')
      }
    }
    else{
      toast.error('Clipboard access not available')
    }
  }

  return (
    <article className='color' 
    style={{ background: `#${hex}` }}
    onClick={copyToClipboard}
    >
      <p>{weight}%</p>
      <p>{hex}</p>
    </article>
  ) 
}

export default SingleColor