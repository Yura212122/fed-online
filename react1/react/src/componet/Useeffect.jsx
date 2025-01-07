import React, { useState, useEffect } from "react";

const Useeffect = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchValue, setSearchValue] = useState("");

 
  useEffect(() => {
    if (isSearchVisible) {
      console.log("Поле пошуку стало видимим");
    } else {
      console.log("Поле пошуку приховано");
    }
  }, [isSearchVisible]);

  const handleSearchIconClick = () => {
    setIsSearchVisible((prev) => !prev);  
  };

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div style={{  margin:"0 auto", width:"50px" , padding:"20px"  }}>
      <button onClick={handleSearchIconClick} style={{ cursor: "pointer" }}>
        🔍  
      </button>
      {isSearchVisible && (
        <input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Пошук..."
          style={{
            padding: "5px",
            marginLeft: "10px",
            border: "1px solid #ccc",
            borderRadius: "4px",
          }}
        />
      )}
    </div>
  );
};

export default Useeffect;
