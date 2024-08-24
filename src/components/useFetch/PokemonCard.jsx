import './pokeCard.css';

export const PokemonCard = ({ id, name, sprites = [], attack, defense, speed, hp, types = [] }) => {

    const typeColor = {
        bug: "#26de81",
        dragon: "#1FADD1",
        electric: "#fed330",
        fairy: "#FF0069",
        fighting: "#30336b",
        fire: "#f0932b",
        flying: "#81ecec",
        grass: "#00b894",
        ground: "#EFB549",
        ghost: "#a55eea",
        ice: "#74b9ff",
        normal: "#95afc0",
        poison: "#6c5ce7",
        psychic: "#a29bfe",
        rock: "#2d3436",
        water: "#0190FF",
        steel: "#7f8fa6",
        dark: "#2f3640",
    };

    // Obtenemos el color correspondiente al primer tipo
    const themeColor = types.length > 0 ? typeColor[types[0].type.name] : "#ffffff";

    return (
        <section style={{ width: '100%' }}>
            <div
                id='card'
                style={{
                    background: `radial-gradient(circle at 50% 0%, ${themeColor} 36%, #ffffff 36%)`,
                    padding: '20px',
                    borderRadius: '15px',
                    boxShadow: '0px 0px 15px rgba(0,0,0,0.3)'
                }}>
                <p className="hp">
                    <span>HP</span>
                    {hp}
                </p>
                <div className='d-flex' >
                    <img src={sprites.front_default} alt={name} style={{ width: '200px' }} />
                    {/* <img src={sprites.front_shiny} alt={name} style={{ width: '200px' }} /> */}
                </div>
                <h2 className="poke-name text-capitalize">{name}</h2>
                <div className="types">
                    {
                        types.map((type, index) => (
                            <span key={index} style={{ backgroundColor: typeColor[type.type.name] }} className="type">{type.type.name}</span>
                        ))
                    }
                </div>
                <div className="stats">
                    <div>
                        <h3>{attack}</h3>
                        <p>Attack</p>
                    </div>
                    <div>
                        <h3>{defense}</h3>
                        <p>Defense</p>
                    </div>
                    <div>
                        <h3>{speed}</h3>
                        <p>Speed</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
