import React from 'react'
import FavBtn from './FavBtn';
import { arrayOf, object, shape, string } from 'prop-types'

import './Show.css'

Show.propTypes = {
    show: shape({
      title: string,
      description: string,
      creation: string,
      seasons: string,
      episodes: string,
      genres: arrayOf(string),
      images: object,
      user: object,
    }).isRequired,
  }

export default function Show(props) {
    const { show } = props;

      const genres = show.genres.map(genre => <span key={genre} className="badge">{genre}</span>);

    return (
   
    <div className="mx-auto">
        <div className="card mt-4">
                <img src={show.images.banner} className="card-img-top" alt="banner"/>
                <div className="card-body">
                    <h1 className="card-title">{show.title} ({show.creation})</h1>
                    <p className="info">{show.seasons} seasons | {show.episodes} episodes</p>
                    <p className="card-text">{show.description}</p>
                    <div className="d-flex justify-content-between">
                        <div>{genres}</div>
                        <FavBtn show={show} favorite={show.user.favorited} />
                    </div>
                </div>
        </div>
    </div>

  
    )
}