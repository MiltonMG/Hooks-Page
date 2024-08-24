import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch"
import { LoadingMessage } from "./LoadingMessage";
import { PokemonCard } from "./PokemonCard";



export const PokemonLayout = () => {

    const { count, decrement, increment, setCount } = useCounter(1);

    const { data, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${count}`);

    return (

        <>
            <h5>Pokemon info</h5>
            <hr />

            <div className="d-flex justify-content-center">
                <div>
                    <div style={{ display: 'flex', justifyContent:'center' }}>
                    {isLoading ? <LoadingMessage /> : <PokemonCard id={count} name={data.name} sprites={data.sprites} attack={data.stats[1].base_stat} defense={data.stats[2].base_stat} speed={data.stats[5].base_stat} hp={data.stats[0].base_stat} types={data.types} />}
                    </div>
                    <br />

                    
                    {/* Llamamos a increment y decrement como funciona anonima ya que el click proporciona 
un parametro evento en automatico y no lo necesitamos onClick={() => increment()} */ }
                    
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent:'center' }}>
                        {/* Prev button */}
                        <button style={{ margin: '0px', width: '90px' }} className="btn btn-dark" onClick={() => (count > 1) ? decrement() : null}>Previous</button>
                        
                        {/* Pokemon ID */}
                        <h5 style={{ margin: 'auto 10px' }}>Pokemon ID: {count}</h5>
                        
                        {/* Next button */}
                        <button style={{ width: '90px' }} className="btn btn-dark" onClick={() => increment()}>Next</button>
                    </div>

                    {/* Random Button */}
                    <button style={{ width: '90px', textAlign:'center', display:"block", margin:'0 auto'}} className="btn btn-warning mt-4" onClick={() => setCount( Math.floor(Math.random() * 999) + 1 )}>Random</button>
                </div>
            </div>



        </>
    )
}
