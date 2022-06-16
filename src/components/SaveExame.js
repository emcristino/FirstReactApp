import React from 'react';
import PropsTypes from 'prop-types';

function SaveExame(props) {
    function callbackFunction(){
        props.callback()
    }

    return (
      <>
        <div id="saveExame" onClick={callbackFunction}>
          {props.content}
        </div>
      </>
    );
}
    
    



export default SaveExame;