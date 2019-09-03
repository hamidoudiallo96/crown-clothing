import React from 'react'
import './menu-item.style.scss'



const MenuItem = props =>{
    const {title,imgUrl,size} = props
    return(
        <div 
         className = {`${size} menu-item`}>

            <div 
            className = "background-image" 
            style ={{backgroundImage:`url(${imgUrl})`}} 

            />
            
            <div className="content">

                <h1 className = "title">{title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>

            </div>

        </div>
    )
}

export default MenuItem;