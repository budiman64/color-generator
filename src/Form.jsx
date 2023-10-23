import React, { useState } from 'react'

const Form = ({changeColor}) => {
    const [color, setColor] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        changeColor(color);
    };

    return (
        <section className='container'>
            <h4>Color Generator</h4>
            <form className='color-form' onSubmit={handleSubmit}>
                <input type='color' value={color} onChange={(e) => setColor(e.target.value)}/>
                <input type='text' placeholder='#123abc' value={color} onChange={(e) => setColor(e.target.value)}></input>
                <button className='btn' type='submit' style={{background: color}}>submit</button>
            </form>
        </section>
  )
}

export default Form;