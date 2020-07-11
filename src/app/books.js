import axios from 'axios';
import {runLoader} from '../components/loader';
import {NYTIMES_KEY} from '../config';

const book = (book) => {
    const template = `
    <div class="book">
        <div class="book-grp">
            <h1 class="book__rank">${book.rank}</h1>
            <div class="book__img"><img src=${book.book_image} alt=""/></div>
        </div>
        <h4 class="book__title">${book.title}</h4>
        <p class="book_snippet">${book.description}</p>
        <p>${book.author}</p>
        <a class="book__link" href=${book.buy_links[0].url}>Buy</a>
    </div>
    `
    return template;
}

const books = async () => {

    runLoader();

    const response = await axios.get(`https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${NYTIMES_KEY}`)
    const list = response.data.results.books;
    
    const template = `
    <div class="books">
    <h1 class="heading">The <br/> New York Times<br/> Best Sellers</h1>
    ${
        list.map(item => {
            return book(item);
        }).join('')
    }
    </div>  
    `

    render(document.querySelector('.home'), template);
}

export default books;