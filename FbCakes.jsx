import React,{useState} from "react";
import "./FbCakes.css";
import Fb from "./Assets/Fbcake logo.png";
import Cake from "./Assets/Red cake.webp";
import Ship from "./Assets/Truck.png";
import Clock from "./Assets/24H7.jpg";
import Fes from "./Assets/Speaker.png";
import Card from "./Assets/Card.png";
export default function FbCakes(){
  const [count,setCount]=useState(670);
  const [amount,setAmount]=useState(1);
  const [weight,setWeight]=useState(1);
  const decreaseAmount = () => {
    if (amount > 1) {
      setAmount(amount - 1);
      setCount((amount-1)*670*weight);
    }
  };
  const increaseAmount = () => {
    setAmount(amount + 1);
    setCount((amount + 1)*670*weight);
  };
  const selectWeight = (kg)=>{
    setWeight(kg);
    setCount(amount*670*kg);
  }
    return(
       <>
        <nav class="navbar bg-body">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src={Fb} alt="Logo" width="110" height="30" class="d-inline-block align-text-top"/>
    </a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
    </form>
    <a className="nav-link active" aria-current="page" href="#">HOME</a>
    <a class="nav-link active" aria-current="page" href="#">ABOUT US</a>
    <a class="nav-link active" aria-current="page" href="#">REWARDS</a>
  </div>
</nav>
<nav className="navbar bg-body-tertiary">
    <div className="container-fluid">
        <span className="navbar-brand mb-0 h1" style={{ marginLeft: '100px' }}>
            RED VELVET
        </span>
        <span className="navbar-text">
            HOME / ECOMPRODUCT
        </span>
    </div>
</nav>
<div className="container">
<div className="Order">
  <img src={Ship} alt="Shipping logo"width={180} height={140}/>
  <h6>Free Shipping</h6>
<hr/>
<img src={Clock} alt=""width={180} height={140}/>
<h6>24 X 7 Service</h6>
<hr/>
<img src={Fes} alt=""width={180} height={140} />
<h6>Festival Offer</h6>
<hr/>
<img src={Card} alt=""width={180} height={140} />
<h6>Online Payment</h6>
</div>
<div className="Photo">
<img src={Cake} alt="Cake photo" width={350} height={500}/>
</div>
<div className="Ratings">
  <h3>RED VELVET</h3>
  <p className="Rating">Rating
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-fill"></i>
  <i class="bi bi-star-half"></i>
 (4.5)</p>
<h3>₹{count}</h3>
<hr/>
<div className="Quantity">
  <h6>Quantity</h6>
  <button onClick={decreaseAmount} className="button-decrease">-</button>
  <button>{amount}</button>
  <button onClick={increaseAmount} className="button-increase">+</button>
</div>
<div className="select-option">
  <h6>Select Weight</h6>
  <button className="text-kg" onClick={()=>selectWeight(1)}>1KG</button>
  <button className="text-kg-1" on onClick={()=>selectWeight(1.5)}>1.5KG</button>
</div>
<div className="type">
  <h6>Type</h6>
  <button>ROUND SHAPE</button>
</div>
<div className="egg">
  <h6>Eggless (Optional)</h6>
  <button>EGGLESS</button>
</div>
<div className="message">
  <h6>Message</h6>
  <input type="text"
  placeholder="Eg:Happy Birthday Sweet Heart ❤️"/>
</div>
<div className="back">
  <button>BACK</button>
  <button>ADD TO CART</button>
</div>
<div className="share">
<i class="bi bi-share-fill">Share</i>
<i class="bi bi-heart-fill">Add To Wishlist</i>
</div>
</div>
</div>
 </> 
 )

}