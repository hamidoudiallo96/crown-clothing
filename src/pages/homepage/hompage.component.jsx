import React from 'react'
import "./homePage.style.scss"

import Directory from '../../Components/directory/directory.component'
import HeaderTitle from '../header-title/header-title.component'

const HomePage = () =>(
        
        // HomePage contains Directory Component, this is the main container of 
        // our react component. Since I don't need any life cycle methods, I opted
        // for a functional component
       <div>
                <HeaderTitle />
                <Directory />
       </div>
)


export default HomePage