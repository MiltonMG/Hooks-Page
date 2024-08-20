import { CounterApp, CounterCustomHook } from "../components"

export const UseStatePage = () => {
  return (
    <>
        <h4>1. Handling state using the hook -useState- with objects:</h4>
        <br></br>
        <CounterApp />
        <span style={{ display:'block', marginBottom:'90px' }}></span>
        <h4>2. Custom hook to handle a counter using the hook -useState-: </h4>
        <br></br>
        <CounterCustomHook />
    </>
  )
}
