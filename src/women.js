import React from "react";
import { useState, useEffect } from "react";
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHeart } from '@fortawesome/free-solid-svg-icons'
import {Card} from "react-bootstrap"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Women(){

   const [todos,setTodos]=useState([]);
   function handleSubmit(e){
    e.preventDefault();
    
      }

  useEffect(()=>{
    fetch("https://fakestoreapi.com/products/category/women's clothing" )
    .then(res=>res.json()).then(res=>{
      console.log(res );      
      setTodos(res);


    })
  })
  function changeColor(e) {
    console.log(e.target.style.color);}

  
/* todos.map((x)=> (
                       
                       */

    return(

      <div className="row"  >
  
      { todos && 
      todos.map(eachTodos=>    <div className="col-md-3" d >
     <div className="card-box"   > <Container mt-5>
      <Row>
        <Col> <Card style={{ width: '13rem',height:"30rem" }}>
        <Card.Img   height={"150"} width={"150"} variant="top" src={eachTodos.image}/>
        <Card.Body>
          <Card.Title className="card-title">{eachTodos.title}</Card.Title>
          <Card.Text>
    
          </Card.Text>
          <Card.Text >
          {eachTodos.rating.rate}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
    <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"/>
    </svg></Card.Text>
        </Card.Body> <b className="rate">$ {eachTodos.price}  </b><br/>
        <Button onClick={handleSubmit} variant="primary"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart3" viewBox="0 0 16 16">
    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
    </svg>  Add to Cart </Button>
      </Card>
      </Col>
         
    
      </Row>
       
       
    </Container>
          
     
    </div>
       </div>
      )}
      </div>
      
      
  
    )

}
export default Women;