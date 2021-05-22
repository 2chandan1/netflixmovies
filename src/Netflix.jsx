import React from 'react';
import Sdata from './Sdata';
import Card from './Cards';

// const Netflix=()=>(


//     <>
// //     <Card 
// //     key={Sdata[1].id}
// //     imgsrc={Sdata[1].imgsrc} 
// //     title={Sdata[1].title}
// //     sname={Sdata[1].sname}
// //     link={Sdata[1].link}
// //     />
// //   );
//   {Sdata.map((val)=>{
//     return(
//       <Card 
//       key={val.id}
//       imgsrc={val.imgsrc} 
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//       />
//     );
//  })}
//  </>
// )
const Netflix=()=>(
    <>
    {/* <Heading></Heading> */}
  
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
export default Netflix;



// if(favSeries==='netflix'){
//     return(
//        <Netflix/>
//       );
// }else{
//     return <Amazon/>
// }
// }