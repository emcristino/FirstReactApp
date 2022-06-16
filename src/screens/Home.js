import React from 'react';
import Button from '../components/Button'
import { useNavigate} from "react-router-dom";
import '../index.css'

function Home (){
    const navigate = useNavigate();
    function gotoExame(){
        navigate('exame');
    }

    function gotoExameList(){
        navigate('exameList');
    }

    return (
        <div id= "homeDiv">
            <div id = 'boxTitle'>
            <h1 id='title'>myUNIVERSITY</h1>
            <hr id= 'line'></hr>
        <br/>
            <div id="flexForm1">
            <label id ="text1">Carica esame</label>
            <Button callback={gotoExame} content={<img src={require('../assets/notebook.gif')} alt='loadExame' />} alt='Exams'/>
            <br></br>
            <label id ="text2">Libretto</label>
            <Button callback={gotoExameList} content={<img src={require('../assets/diary.gif')} alt='loadExameList' />} alt='Examslist'/>
            </div>
        </div>
        </div>
        );
}

export default Home;