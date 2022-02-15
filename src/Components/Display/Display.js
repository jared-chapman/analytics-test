import { useState } from "react";
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons'
import './Display.css'
import MyChart from '../Chart/Chart.js'

function Display(props) {
    const [lastWeekDifference, setLastWeekDifference] = useState("");
    const [andOrBut, setAndOrBut] = useState("");
    const [averageDifference, setAverageDifference] = useState("");
    const [color, setColor] = useState('#F2CC8F');
    const [expanded, setExpanded] = useState(false);

    
    
    

    React.useEffect(() => { 
        const today = parseInt(props.today);
        const previous = parseInt(props.previous);
        const goal = parseInt(props.goal);
        const buffer = parseInt(props.buffer);
        const golf = props.golf;

        

        //if (props.log) console.table([["Today", today], ["Previous", previous], ["Goal", goal], ["Golf", golf], ["better", today > goal && !golf]]);
        if (Math.abs(today - previous) <= props.buffer) {
            setLastWeekDifference("about the same as")
        } else if ((today > previous && !golf) || (today < previous && golf)) {
            setLastWeekDifference("better than");
        } else {
            setLastWeekDifference("worse than");
        }

        if (Math.abs(today - goal) <= buffer) {
            setAverageDifference("about the same as")
        } else if ((today > goal && !golf) || (today < goal && golf)) {
            setAverageDifference("better than");
        } else {
            setAverageDifference("worse than");
        }

        if (lastWeekDifference == averageDifference) {
            setAndOrBut("And") 
        } else {
            setAndOrBut("But")
        }
        
        // if (lastWeekDifference === averageDifference && averageDifference === "better than") {
        //     setColor('#81B29A')
        // } 
        // if (lastWeekDifference === averageDifference && averageDifference === "worse than") {
        //     setColor('#E07A5F')
        // } 
        if (andOrBut == "And" ){
            if (lastWeekDifference == "better than") {
                setColor('#81B29A')
            }
            if (lastWeekDifference == "worse than") {
                setColor('#E07A5F')
            }
        } else {
            setColor('#F2CC8F')
        }



     });

    if (!expanded){
        return(
            <div className="displaySection" style={{ backgroundColor: color}}>
                <p id="topLine"> {props.type} </p>
                <p> On track for {props.today} {props.type} today</p>
                <p> That is {lastWeekDifference} last weeks daily average of {props.previous} {props.type}</p>
                <p> {andOrBut} {averageDifference} than our daily goal of {props.goal} {props.type} </p>
                <img id="image" src={props.image}></img>
                <button 
                    style = {{backgroundColor: color}} 
                    onClick={() =>setExpanded(true)}>
                    <FontAwesomeIcon icon={faAngleDoubleUp} /> 
                    Show Details  
                    <FontAwesomeIcon icon={faAngleDoubleUp} />
                </button>
                {/* <MyChart /> */}
            </div>
        )
    } else {
        return(
            <div className="displaySection" style={{ backgroundColor: color}}>
                <p id="topLine"> {props.type} </p>
                <p> This is some expanded information about {props.type}</p>
                <p> Info on subcategories of {props.type}</p>
                <p> More detail, but still high level</p>
                <p> I like {props.type} </p>
                <p> There should be lots of lines here</p>
                <p> Lorem Ipsum Something how about a haiku</p>
                <p> Line Line Line Line Line</p>
                <p> Line Line Line Line Line Line Line</p>
                <p> Line Line Line Line Line</p>
                <button 
                    style = {{backgroundColor: color}} 
                    onClick={() =>setExpanded(false)}>
                    <FontAwesomeIcon icon={faAngleDoubleDown} /> 
                    Show Overview
                    <FontAwesomeIcon icon={faAngleDoubleDown} />
                </button>
                {/* <MyChart /> */}
            </div>
        )
    }



}

export default Display