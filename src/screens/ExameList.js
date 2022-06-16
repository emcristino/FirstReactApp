import React, {useState, useEffect} from 'react';
import { useNavigate, Link} from "react-router-dom";
import '../index.css'


export default function ExameList(){
    const [listaEsami, setListaEsami] = useState() ; 
    let contatore=0;
    let sum=0;
    let media=0;
    let bocciature=0;
    let lodi=0;
  
    useEffect(()=> {
        setListaEsami(JSON.parse(localStorage.getItem("esame")));
    },[])
    
  
    const allGrades = listaEsami?.map((esame)=> esame.grade*1)
    sum = allGrades?.reduce((a,b) => a + b,0)  // reduce: faccio scorrere ogni numero nell'array come un ciclo for - somma di tutte le variabili all'interno di un  array
    if(allGrades!= undefined){
    media = sum/allGrades.length
}

  const exams = listaEsami?.map((esame)=>{ 

    return(
    <div id ="flexForm3">
        <p className ="nome">Nome esame : 
          <br/>
          {esame.subject}</p>
        {esame.grade < 18 ? (
        <p id={contatore++ && bocciature++}  style={{color:"red", fontWeight:"bold"}}> {esame.grade}</p>
        ):( esame.grade >=18 && esame.grade<=19? (
                <p id={contatore++} style={{color:"yellow", fontWeight:"bold"}}> {esame.grade}</p> 
                )
                :( esame.grade >=30 ? (
                    <p id={contatore++ && lodi++} style={{color:"green", fontWeight:"bold"}}> {esame.grade}</p> 
                    ):(
                    <p id={contatore++} style={{color:"black", fontWeight:"bold"}}> {esame.grade}</p>
                )
         ) )}
        <p id="data">Data esame : {esame.date}</p>
        <br/>
    </div>
)
   })

      return(
        <div id= "homeDiv">
            <div id = 'boxTitle'>
            <h1 id='title'>myUNIVERSITY</h1>
            <hr id= 'line'></hr>
            <div id ="flexForm2">
          <div id = "libretto">                         
        <div>La tua media è: {(Math.round(media *100))/100}</div>
        <div>Hai sostenuto: {contatore} esami</div>
        <div>Numero bocciature: {bocciature} esami</div>
        <div>Numero lodi: {lodi}</div>
         </div>
           </div> 

            {exams}
            <div id ="flexForm1">
            <Link id ="home" to="../">Home</Link>
            </div>
      </div>
                        </div>         
        )
  }
