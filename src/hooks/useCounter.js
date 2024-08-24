import { useState } from "react";


export const useCounter = (initialValue = 10) =>{

    const [count, setCount] = useState(initialValue);


    {/* Llamamos a increment y decrement como funciona anonima ya que el click proporciona 
        un parametro evento en automatico y no lo necesitamos onClick={() => increment()} */ }

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    const reset = () => {   
        setCount(initialValue);
    }

    return { count, increment, decrement, reset, setCount };
}
