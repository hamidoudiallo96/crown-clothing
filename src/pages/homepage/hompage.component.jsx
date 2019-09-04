import React from 'react'
import "./homePage.style.scss"

import Directory from '../../Components/directory/directory.component'

const HomePage = () =>{
    return(
        
        // HomePage contains Directory Component, this is the main container of 
        // our react component. Since I don't need any life cycle methods, I opted
        // for a functional component
        <Directory />
    )
}

export default HomePage