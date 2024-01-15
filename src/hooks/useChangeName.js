import { useState } from "react";
import axios from "axios";

export const useChangeName = () => {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const logged = JSON.parse(localStorage.getItem('user'));
  let email;
  if(logged){
    email = logged.email;
  }
  const changeName = async (username) => {
    setIsLoading(true);
    setError(null);
    try {
      await axios.patch(`http://localhost:4000/changeName/${email}`, {
        username
      });
    } catch (error) {
      // If there was an error with the request
      setIsLoading(false);
      setError(error.response.data.error);
    } finally {
      setIsLoading(false);
    }
  };

  return { changeName, isLoading, error };
};