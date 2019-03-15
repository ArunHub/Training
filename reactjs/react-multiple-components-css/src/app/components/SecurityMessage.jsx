import React, { Component } from "react";
import * as styles from "./SecurityMessage.css";

const SecurityMessage = () => {
    const style = {
        color: 'orange'
    }
    return (        
        <div>   
            {styles}         
            <h1 className={styles.map((t)=>console.log(t))}>Welcome Security Department</h1>
            <h4 style={{color: 'red'}}>Message updated on - {new Date().toDateString()}</h4>
        </div>
    )
}

export default SecurityMessage;