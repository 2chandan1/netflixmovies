
import React from 'react';
import Card from './Cards';
import Sdata from './Sdata';
import Heading from './Heading';
import Netflix from './Netflix';
import Amazon from './Amazon';

const favSeries='AMA';
// const Favs=()=>{


// if(favSeries==='netflix'){
//     return <Netflix/>
// }else{
//     return <Amazon/>
// }
// }
const App=()=>(
  <>
  <Heading></Heading>

    {/* <Favs/> */}
   {Sdata.map((val)=>{
      return(
        <Card 
        key={val.id}
        imgsrc={val.imgsrc} 
        title={val.title}
        sname={val.sname}
        link={val.link}
        />
      );
   })}
  </>
);

export default App;
