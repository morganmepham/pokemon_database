import { useEffect, useState } from 'react'
import './Body.css'
import pokeball from '../../images/pokeball.png'
import { useNavigate } from 'react-router-dom'

const Body = (props) => {
    const results = props.results
    const [filtered, setFiltered] = useState(results)
    const [searchText, setSearchText] = useState('')
    const navigate = useNavigate()

    const handleSearch = () => {
        if(searchText === ''){
            setFiltered(results)
        }else{
            const r = results.filter((result) => {
                return result.name.startsWith(searchText)
            })
            setFiltered(r)
        }
    }
    const handleItemClick = (e) => {
        const poke = e.target.parentNode.classList[0]
        navigate(`/${poke}`)
    }

    useEffect(() => {
        if(searchText === '' && filtered !== results){
            setFiltered(results)
        }
    })

    return (
        <>
        <div className="search-div">
            <input type="text" className="search-input" placeholder='Search...' value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }}/>
            <button className='search-button' onClick={() => handleSearch()}>Search</button>
        </div>
        <div className="body-div">
            {!results && <img src={pokeball} alt="Loading" className="loading-ball" /> }
            {results && filtered.map((item) => {
                return <div className={`${item.name} poke-item`} key={item.name} onClick={handleItemClick}>
                     <img className='poke-img' alt="pokemon" src={`https://img.pokemondb.net/artwork/large/${item.name}.jpg`} />
                    
                    <p className='poke-name'>{item.name[0].toUpperCase()+item.name.slice(1)}</p>
                </div>
            })}
        </div>
        </>
    );
}
 
export default Body;