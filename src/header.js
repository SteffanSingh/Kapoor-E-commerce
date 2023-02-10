import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import Cart from "./Cart";
import Favourite from "./Favourite";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


function Header(){
    let navigate=useNavigate();

function handleChange(e){
e.preventDefault();
if(e.target.value=="all"){
  navigate("/All",true)
}
else if(e.target.value=="electronics"){
  navigate("/Electronics",true);
}
else if(e.target.value=="men"){
  navigate("/Mens",true);
}else if(e.target.value=="women"){
  navigate("/Women",true);
}

}
  function SelectPage(e){
e.preventDefault();
if(e.target.value=="login"){
  navigate("/Login",true);
}
else if(e.target.value=="signup"){
  navigate("/Signup",true);
}
else if(e.target.value=="fav"){
  navigate("/Favourite",true);
}else if(e.target.value=="cart"){
  navigate("/Cart",true);
}



  }
    return(
<div className="header" >

<header>
                 
                <h1><svg className="star-image" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg><a className="logo-name">STAR</a><a className="logo-name1">SHOP</a> </h1>
                <div className="right-header">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
</svg>        <select onChange={SelectPage}  className="dropdown">
                     <label>Login Or Signup</label>
                        
                        <option  value={"login or sign up"  } disabled selected>Login Or Signup </option>
                        <option value={"login"}  >Log in</option>
                        
                        <option  value={"signup"}>Sign up</option>
                        <option value={"cart"} >Cart</option>
                        <option value={"fav"}>Favourite </option>
                        </select>
                         
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-cart4" viewBox="0 0 16 16">
  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
</svg> 
 

                    

                </div>
            </header>
            <nav className="nav-section" onClick={handleChange} >
                <Link to="/All" className="nav" value="all" >All</Link>
                <Link to="/Electronics"  className="nav" value="electronics" >Electronics</Link>
                <Link to="/Jewelery" className="nav" value="jewelery" >Jewelry</Link>
                <Link to="/Mens" className="nav" value="men" >Men`s Clothing</Link>
                <Link  to="/Women" className="nav" value="women" >Women`s Clothing</Link>





            </nav>




</div>

    )
}

export default Header;
