import React from 'react';
 import Counter from './counter';
const Footer = () => {
    return (
       
     <>
 <footer className="top-bg-section-four" style={{ width: "90%" }}>
  <div className="container text-light py-3 w-100">
    <div className="row justify-content-between" style={{ width: "70%" }}>
      <div className="col-xs-12 col-md-4">
        <p className="py-5">
          東京都港区赤坂xx-xx <br />
          (03) 9999-9999 <br />
          contact@designcafe.com
        </p>
      </div>
      <div className="col-xs-12 col-md-4">
        <p className="py-5">
          (c) 2022 DesignCafé. All rights reserved.
        </p>
    </div>
     <div className=" col-xs-12 col-md-4 py-5">
  <Counter></Counter>
  </div>
  </div>
  </div>
 
</footer>
 

     </>  
       
    );
};

export default Footer;