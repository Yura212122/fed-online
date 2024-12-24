import React from 'react';

 
 
const Header = () => {
    return (
    <>

 <header style={{ backgroundColor: "rgba(102, 142, 104, 1)", width: "90%", margin:"0 auto"}}>
  <div className="container">
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand fs-1 p-3 text-light" href="#">DesignCafé</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" style={{  justifyContent: "flex-end" }} id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active text-light" aria-current="page" href="#">メニュー</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light px-5" href="#">お問い合わせ</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled text-light" aria-disabled="true">お知らせ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</header>
  
    </>
    
    );
};

export default Header;