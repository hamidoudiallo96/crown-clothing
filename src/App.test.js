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

// HeaderTitle Component
describe('renders HeaderTitle without crashing', ()=>{
  it('should render header title without issue',()=>{
    const div1 = document.createElement('div')
    ReactDOM.render(<headerTitle />, div1)
    ReactDOM.unmountComponentAtNode(div1)
  })
}
)

// HomePage Component

describe('renders Homepage without crashing',()=>{
  it('should render without issues',()=>{
    const div2 = document.createElement('div')
    ReactDOM.render(<HomePage />, div2)
    ReactDOM.unmountComponentAtNode(div2)
  })
})

// Directory Component
describe('render Directory without crashing', () =>{
  it('it should render without issues',()=>{
    const div3 = document.createElement('div')
    ReactDOM.render(<Directory />, div3);
    ReactDOM.unmountComponentAtNode(div3)
  })
})


// MenuItems Component
describe('renders MenuItem without crashing', ()=>{
  it('it should render without issues',()=>{
    const div4 = document.createElement('div')
    ReactDOM.render(<MenuItem />,div4)
    ReactDOM.unmountComponentAtNode(div4)
  })
})


// testing Hats Component
describe('renders Hats without crashing', () =>{
  it('it should render without issues', () =>{
    const div5 = document.createElement('div')
    ReactDOM.render(<HatsPage />, div5)
    ReactDOM.unmountComponentAtNode(div5)
  })
})

// TODO:  finish this test

// describe('renders homePage without crashing '), ()=>{
//   it('it should render withoutt crashing'), ()=>{
//     const div6 = document.createElement('div')
//     ReactDOM.render(<HomePage />, div6)
//     ReactDOM.unmountComponentAtNode(div6)
//   }
// }

