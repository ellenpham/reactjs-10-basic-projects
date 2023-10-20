import { useEffect, useState } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';

const MultipleReturnsFetchData = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false)
  const [user, setUser] = useState(null);

  useEffect(() => {

    const fetchAPI = async() => {
      try {
        const response = await fetch(url);

        if(!response.ok) {
          setIsError(true)
          setIsLoading(false)
          return;
        }
        const user = await response.json();
        console.log(user)
        setUser(user)
      } catch (error) {
        setIsError(true)
        console.log(error);
      }

      setIsLoading(false)
    };

    fetchAPI();

  }, []);

  if (isLoading){
    return <h2>Loading...</h2>
  }

  if(isError){
    return <h2>There was an error...</h2>
  }

  // if we have multiple returns (conditional rendering)
  // we have to destructure the object after the conditions
  const { avatar_url, name, company, bio } = user

  return (
    <div>
      <img style={{width: '150px', borderRadius: '25px'}} src={avatar_url} alt={name} />
      <h2>{name}</h2>
      <h4>works at {company}</h4>
      <p>{bio}</p>
    </div>
  )
};

export default MultipleReturnsFetchData;
