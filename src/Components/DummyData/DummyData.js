import React from 'react'

function DummyData(props) {

  return (
      <div>
    <form>
    <div>
      <label>On track for today:
        <input
          type="text" 
          value={props.today}
          onChange={(e) => props.setToday(e.target.value)}
        />
      </label>
      </div>
      <div>
      <label>Last week's daily average:
        <input
          type="text" 
          value={props.previous}
          onChange={(e) => props.setPrevious(e.target.value)}
        />
      </label>
      </div>
      <div>
      <label>Our daily goal:
        <input
          type="text" 
          value={props.goal}
          onChange={(e) => props.setGoal(e.target.value)}
        />
      </label>
      </div>
      <div>
      <label>Acceptable Buffer:
        <input
          type="text" 
          value={props.buffer}
          onChange={(e) => props.setBuffer(e.target.value)}
        />
      </label>
      </div>
      <div>
      <label>Lower Is Better:
        <input
          type="checkbox" 
          value={props.golf}
          onChange={(e) => props.setGolf(!props.golf)}
        />
      </label>
      </div>
    </form>
    

    </div>
  )
}


export default DummyData;