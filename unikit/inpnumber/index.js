import React from 'react';
import PropTypes from 'prop-types';

const InputNum = ({yourclass,textp,inpvalu}) => {
  var count = 0;
  var text = '';
  function incrementCount (){
    count += 1
    var paragraph = document.getElementById('counttext')
    paragraph.innerHTML=count
  }
  function decrementCount (){
    count -= 1
    var paragraph = document.getElementById('counttext')
    paragraph.innerHTML=count
  }
  function getInitialState (){
     return {
       count: 0
     }
  }
    return (
      <div className={"inputnumber " + yourclass}>
        <p>{textp}</p>
        <div className="counter">
          <a className="btn" onClick={decrementCount}>-</a>
          <span id="counttext">{inpvalu}</span>
          <a className="btn" onClick={incrementCount}>+</a>
        </div>
      </div>
    );
}

export default InputNum;
