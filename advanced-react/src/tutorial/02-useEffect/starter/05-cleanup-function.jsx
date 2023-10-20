import { useEffect, useState } from "react";

const CleanupFunction = () => {

  const [toggle, setToggle] = useState(false)

  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>toggle component</button>
      {toggle && <RandomComponent />}
    </div>
  )
};

// const RandomComponent = () => {

//   useEffect( () => {
//     console.log('Hmm, this is interesting')
//     const intId = setInterval( () => {
//       console.log("Hello from interval")
//     }, 1000);

//     return () => {
//       clearInterval(intId)
//       console.log('cleanup')
//     };
//   }, [])
//   return <h1>Hello there</h1>
// }


const RandomComponent = () => {
  useEffect( () => {
    const someFunc = () => {
      // some logic
    }

    window.addEventListener('scroll', someFunc);
    return () => window.removeEventListener('scroll', someFunc)
  }, []);
  return <h1>Hello there</h1>
}

export default CleanupFunction;
