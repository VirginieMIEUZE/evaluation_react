import React, { useState } from "react";
import classNames from "classnames";

import './Show.css'

export default function FavBtn({ show, favorite }) {
    const [addFav, setAddFav] = useState(favorite);
    let titleShow = show.title;

      function onButtonClick() {
          fetch(`http://localhost:4000/rest/shows/${show.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                title: titleShow,
                user: { favorited: !addFav } })
            })
            .then(response => response.json())
            .then(setAddFav(!addFav))
     }

      return (
      <div onClick={onButtonClick} className={classNames({ 'no-fav': !addFav, 'fav': addFav})}>
          
        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-heart-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/></svg>
      
      </div>
      )
}