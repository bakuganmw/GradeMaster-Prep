import { useState } from "react";
// import axios from "axios";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const {dispatch} = useAuthContext()

  const signup = async (email,username, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(`http://localhost:4000/signup`,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ email,username, password })
    })

    const json = await response.json();

    if (!response.ok){
      setIsLoading(false)
      setError(json.error);
    }

    if (response.ok){
      localStorage.setItem('user', JSON.stringify(json))

      // update the auth context
      dispatch({type:'LOGIN', payload:json})
      setIsLoading(false)
    }

  };
  return {signup, isLoading, error}
};

