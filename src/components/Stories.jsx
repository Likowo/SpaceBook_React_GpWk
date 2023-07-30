import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/app_context'

const Stories = () => {

  let { mainProfile, grabCharacters, characters, galacticHome,data,quotes } = useContext(AppContext)

// useEffect(() => {
//   console.log('it is working')
// }, [data])

  const [ underline, setUnderline ] = useState(true)
  const tempArray = [1,2,3,4,5,6,7,8,9,10]

  let friends = grabCharacters(20)

  const toggleLine = () => {
    setUnderline(!underline)
  }

  return (
    <div className='storiesContainer'>
{/* <>
  {quotes && quotes.map((quotes, index) => {
   return(
    <div key={index}>
      <h2>{quotes.author}</h2>
        <p>{quotes.content}</p>
    </div>);
  })}
  <li> {quotes && <p> {quotes}</p>} </li>
</> */}
        <div className="options">
          <div className={underline && 'underline'} onClick={() => setUnderline(true)}>Stories</div>
          <div className={!underline && 'underline'} onClick={() => setUnderline(false)}>Reels</div>
        </div>

        <hr/>

        <div className="stories">
          { friends?.map((friend, index) => {
            return (
              <div className="story" style={{backgroundImage: `url(${galacticHome[index]?.url})`}}>
                <img src={friend?.image} alt='profile pic' className='avatar'/>
                <p className='name'>{friend?.name}</p>
              </div>
            )
          }) }
        </div>
      
    </div>
  )
}

export default Stories
