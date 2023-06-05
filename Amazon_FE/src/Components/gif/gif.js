import React from 'react';
import done from '../../Asserts/log_success.gif';

export default function Gif() {
  return (
    <div style={{padding:"100px"}}><center>
      <img src={done} alt="bnjnk" height="350px" width="350px"/>
      <h1 style={{color:'skyblue'}}>Login Success</h1>
      </center>
    </div>
  )
}
