import React from 'react'
import BtnSymbol from '../../assets/down.svg'
import './ViewAll.css'
import Image from 'next/image'
function ViewAll() {
  return (
    <div className='view-all-container'>
        <p className='view-all'>View All</p>
        <Image src={BtnSymbol}
        alt='down arrow'
        className="down"/>
    </div>
    
  )
}

export default ViewAll