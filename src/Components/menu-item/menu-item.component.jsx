import React from 'react'
import './menu-item.style.scss'



const MenuItem = props =>{
    // destructuring props
    const {title,imgUrl,size} = props
    return(
        <div 
        // added size an additional className to incorporaate its size
         className = {`${size} menu-item`}>

            <div 
            className = "background-image" 
            // sets respective background image for each menu item
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