import React from 'react'
import './dynamic.css'



function dynamic({ms}){
    const totsec=Math.floor(ms/1000)
    const totmin=Math.floor(totsec/60)
    const sec =totsec%60
    const min =totmin%60
    const hr=Math.floor(totmin/60)
    return(<div className='dynamic'>
        <div className='time'><span className='dynamicspan'>{hr}</span><span className='staticspan'>hour</span></div><span className='dynamicspan'>:</span>
        <div className='time'><span className='dynamicspan'>{min}</span><span className='staticspan'>minute</span></div><span className='dynamicspan'>:</span>
        <div className='time'><span className='dynamicspan'>{sec}</span><span className='staticspan'>second</span></div>

    </div>)
}
export default dynamic