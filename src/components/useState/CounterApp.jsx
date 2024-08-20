import { useState } from "react"

export const CounterApp = () => {
  
    const [{ counter1, counter2, counter3 }, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    return (
    <>
        <h5>Counter 1: { counter1 } </h5>

        <button className="btn btn-primary" name="plus-counter1" onClick={ () => setCounter( prevState => ({ ...prevState, counter1: counter1+1 }) ) }>+1</button>
        <button className="btn btn-primary" onClick={ () => setCounter( prevState => ({ ...prevState, counter1: counter1-1 }) ) }>-1</button>

        <hr />

        <h5>Counter 2: { counter2 } </h5>

        <button className="btn btn-primary" onClick={ () => setCounter( prevState => ({ ...prevState, counter2: counter2+1 }))}>+1</button>
        <button className="btn btn-primary" onClick={ () => setCounter( prevState => ({ ...prevState, counter2: counter2-1 }) ) }>-1</button>

        <hr />

        <h5>Counter 3: { counter3 } </h5>

        <button className="btn btn-primary" name="plus-counter1" onClick={ () => setCounter( prevState => ({ ...prevState, counter3: counter3+1 }))}>+1</button> 
        <button className="btn btn-primary" onClick={ () => setCounter( prevState => ({ ...prevState, counter3: counter3-1 }) ) }>-1</button>

    </>
  )
}
