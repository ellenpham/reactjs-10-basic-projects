import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'peter',
    age: 24,
    hobby: 'read books',
  })

  const displayPerson = () => {
    setPerson({name: 'john', age: 28, hobby: 'play games'});
  };

  return (
    <div>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>Enjoy: {person.hobby}</h4>
      <button className='btn' onClick={displayPerson}>Show John</button>
    </div>
  );
};

export default UseStateObject;
