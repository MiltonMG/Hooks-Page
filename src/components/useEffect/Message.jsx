import { useEffect, useState } from "react"

export const Message = () => {
    
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    useEffect(() => {
        

        const onMouseMove = (event) => {    // Evento
            setCoords({ x: event.x, y: event.y })
        }

        window.addEventListener('mousemove', onMouseMove);
    
        return () => {// Desmontar el evento
            window.removeEventListener('mousemove', onMouseMove);
        }
    }, []);
    
    
    return (
    <>
        <h5 className="mt-3"> User already exists </h5>
        {
            JSON.stringify(coords)
        }
    </>
  )
}
