import { useEffect, useState } from "react"

export const useFetch = ( url ) => {
    
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null
    })

    useEffect(() => {
        
        getFetch();
        
      return () => {
        
      }
    }, [url])

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        })
    }


    const getFetch = async () => {
        
        try {
            setLoadingState()
            const resp = await fetch(url)

            //Sleep
            await new Promise(resolve => setTimeout(resolve, 500))

            const data = await resp.json()
            setState({
                data: data,
                isLoading: false,
                hasError: false,
                error: null
            })
        } catch (error) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: error
            })    

        }
        
        

    }                
    
  
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        error: state.error
    }
}


