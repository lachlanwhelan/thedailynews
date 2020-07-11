import axios from 'axios';
import {runLoader} from '../components/loader';
import {NYTIMES_KEY} from '../config';

const searchArticle = (article) => {

    const template = `
    <div class="article">
        <a class="article__link" href=${article.url}>
            <div class="article__grp">
            <h2 class="article__title">${article.headline.main}</h2>
            </div>
            <div class="article__snippet">${article.abstract}</div>
        </a>
            <div class="article__footer">
            <p class="article__by">${article.byline ? article.byline.original : 'By Unknown'}&nbsp;</p>
            <button class="article__btn">Add to Reading List</button>
            </div>
    </div>
    `
    return template;
}

const search = async (e) => {
    e.preventDefault();
    runLoader();
    
    const response = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${e.target[0].value}&api-key=${NYTIMES_KEY}`)
    const list = response.data.response.docs;

    const template = ` 
        <div class="search__container">
            ${
            list.map(item => {
                return searchArticle(item)
            })
            .join('') //need to add this because template
                      //literals use toString() which joins with a ','
        }
        </div> 
    ` 
    
    render(document.querySelector('.home'), template);
}

export default search;