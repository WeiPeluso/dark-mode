import {useState} from 'react'

export const useLocalStorage =(key, initialValue)=>{

    const [storedValue, setStoredValue]=useState(()=>{
       
            const mode = window.localStorage.getItem(key);
            return mode? mode : initialValue;
    })
        


   const setValue=(value)=>{
        setStoredValue(value);
        window.localStorage.setItem(key,value);
    };
 
   return [storedValue, setValue];

}