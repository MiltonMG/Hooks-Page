import { useForm } from "../../hooks/useForm"

export const FormCustomHook = () => {

    const { formState, onInputChange, onResetForm } = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formState
        
    
    return (
        <>

            <input
                type="text"
                className="form-control mt-4"
                placeholder="Name"
                name="name"
                value={ name }
                onChange={ onInputChange }
            />

            <input
                type="text"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ onInputChange }
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={ password }
                onChange={ onInputChange }
            />

            <button 
                className="btn btn-primary mt-2"
                onClick={ onResetForm }    
            >
                Reset
            </button>
        </>

    )
}
