import React from 'react'
import { Link } from 'react-router-dom';
// import Blog from '../pages/Blog/Blog';
// import Home from '../pages/Home/Home';

const Header = () => {
  return (
    <div className='home-header'>
      {/* <p classNameName='display-4 lead bg-dark text-white text-center px-3 py-3'>Header component</p> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="#"></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Login</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Register</Link>
            </li>
          </ul>
          {/* <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form> */}
        </div>
      </nav>
    </div>
  )
};

export default Header;