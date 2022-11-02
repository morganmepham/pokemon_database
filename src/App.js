import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';
import Body from './Comps/Body/Body';
import Header from './Comps/Header/Header';
import Info from './Comps/Info/Info';

function App() {
  const [results, setResults] = useState([])

  async function fetchFunc(){
      const fetchUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0'
      try{
          const fetchResult = await fetch(fetchUrl)
          if(fetchResult.ok){
              const results = await fetchResult.json()
              let pokemon = results.results
              return pokemon
          }
      }catch(err){
          console.log(err)
      }
  }

    useEffect(() => {
      fetchFunc().then(res => setResults(res))
  }, [])


  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path='/'>
            <Route index element={<Body results={results}/>} />
            <Route path=':id' element={<Info/>} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
