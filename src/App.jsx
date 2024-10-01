import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import { Fragment } from 'react'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'





function App() {
 

  return (
    <Fragment>

  
    <div className='container'>
    <Header/>
    <div className='divider'></div>
    <Hero/>
    <div className='divider'></div>
    <Main/>
    <div className='divider'></div>
    <Contact/>
    
    
    
    </div>

     
    </Fragment>
  )
}

export default App
