import React from 'react';
 
const Mybutton = () => {
  const menu =()=>{
    alert(`Alcohol , Snack`)

     
  }
    return (
 <>
 <section className="menu">
  <div className="container">
    <div className="row p-5">
      <h2 className="text-center">
        Menu <br />
        メニュー
      </h2>
    </div>
    <div className="row gx-3">
      <div className="col-xs-12 col-md-4">
        <div
          className="col bg-danger rounded-circle overflow-hidden position-relative"
          style={{ border: "9px solid rgba(129, 97, 59, 1)" }}
        >
          <img className="w-100" src="drink.png" alt="" />
          <div className="position-absolute bottom-0 text-center w-100 opacity-10">
            <h3 className="fs-2">Drinks</h3>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-4">
        <div
          className="col bg-danger rounded-circle overflow-hidden position-relative"
          style={{ border: "9px solid rgba(129, 97, 59, 1)" }}
        >
          <img className="w-100" src="drinks1.png" alt="" />
          <div className="position-absolute bottom-0 text-center w-100 opacity-10">
            <h3 className="fs-2">Cakes</h3>
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-md-4">
        <div
          className="col bg-danger rounded-circle overflow-hidden position-relative"
          style={{ border: "9px solid rgba(129, 97, 59, 1)" }}
        >
          <img className="w-100" src="drink(1).png" alt="" />
          <div className="position-absolute bottom-0 text-center w-100 opacity-10">
            <h3 className="fs-2">Foods</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="p-5 w-100 mx-auto text-center">
    <button onClick={menu}
      className="p-2 text-light"
      style={{backgroundColor: "rgba(102, 142, 104, 1)",borderRadius:"25px", minWidth: "13%" }}
    >
      詳しく見る
      <i className="fa-solid fa-chevron-right"></i>
    </button>
  </div>
</section>

 </>
    );
};

export default Mybutton;