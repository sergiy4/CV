import React, {Component} from 'react';
import Header from './component/Header';
import Work from './component/Work';
import Skills from './component/Skills';
import Education from './component/Education';
import Info from './component/Info';
import './App.css';

class App extends Component{

  constructor(){
    super()
  }

  render(){
    return (
      <div className='Page_withHeader'>
        <Header />
        <div className='Page_withoutHeader'>

           <div className='left_side'>
            <Info />
            <Skills />
          </div>

          <div className='right_side'>
            <Work />
            <Education/>
          </div>

        </div>
        
      </div>
    )
  }
}

export default App;
