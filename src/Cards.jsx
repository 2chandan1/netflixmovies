import React from 'react';
import Img from './Img';
function Card(props){
    return(
  <>
  
     <div className="cards">
      <div className="card">
       <Img imgsrc={props.imgsrc}></Img>
        <div className="card_info">
          <span className="card_category">{props.title}</span>
        <h3 className="card_title">{props.sname}</h3>
        <a href={props.link} target="blank">
          <button>Watch Now</button>
        </a>
        </div>
      </div>
    </div>
    </>
    )
  }
  export default Card;