import React, {useState, useEffect} from 'react';
import { useNavigate, Link} from "react-router-dom";
import '../index.css'


export default function ExameList(){
    const [listaEsami, setListaEsami] = useState() ; 
    let conta=0;
    let voto=0;
    let somma=0;
    let media=0;
    let bocciature=0;
    let lodi=0;
  
    useEffect(()=> {
        setListaEsami(JSON.parse(localStorage.getItem("esame")));
        


    },[])
    
  


    const allGrades = listaEsami?.map((esame)=> esame.grade*1)
    somma = allGrades?.reduce((a,b) => a + b,0)
    if(allGrades!= undefined){
    media = somma/allGrades.length
}



  const card = listaEsami?.map((esame)=>{ 

    //{if(esame.grade == 31){lodi++}}

return(
    <div>
        <p id="materia" >materia : {esame.subject}</p>
        
        {esame.grade < 18 ? (
        <p id={conta++ && bocciature++}  style={{color:"red", fontWeight:"bold"}}> {esame.grade}</p>
        ):( esame.grade >=18 && esame.grade<=19? (
                <p id={conta++} style={{color:"yellow", fontWeight:"bold"}}> {esame.grade}</p> 
                )
                :( esame.grade >=30 ? (
                    <p id={conta++ && lodi++} style={{color:"green", fontWeight:"bold"}}> {esame.grade}</p> 
                    
                    ):(
                
                    <p id={conta++} style={{color:"black", fontWeight:"bold"}}> {esame.grade}</p>
                )

         ) )}
        <p id="data">data : {esame.date}</p>

    </div>
)
   })

      return(
          
        <div id= "homeDiv">

            <div id = 'boxTitle'>
            <h1 id='title'>myUNIVERSITY</h1>
            <hr id= 'line'></hr>
            <div >
<Link to="../">Home</Link>
                            
<div>la tua media è {(Math.round(media *100))/100}</div>
  <div>Hai sostenuto {conta} esami</div>
  <div>Sei stato bocciato a {bocciature} esami</div>
  <div>Lodi{lodi}</div>
  </div>

            {card}
            
      </div>


                       
                        </div>
        )
  }
