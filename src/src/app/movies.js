import axios from 'axios';
import {runLoader} from '../components/loader';
import {NYTIMES_KEY} from '../config';

const movie = (movie) => {
    
    const template = `
        <div class="movie">
        <h1 class="movie__title">${movie.headline}</h1>
        <div class="movie__img"><img src=${movie.multimedia.src} alt=""/></div>
        <div class="movie__snippet">${movie.summary_short}</div>
        <a href=${movie.link.url} class="movie__link">${movie.link.suggested_link_text}</a>
        </div>
    `
    return template;
}

const movies = async () => {
    runLoader();
    const response = await axios.get(`https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=${NYTIMES_KEY}`)
    const list = response.data.results;

    const template = `
    <div class="movies">
        ${
            list.map(item => {
               return  movie(item);
            }).join('')
        }
    </div>  
    `

    render(document.querySelector('.home'), template);
}
export default movies;