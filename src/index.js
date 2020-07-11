import './styles/main.scss';
import 'regenerator-runtime/runtime'; //need to import this so an error isn't thrown and can use async/await https://flaviocopes.com/parcel-regeneratorruntime-not-defined/
import {elements} from './elements/elements';
import {savedArticles} from './helpers/SaveToLocal'
import app from './app/app';
import books from './app/books';
import movies from './app/movies';
import search from './app/search';


//render - injects template strings into html - added to window to make it globally available
window.render = (element, value="<h1>Loading</h1>", cb=Function) => {
    element.innerHTML = value;

    cb(); //callback function to execute after template has been created
}

//onload method to get date and add to html

window.onload = () => {
    setDate();
    const local = localStorage.getItem('saved');

    if(local){
        elements.readingList.style.display = 'block';
        elements.readingList.addEventListener('click', savedArticles);
    }else{
        elements.readingList.style.display = 'none';
    }
}


const setDate = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
    ];

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var yyyy = today.getFullYear();
    
    today = `${dd}  ${monthNames[today.getMonth()]}, ${yyyy}`;
    elements.date.innerHTML = today;
    elements.year.innerHTML = yyyy;
}


const checkCategory = (e) => {
    const categorey = e.target.value;

    if(categorey === 'books'){
        books();
    }else if(categorey === 'movies'){
        movies();
    }else{
        app(categorey);
    }
}


//determines what article template to use
elements.navMenu.addEventListener('click', checkCategory);
elements.searchForm.addEventListener('submit', search);

//starts the main app
app();