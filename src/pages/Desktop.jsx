import React, { useContext } from "react";
import "../styles/Desktop.css"; // style sheet for desktop
import Header from '../components/Header'
import Stories from "../components/Stories";
import CreatePost from "../components/CreatePost";
import { AppContext } from "../context/app_context";
import Search from "../components/Search";
import Feed from "../components/Feed";
import Nav from "../components/Nav";
import Contacts from "../components/Contacts";

const Desktop = () => {
  let {
    grabCharacters,
    characters,
    mainProfile,
    showSearch,
    clickedProfile,
    quotes,
    setQuotes,
    getRandomQuotes
  } = useContext(AppContext);

  // console.log('SHOW SEARCH',showSearch)
  // console.log(quotes);

  return (
    <div className="desktop">
      {/* <h1>DESKTOP</h1> */}
      {/* <Header parent="desktop" /> */}
      {/* <button onClick={getRandomQuotes}> Show Quotes Of The Day </button> */}

      <div className="top">
          <Header parent="tablet"/>
          { showSearch && <Search />}
        </div>

      {showSearch && <Search />}
      <div className="mainContent">

        <div className="left">
          <Nav />
        </div>
        <div className="center">
          <Stories />
          <CreatePost />
          <Feed />
        </div>
        <div className="right">
          <Contacts />
        </div>
      </div>


    </div>
  );
};

export default Desktop;
