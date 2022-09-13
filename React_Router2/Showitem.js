import React, { useEffect, useState } from "react";

const Showitem = () => {
  const [array, setArray] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  const getItem = () => {
    let a = JSON.parse(localStorage.getItem("carlist"));
    setArray(a);
   
  };

  const increament = (data1) => {
   
    const isExist = array.some((prod) => prod.id === data1.id);

    if (isExist) {
      const data = array.map((prod) => {
        if (prod.id === data1.id) {
          return {
            ...prod,
            qty: prod.qty + 1,
          };
        } else {
          return prod;
        }
      });
      setArray(data);
      localStorage.setItem('carlist' ,JSON.stringify(array))

    } 
  }

  const decreament = (data1) => {
    
    if(data1.qty > 1){
      const data = array.map((prod) => {
        if (prod.id === data1.id) {
          return {
            ...prod,
            qty: prod.qty - 1,
          };
        } else {
          return prod;
        }
      });
      setArray(data);
      localStorage.setItem('carlist' ,JSON.stringify(array))

    }
  }

  const removeItem = (data) => {
    let a = array.filter((b) => {
      return data !== b;
    });
    
  
    console.log(array);
    setArray(a);
   var b = JSON.stringify(localStorage.removeItem(array))
  
  }
  return (
    <div>
      {array.map((data, index) => (
        <div key={index}>
          <h1 style={{marginLeft:'300px'}}>{data.brandName} </h1>
          <div className="car-list">
            <img src={data.image} />
          </div>
          <h3 style={{marginLeft:'300px'}}>Product : {data.qty}</h3>
          <div className="view">
            <button onClick={() => increament(data)}>+</button>
            <button onClick={() => removeItem(data)}>Remove</button>
            <button onClick={() => decreament(data)}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Showitem;
