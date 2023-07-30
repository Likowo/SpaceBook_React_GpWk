import { useContext, useEffect } from 'react';
import './App.css';
import Desktop from './pages/Desktop';
import Mobile from './pages/Mobile';
import Tablet from './pages/Tablet';
import { AppContext } from './context/app_context';
import { Link, useFetcher } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Profile from './pages/Profile';
import Root from './pages/Root';

function App() {

  let { windowWidth, clickedProfile, setPageMount, setCharacters, fetchRick, grabCharacters } = useContext(AppContext)

  // setPageMount(true)
  // console.log(window.innerWidth)
  // console.log('CLICKED PROFILE', clickedProfile)

  // issue with not having characters ready on render... attempt fix failed
//   useEffect(() => {
//     let array = grabCharacters(20)
//     setCharacters(array)
    
//     return () => {
//         fetchRick('https://rickandmortyapi.com/api/character?page=1')
//         console.log('unmount')
//         console.log(array)
//     }
// }, [])

  const hide = (toeNail) => {
    toeNail.classList.add('hide')
  }

  // mobile
    if(windowWidth <= 400){
      return (
        <>
          <Routes> 
            <Route path="*" element={<h1>you are lost</h1>} />
            <Route path="/" element={<Root />} />
            <Route path="/home" element={<Mobile />}/>
            <Route path={`/profile/${clickedProfile.name?.replaceAll(' ', '')}`} element={<Profile profile={clickedProfile} parent="mobile"/>}/>
          </Routes>
        </>
      )
    }
    
    // tablet
    if(windowWidth > 390 && windowWidth <= 1200 ){
      return (
        <>
          <Routes>
            <Route path="*" element={<h1>you are lost</h1>} />
            <Route path="/" element={<Root />} />
            <Route path="/home/*" element={<Tablet />}/>
            <Route path={`/profile/${clickedProfile.name?.replaceAll(' ', '')}`} element={<Profile profile={clickedProfile} parent="tablet"/>}/>
          </Routes>
        </>
      )
    }

    // desktop
    if(windowWidth > 1200){
      return (
        <>
          {/* <h1 style={{margin:"100px"}}>DESKTOP</h1> */}
          <Routes>
            <Route path="*" element={<h1>you are lost</h1>} />
            <Route path="/" element={<Root />} />
            <Route path="/home" element={<Desktop />}/>
            <Route path={`/profile/${clickedProfile.name?.replaceAll(' ', '')}`} element={<Profile profile={clickedProfile}/>} parent="desktop"/>
          </Routes>
        </>
      )
    }

  
}

export default App;
