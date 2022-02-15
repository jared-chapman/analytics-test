import React, { useState, useEffect } from 'react';

import DummyData from "../DummyData/DummyData.js";
import Display from "../Display/Display.js"
import Header from "../Header/Header.js"
import Footer from "../Footer/Footer.js"
import './Main.css'
import { gql, useQuery } from "@apollo/client";
import one from '../../Images/1.png'
import two from '../../Images/2.png'
import three from '../../Images/3.png'
import four from '../../Images/4.png'

//62164d0c4700458ea5d55824221002

const queryData = gql`
query ExampleQuery {
    warnings {
        type
        count
        }
    }
`;




function Main() {
    const [type, setType] = useState("");
    const [today, setToday] = useState(0);
    const [previous, setPrevious] = useState(0);
    const [goal, setGoal] = useState(0);
    const [golf, setGolf] = useState(false);
    const [buffer, setBuffer] = useState(0);
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [temp, setTemp] = useState([]);

    

    let res;
    // Empty [] array means this useEffect will run only once similar to componentDidMount()
    useEffect(() => {
        //fetch("http://api.weatherapi.com/v1/current.json?key=62164d0c4700458ea5d55824221002&q=London&aqi=no")
        fetch("http://api.weatherapi.com/v1/current.json?key=62164d0c4700458ea5d55824221002&q=Dallas&aqi=no")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setError(result);
                console.log(result);
                setTemp(result.current.temp_f)
            },
            // Handle errors here
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        )
    }, [])

    const { data, loading, errorgql } = useQuery(queryData);
        if (loading) return <p>Loading</p>;
        if (errorgql) return <p>ERROR</p>;
        if (!data) return <p>Not found</p>;

    let titles = [];
    let counts = [];
    data.warnings.forEach(warning => {
        titles.push(warning.type)
        counts.push(warning.count)
    })



    return ( 
        <div className="main">
            <Header 
                temp = {temp}/>
            <div className="infoBoxes">
                {/* <div className="left"> */}
                    <div className="infoBox" id="topLeft">
                        <Display
                            log={true}
                            type={titles[0]}
                            today={counts[0]}
                            previous={17}
                            buffer={1}
                            goal={5}
                            golf={true}
                            image={one}
                        />
                    </div>
                    <div className="infoBox" id="botLeft">
                        <Display 
                            log={false}
                            type={titles[1]}
                            today={counts[1]}
                            previous={20}
                            buffer={1}
                            goal={2}
                            golf={true}
                            image={two}
                        />
                    </div>
                {/* </div> */}
                {/* <div className = "right"> */}
                    <div className="infoBox" id="topRight">
                        <Display 
                            log={false}
                            type={titles[2]}
                            today={counts[2]}
                            previous={2}
                            buffer={0}
                            goal={2}
                            golf={golf}
                            image={three}
                        />
                    </div>
                    <div className="infoBox" id="botRight">
                        <Display 
                            log={false}
                            type={titles[3]}
                            today={counts[3]}
                            previous={317}
                            buffer={15}
                            goal={100}
                            golf={false}
                            image={four}
                        />
                    </div>
                {/* </div> */}
            </div>
            <Footer />
            {/* <DummyData 
                today={today}
                previous={previous}
                buffer={buffer}
                goal={goal}
                golf={golf}
                setToday = {setToday}
                setPrevious = {setPrevious}
                setGoal = {setGoal}
                setGolf = {setGolf}
                setBuffer = {setBuffer}
            /> */}
        </div>
     );
}

export default Main;