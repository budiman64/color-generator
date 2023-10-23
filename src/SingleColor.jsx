import React from 'react'

const SingleColor = ({color, index}) => {

  console.log(color);
  const {hex, weight} = color;
  return (
    <article className='color' style={{ background: `#${hex}` }}>
      <p>{weight}%</p>
      <p>{hex}</p>
    </article>
  ) 
}

export default SingleColor