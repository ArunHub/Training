import React from 'react'
import { Link } from "react-router-dom";

export default function SepMenu(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                {/* <Link className="navbar-brand" to='/'>Navbar</Link> */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to='/'>{props.menu[0]} <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/home'>{props.menu[1]}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/employees'>{props.menu[2]}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/events'>{props.menu[3]}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/events/new'>{props.menu[4]}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/jph/posts'>{props.menu[5]}</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to='/'>{props.menu[6]}</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
