import React, { useContext } from 'react'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Header from '../components/Header'
import { AppContext } from '../context/app_context'

const Mobile = () => {

    // let { characters } = useContext(AppContext)
    // console.log(...characters)
  return (
    <div className="mobile">
      <h1>MOBILE</h1>
{/* 
      {characters.map((character) => {
        return <li>{character.name}</li>
      })}  */}
        <Header parent="mobile"/>
      <Routes>
        <Route /> 
        <Route /> 
      </Routes>

    </div>
  )
}

export default Mobile
