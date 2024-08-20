import { useCounter } from "../../hooks/useCounter";

export const CounterCustomHook = () => {
  
  const { count, increment, decrement, reset } = useCounter();  
  
  return (
    <>
      <h5>Counter: {count}</h5>

      <button className="btn btn-primary" onClick={increment}> +1 </button>
      <button className="btn btn-primary" onClick={reset}> Reset </button>
      <button className="btn btn-primary" onClick={decrement}> -1 </button>
    </>
  )
}
