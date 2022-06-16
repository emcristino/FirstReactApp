import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import SaveExame from '../components/SaveExame';
import '../index.css'
import ExameList from './ExameList';


    const testVuoto = { // inizializzo i campi a vuoto
        subject: "",
        grade: "",
        date: "",
    
    };
    
    function Exame (){ 
        const [test, setTest] = useState(); 
        const [subject, setSubject] = useState();
        const [grade, setGrade] = useState();
        const [date, setDate] = useState();
        const [cambia, setCambia] = useState(false); //controllo se lo stato del componente cambia


        useEffect(() => {  //gestisco il ciclo di vita dei componenti 
            setTest(testVuoto);
        }, [])
    
        useEffect(() => {       //se la variabile è uguale a true parsifica il JSON localstorage all'interno della variabile exam
            if (cambia) {
                let exam = null;
                let Array = [];
                exam = JSON.parse(localStorage.getItem("esame"));  // prendo item con esame 
                if (!exam) {         // se exam è null allora  pusha test dentro Array 
                    Array.push(test); 
                    localStorage.setItem("esame", JSON.stringify(Array)); //memorizzo valore 
                }
                else {
                    exam.push(test);             //settiamo il nostro oggetto nel localstorage
                    localStorage.setItem("esame", JSON.stringify(exam));

                }
                setCambia(false);
                setSubject("");
                setGrade("");
                setDate("");
                alert("Esame caricato nel libretto!");
            }
        }, [cambia])
    
        function onSubmit(e) {
            setTest({
                subject: subject,
                grade: grade,
                date: date
            })
            setCambia(true);
        }
    
    
        function onChangeSubject(e) {
            setSubject(e.target.value);
        }
    
        function onChangeGrade(e) {
            setGrade(e.target.value);
        }
        function onChangeDate(e) {
            setDate(e.target.value);
        }
    
     
    
    return(
        <div id= "homeDiv">
            <div id = 'boxTitle'>
            <h1 id='title'>myUNIVERSITY</h1>
            <hr id= 'line'></hr>
            <div id="form">
           

        <form className = "flexForm">
        <label>Nome esame</label>
        <br/>
        <input className ="inputForm"name="subject" value={subject}   type='text' onChange={(e) => onChangeSubject(e)}/>
        <br/>
        <br/>
        <label> Voto esame</label>
        <br/>
        <input className ="inputForm" name="grade" value={grade}   type='number'  onChange={(e) => onChangeGrade(e)} />
        <br/>
        <label>Data esame</label>
        <br/>
        <input className ="inputForm" name="date"  value={date}  type='date' onChange={(e) => onChangeDate(e)}/>
        <br/>
        <SaveExame callback = {ExameList} content={ <input className ="inputSubmit"  name="Submit" type='submit' value="Carica esame" onClick={() => onSubmit()}/>}/> 
        <Link id='backButton' to="../exameList">Libretto</Link>
        </form>
    </div>
        </div>
        </div>
    )
    }

export default Exame;