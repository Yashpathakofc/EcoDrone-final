import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ handleShowLoginModal, handleShowSignUpModal }) => {
  const toggleVideoPlayback = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="drone2.svg" alt="Bootstrap" width="100" height="80" />
            <a className="navbar-brand" href="#">EcoDrone</a>
          </a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" onClick={toggleVideoPlayback} href="#">Live Video</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Analytics Reports
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Soil</a></li>
                  <li><a className="dropdown-item" href="#">Weather</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="">Crop Prediction Report</a></li>
                </ul>
              </li>
            </ul>
            <button type="button" className="btn btn-success mx-3" onClick={handleShowLoginModal}>
              Login
            </button>
            <button type="button" className="btn btn-success mx-3" onClick={handleShowSignUpModal}>
              Sign Up
            </button>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
