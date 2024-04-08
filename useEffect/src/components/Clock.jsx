import { useEffect } from "react";
import { useState } from "react";
import { LanguageContext } from "./LanguageContext";
import { useContext } from "react";

export function Clock (){
  const [currentTime, setCurrentTime] = useState(new Date())
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      /*Update time*/
     setCurrentTime(new Date())
    }, 1000)
    return () => {
      /*Cleanup function to clear the interval when the component is unmount */
      clearInterval(intervalId)
    }
    /*Empty array to run the effect only once, when the component mounts*/
    }, [])
  const language = useContext(LanguageContext)
  return (
    <div>
      
      <h2>{language === 'en' ? 'Current Time:'  : 'Ora corrente'}</h2>
      <span>{currentTime.toLocaleTimeString()}</span>
    </div>
  );
}