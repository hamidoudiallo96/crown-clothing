import React, { Component } from 'react'
import MenuItem from '../menu-item/menu-item.component';


//  Opted for a class component, because I plan on using life cycle methods for 
// this component
export default class Directory extends Component {
    constructor(props){
        super(props)
        this.state = {
            sections:[{
                  title: 'hats',
                  imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]
              
        }
    }
    render() { 
        // destructuring state
        const {sections} = this.state
        return (
            <div className = "directory-menu">
                {/* mapping over MenuItem so that each object recieves its own card component */}
                {sections.map(({title,imageUrl,id,size}) => (
                    <MenuItem key ={id} title = {title} imgUrl = {imageUrl} size ={size} />
                ))}
            </div>
        )
    }
}
