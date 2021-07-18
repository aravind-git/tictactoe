import React from "react";

function NavBar(){
    return (
        <nav class="navbar navbar-expand-lg text-white bg-dark">
        <a class="navbar-brand text-success" href="#">Navbar</a>  
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link text-white" href="#">Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="#">About Us</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link text-white">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#">Meeting</a>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    );
}

export default NavBar;