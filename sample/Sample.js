import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Sample = () => {

    const [todos,setTodos] = useState([])
    useEffect( () => {
        getSample();

    },[])

    const getSample = async() => {
     await axios.get('http://nammacart-dev-lb-1671514857.ap-south-1.elb.amazonaws.com:8080/products/seller?sellerId=6108fb29f58bf55437a79e44')
         .then((response) => setTodos(response.data.data))
    //   .then((json) => console.log(json)); 

    // console.log(todos);


    }

    const addToCart =() => {
       console.log();
    }
  return (
    
        <div style={{display:'flex',width:'100%',flexWrap:' wrap'}}>
      {todos.map((prod,index) => 
          <p key={index}>
             <h3>{prod.brandName}</h3>
         <img src={prod.image} style={{height:'200px',width:'200px'}} />
        
         <h3>{prod.name}</h3>
         <h3>{prod.foodType}</h3>
         <button onClick={() => addToCart()}>Click</button>
        </p> 
        // console.log(prod) 
      )}
      
    </div>
  )
}

export default Sample