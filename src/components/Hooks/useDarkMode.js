import {useEffect} from 'react'
import {useLocalStorage} from './useLocalStorage'


export const useDarkMode= (key, initialValue)=>{

    const [values, setValues]=useLocalStorage(key, initialValue)
    

    useEffect(()=>{
       if(values===true){
         document.querySelector("body").classList.add("dark-mode")
       }
       else{
        document.querySelector("body").classList.remove("dark-mode")
       }


    },[values])

    const toggleMode = e => {
        e.preventDefault();
        setValues(!values);
      };

    return [values,toggleMode]
}