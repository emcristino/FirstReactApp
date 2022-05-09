import React, {useState, useEffect} from 'react';
import { useNavigate, Link} from "react-router-dom";
import SaveExame from '../components/SaveExame';
import '../index.css'
import ExameList from './ExameList';


    const EMPTYTEST = {
        subject: "",
        grade: "",
        date: "",
    
    };
    
    function Exame (){
        const [test, setTest] = useState(); //variabile che arriva quando viene montato il component 
        const [subject, setSubject] = useState();
        const [grade, setGrade] = useState();
        const [date, setDate] = useState();
        const [isChanged, setIsChanged] = useState(false);
    
const navigate= useNavigate()

        useEffect(() => {
            setTest(EMPTYTEST);
            console.log(EMPTYTEST)
    
        }, [])
    
        useEffect(() => {
            if (isChanged) {
                let exam = null;
                let tempArray = [];
                exam = JSON.parse(localStorage.getItem("esame"));
                if (!exam) {
                    tempArray.push(test);
                    localStorage.setItem("esame", JSON.stringify(tempArray));
                }
                else {
                    exam.push(test);
                    localStorage.setItem("esame", JSON.stringify(exam));
    
                }
                setIsChanged(false);
                setSubject("");
                setGrade("");
                setDate("");
                window.alert("Esame Caricato con successo!");
    
    
            }
        }, [isChanged])
    
        function onSubmit(e) {
            setTest({
                subject: subject,
                grade: grade,
                date: date
            })
            setIsChanged(true);
    
            console.log(test);


        }
    
    
        function onChangeSubject(e) {
            console.log(e);
            setSubject(e.target.value);
        }
    
        function onChangeGrade(e) {
            setGrade(e.target.value);
        }
        function onChangeDate(e) {
            setDate(e.target.value);
        }
    
        function newProduct() {
            setTest({
                subject: "",
                grade: "",
                date: ""
            });
        }
    
    return(
        <div id= "homeDiv">
            <div id = 'boxTitle'>
            <h1 id='title'>myUNIVERSITY</h1>
            <hr id= 'line'></hr>
            <div id="form">
           

        <form id = "form">
        <label>Nome esame</label>
        <input className ="inputField"name="subject" value={subject}   type='text' onChange={(e) => onChangeSubject(e)}/>

        <label> Voto esame</label>
        <input className ="inputField" name="grade" value={grade}   type='number'  onChange={(e) => onChangeGrade(e)} />
        
        <label>Data esame</label>
        <input className ="inputField" name="date"  value={date}  type='date' onChange={(e) => onChangeDate(e)}/>


        <SaveExame callback = {ExameList} content={ <input className ="inputSubmit"  name="Submit" type='submit' value="Carica esame" onClick={() => onSubmit()}/>}/> 
        
        
        </form>
        <Link to="../exameList">Vai al Libretto</Link>
    
    </div>
        </div>
        </div>
    )
    }

export default Exame;