import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name:'UserTest',
        email:'Test@gmail.com',
    })

    const {name, email} = formState;

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value,
        })
    }

    useEffect(() => {
        // console.log('useEffect called');
        
    }, [])

    useEffect(() => {
        // console.log('Name changed');
    }, [name])

    useEffect(() => {
        // console.log('Email changed');
    }, [email])
    
    
    return (
        <>

            <input
                type="text"
                className="form-control mt-4"
                placeholder="Name"
                name="name"
                value={ name }
                onChange={ handleInputChange }
            />

            <input
                type="text"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ handleInputChange }
            />

            {
                (name === 'UserTest') && <Message />
            }
        </>

    )
}
