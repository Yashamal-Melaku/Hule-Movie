import './components/search.jsx';
import './App.css';
import { useEffect, useState } from 'react';
import Search from './components/search.jsx';
// eslint-disable-next-line no-unused-vars
const API_BASE_URL=`https://api.themoviedb.org/3`;
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// eslint-disable-next-line no-unused-vars
const API_OPTIONS ={ methode: 'GET',headers: {
    accept: 'application/json',
    Authorization:`Bearer ${API_KEY}`
  }
} 

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');


const [errorMassage, setErrorMessage] =useState('');
    const fetchMovies = async () => { 
      try{
        const endpoint=`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`

          const response =await fetch(endpoint,API_OPTIONS);
            throw new Error('Failed to fetch movies');
        }catch(error){
      console.error(`Error fetching movies: ${error}`)

    }

    }
}
  useEffect( () =>{
    fetchMovies();

  },[]); 
 return(
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header className="App-header">
          <img src="./hero.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> You'll Enjoy Without The Hassle
          </h1>        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        </header>
    <section className="all-movies">
<h2>
    ALL Movies
</h2>
{errorMassage && <p className="text-red-500">{errorMessage}</p>}

    </section>
      </div>
    </main>
  );

}
export default App;
