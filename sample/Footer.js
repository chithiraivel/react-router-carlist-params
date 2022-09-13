import React from 'react'

const Footer = () => {
  return (
    <div>

        <div className='com'>
            <div className='icon'>
                <h3>Pattern Coin</h3>
                <p>Follow us</p>
                <span><i class="fa fa-facebook"></i></span>
                <span><i class="fa fa-github"></i></span>
                <span><i class="fa fa-whatsapp"></i></span>
                <span><i class="fa fa-bluetooth"></i></span>
                <span><i class="fa fa-google"></i></span>
                <span><i class="fa fa-youtube"></i></span>
            </div>

            <div>
                <h3>Quick Links</h3>
                <p>Home</p>
                <p>About PTTN</p>
                <p>Get App</p>
                <p>Login</p>
                <p>Register</p>
            </div>

            <div>
                <h3>Community</h3>
                <p>PTTN event</p>
                <p> PTTN Support</p>
                <p>Open Search</p>
                <p>Exchange</p>
            </div>

            <div>
                <h3>FAQs</h3>
                <p>Public policy</p>
                <p>Get in Touch</p>
            </div>

            <div>
                <h3>Subscribe Us</h3>
                <p>Stay conneceted with beldex</p>
                <p><input></input><button style={{backgroundColor:'lightblue'}}>Subscribe</button></p>
                <p>Email:support@pttncoin.in</p>
            </div>
        </div>

        <div style={{textAlign:'center'}}>
            <p>@2022 PTTN COIN ALL RIGHTS RESERVED</p>
        </div>

        {/* {var a =[3,7,10,24,8,12]
var op =[ 7,8,12,-1,10,24]
var z =[]
for(let i=0;i<a.length;i++){
    let x = [];
    for(let j=0;j<a.length;j++){
        
        if(a[i] < a[j]){
            x.push(a[j])
           var y =x.sort( (q,w) => {
               return q-w
           })
           
        }
    
    }
    z.push(y[0])
 
}
 console.log(z)} */}
    </div>
  )
}

export default Footer