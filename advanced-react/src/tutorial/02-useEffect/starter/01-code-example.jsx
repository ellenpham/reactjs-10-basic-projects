import { useState } from 'react';

const CodeExample = () => {
  const [value, setValue] = useState(0);

  // const sayHello = () => {
  //   console.log('hello there')
  //   // be careful, you will have an infinite loop
  //   setValue(value + 1)
  // };

  // invoke a function in the componenet as below can possibly lead to a crash
  // sayHello()

  // that is when useEffect helps to run code conditionally in the app
  // we can choose when do we want to run certain code inside our components with useEffect

  return (
    <div>
      <h1>value : {value}</h1>
      <button className='btn' onClick={() => setValue(value + 1)}>
        click me
      </button>
    </div>
  );
};
export default CodeExample;
