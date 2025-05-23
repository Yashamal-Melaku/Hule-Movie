import './components/search.jsx';
import './App.css';
import { useEffect, useState } from 'react';
import Search from './components/search.jsx';
import MovieCard from './components/MovieCard.jsx';
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
  const [movieList, setMovielist] =useState([]);
  const [isloading, setIsLoading] = useState(true)

    const fetchMovies = async () => { 
      setIsLoading(true);
      setErrorMessage('')
      try{  
        const endpoint=`${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

          const response =await fetch(endpoint,API_OPTIONS);
          if(!response.ok){
            throw new Error('Failed to fetch movies');
          }
            const data = await response.json();
            console.log(data);
            if(data.Response = 'false'){
              setErrorMessage(data.error|| 'Faild to fetch movies');
              setMovieList([]);
              return;
            }
            setMovielist(data.results);
        }catch(error){
      console.error(`Error fetching movies: ${error}`);
      setErrorMessage('Error fetching movies. please try again later.');

    }
      finally{
        setIsLoading(true);
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
<h2 className="mt-[20px]">
    ALL Movies
</h2>

{isloading?(<p className="text-white">
  Loading....
</p>)
      : errorMassage ? (<p className='text-white'> 
      {errorMassage}

      </p>) : (

        <ul>
          {movieList.map}((movie) ==> (
<MovieCard  key={movie.id} movie={movie} />  
            
          ))}

        </ul>
      )
    
    </section>
      </div>
    </main>
  )

}
export default App;
