import { useEffect, useState } from 'react'
import './Info.css'

const Info = () => {
    let poke = window.location.pathname

    const [activePoke, setActivePoke] = useState(false)
    const [loaded, setLoaded] = useState(false)
    
    async function fetchFunc(){
        const fetchUrl = 'https://pokeapi.co/api/v2/pokemon'
        try{
            const fetchResult = await fetch(`${fetchUrl}${poke}`)
            if(fetchResult.ok){
                const results = await fetchResult.json()
                console.log(results)
                return results
            }
        }catch(err){
            console.log(err)
        }
    }

    useEffect(() => {
        fetchFunc().then(res => setActivePoke(res)).then(setLoaded(true))
    }, [])

    
   

    return (
        <div className="info-div">
            {activePoke && <div className="info-body">
                <h3 className="a-poke-name">{activePoke.name}</h3>
                <img className='a-poke-img' alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${activePoke.name}.jpg`} />

                <div className="types-div">
                    {activePoke.types.map((type) => {
                        return <p className={`${type.type.name} type-text`} key={type.type.name}>{type.type.name}</p>
                    })}
                </div>

                <div className="stats-div">
                    {activePoke.stats.map((stat) => {
                        return <div className="sub-stat-div" key={stat.stat.name}>
                            <p className="stat-name">{stat.stat.name}</p>
                            <p className="stat-data">{stat.base_stat}</p>
                        </div>
                    })}
                </div>

            </div> }
        </div>
    );
}
 
export default Info;