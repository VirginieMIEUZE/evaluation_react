import React, { useState } from 'react'

import Show from './Show'

export default function ShowList(props) {
    const [searchTerm, setSearchTerm] = useState();

    function research(event) {
        let value = event.target.value;
        setSearchTerm(value);

        if (event === props.title) {
            
        }
    }

    return (
        <div>
        <div>
            <nav className="navbar navbar-dark">
                <div className="container-fluid">
                <p className="navbar-brand text-danger fs-4" href="">NETFLI</p>
                    <form className="d-flex">
                    <input onInput={event => setSearchTerm(event.target.value)} className="form-control me-2" type="text" placeholder="Search" name="Search" onChange={research}/>
                    </form>
                </div>
            </nav>
        </div>
        {
        props.shows.filter((show) => {
            if (searchTerm === undefined) {
                return show
            } else if (show.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                return show
            } 
                return false
        }).map((show) => {
            return (
                <Show key={show.id} show={show}/>
            )
        })
        }
        </div>
    )
}