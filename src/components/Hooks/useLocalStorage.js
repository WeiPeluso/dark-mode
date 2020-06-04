import {useState} from 'react'

export const useLocalStorage =(key, initialValue)=>{

    const [storedValue, setStoredValue]=useState(()=>{
       
            const mode = window.localStorage.getItem(key);
            return mode? JSON.parse(mode) : initialValue;
    })
        


   const setValue=(value)=>{
        setStoredValue(value);
        window.localStorage.setItem(key,JSON.stringify(value));
    };
 
   return [storedValue, setValue];

}