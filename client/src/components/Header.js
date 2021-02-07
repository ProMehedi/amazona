import React from 'react';

const Header = (props) => {
  return (
    <header className="headerWrap">
      <div className="container">
        <div className="headerMain">
          <div className="logo">
            <a href="/">Amazona</a>
          </div>
          <div className="searchWrap">
            <form className="searchForm">
              <input type="search" name="search" id="search"/>
              <button type="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>
          <div className="headerActions">
            <a href="/cart"><i className="fa fa-shopping-cart"></i>Cart</a>
            <a href="/sign-in"><i className="fa fa-user"></i>Account</a>
          </div>
        </div>
      </div>
    </header>
  );
}
 
export default Header;