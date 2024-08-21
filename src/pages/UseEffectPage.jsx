import { SimpleForm, FormCustomHook } from "../components"

export const UseEffectPage = () => {
  return (
    <>
      <h4>1. Just a form, if you right the right username you will see an object with mouse coordinates</h4>
      <SimpleForm />
      <br />
      <span style={{ display:'block', marginBottom:'90px' }}></span>
      <h4>2. Form handled with a custom hook</h4>
      <FormCustomHook />
    </>
  )
}
