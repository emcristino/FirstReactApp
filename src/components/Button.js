import React from 'react';
import PropsTypes from 'prop-types';


function Button(props) {
    function callbackFunction(){
        props.callback()
    }

    return (
      <>
        <div className="buttonsHOME" onClick={callbackFunction}>
          {props.content}
        </div>
      </>
    );
}
    
    
   
export default Button;