import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Directory from './Components/directory/directory.component'
import HomePage from './pages/homepage/hompage.component';
import MenuItem from './Components/menu-item/menu-item.component';
import {HatsPage }from './App'


// Testing components 

// App Component
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  // clean up
  ReactDOM.unmountComponentAtNode(div);
});

// HomePage Component

describe('renders Homepage without crashing',()=>{
  it('should render without issues',()=>{
    const div1 = document.createElement('div')
    ReactDOM.render(<HomePage />, div1)
    ReactDOM.unmountComponentAtNode(div1)
  })
})

// Directory Component
describe('render Directory without crashing', () =>{
  it('it should render without issues',()=>{
    const div2 = document.createElement('div')
    ReactDOM.render(<Directory />, div2);
    ReactDOM.unmountComponentAtNode(div2)
  })
})


// MenuItems Component
// describe('renders MenuItem without crashing', ()=>{
//   it('it should render without issues',()=>{
//     const div3 = document.createElement('div')
//     ReactDOM.render(<MenuItem />,div3)
//     ReactDOM.unmountComponentAtNode(div3)
//   })
// })


// testing Hats Component
describe('renders Hats without crashing', () =>{
  it('it should render without issues', () =>{
    const div4 = document.createElement('div')
    ReactDOM.render(<HatsPage />, div4)
    ReactDOM.unmountComponentAtNode(div4)
  })
})


