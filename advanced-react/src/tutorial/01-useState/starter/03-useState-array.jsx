import { data } from "../../../data";
import { useState } from "react";

const UseStateArray = () => {

  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    console.log(id);
    const newPeople = people.filter( (person) => person.id !== id);
    setPeople(newPeople);
  }

  const clearAllItems = () => {
    setPeople([])
  }

  return (
    <div>
      {people.map( (person) => {
        const {id, name} = person;
        //console.log(person)
        return (
          <div key={id} className="item" >
            <h4>{name}</h4>
            <button type='button' onClick={() => removeItem(id)}>Remove</button>
          </div>
        ) 
      })}
      <button 
      type='button' 
      className='btn' 
      style={{marginTop: '2rem'}} 
      onClick={clearAllItems}
      >
        Clear items
      </button>
    </div>
  )
};

export default UseStateArray;
