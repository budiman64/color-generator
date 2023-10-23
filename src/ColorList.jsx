import React from 'react'
import SingleColor from './SingleColor'
import { nanoid } from 'nanoid'

const Colorlist = ({colors}) => {
  return (
    <section>
      {colors.map((color, index) => <SingleColor key={nanoid()} color={color} index={index}/>)}
    </section>
  )
}

export default Colorlist