import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";


const Profile = () => {

  const navi = useNavigate()
  const searchParam  = useSearchParams()[0].get('name');
  console.log(searchParam);
  const [carList, setCarList] = useState([
    { brandName: "Audi", id: '1', price:'$200', image: require("../Assets/1.jpg") },
    { brandName: "BMW", id: '2',price:'$300', image: require("../Assets/2.jpg") },
    { brandName: "Apple", id: '3',price:'$260', image: require("../Assets/4.jpg") },
    { brandName: "benz", id: '4',price:'$280', image: require("../Assets/3.jfif") },
  ]);

  const [viewList,setViewList] = useState([]);

const addToCart = (data) => {

  setViewList([...viewList,{...data,qty:1}])
}

const viewCart = () => {
  localStorage.setItem('carlist' ,JSON.stringify(viewList))
  navi('/showItem')

}

const moreInfo = (data) => {
console.log(data);
navi(`/moreInfo/${data.id}`)
}

  return <div>
    <h1 className="indi">India's Most Expansive Car 
    <button onClick={() => viewCart()}><i className="fa fa-shopping-cart"></i></button></h1>
  
  <div  className='car-list'>

    
    {carList.map ( (data,index) =>
    
    <div key={index} className='car1'>
      <img src={data.image}/>
      <div className="car2">
      <p>{data.brandName} </p>
      <p>{data.price}</p>
      </div>
      <button onClick={() => addToCart(data)}>AddToCart</button>
      <button onClick={ () => moreInfo(data)}>More Info</button>
    </div>
    
    )}
  </div>
  </div>
};

export default Profile;
