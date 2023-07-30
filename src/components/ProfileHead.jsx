import React from 'react'
import { useContext, useState } from 'react'
import { AppContext } from '../context/app_context'

const ProfileHead = () => {
    let { clickedProfile, setClickedProfile, galacticHome, getRandomIntInclusive, grabCharacters, grabRandomCharacters } = useContext(AppContext)

    let friends = grabRandomCharacters(9)

    const [ count, setCount ] = useState(0)

    const switchUnderline = (num) => {
            setCount(num)
        console.log(count)
    }

  return (
    <div className='profileHead'>
        <div className="top">
            <div className="left">
                <img className='profilePic' src={clickedProfile.image} alt="" srcset="" />
                <div className="stack">
                    <h1 className='name'>{clickedProfile.name}</h1>
                    <p className="mutuals">118 mutual friends</p>
                    <div className="pics">
                        {friends.map((friend, index) => {
                            return <img src={friend.image} style={{zIndex:`${Number(-(index))}`}}/>
                        })}
                    </div>
                </div>
            </div>
            <div className="right">
                <button>Friends</button>
                <button className="message">Message</button>
                <button>▽</button>
            </div>
        </div>
        <hr />
        <div className="bottom">
            <div className="tabs">
                <p className={count === 0 && "underline"} onClick={() => switchUnderline(0)}>Posts</p>
                <p className={count === 1 && "underline"} onClick={() => switchUnderline(1)}>About</p>
                <p className={count === 2 && "underline"} onClick={() => switchUnderline(2)}>Friends</p>
                <p className={count === 3 && "underline"} onClick={() => switchUnderline(3)}>Photos</p>
                <p className={count === 4 && "underline"} onClick={() => switchUnderline(4)}>Videos</p>
                <p className={count === 5 && "underline"} onClick={() => switchUnderline(5)}>Reels</p>
                <p>More▾</p>
            </div>

            <button>
                <img className="dots" src="https://static.thenounproject.com/png/1380510-200.png" alt="" srcset="" />
            </button>
        </div>


    </div>
  )
}

export default ProfileHead
