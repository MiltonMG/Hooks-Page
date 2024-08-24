import { useEffect, useState } from "react"


const localCache = {

}

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

        if(localCache[url]){
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            })
            return
        }
        
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

            {/* Manejo del cache */}
            localCache[url] = data;


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


