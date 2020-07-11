import {elements} from '../elements/elements';
import {article} from '../components/article';

//save to localStorage
export const saveToLocal = (e) => {
    elements.readingList.style.display = 'block';

    elements.readingList.addEventListener('click', savedArticles);
    
    const item = e.target.parentElement.parentElement.children;

    const object = {
        url: item[0].href,
        title: item[0].children[0].children[1].innerText,
        abstract: item[0].children[1].innerText,
        byline: item[1].children[0].innerText
    }

    let local = JSON.parse(localStorage.getItem('saved'));
    
    if(local === null){
        local = [];
        local.push(object);
        localStorage.setItem('saved', JSON.stringify(local));
    }else{
        local.push(object);
        localStorage.setItem('saved', JSON.stringify(local));
    }

}


export const savedArticles = () => {
    const saved = JSON.parse(localStorage.getItem('saved'));

    const template = ` 
    <div class="saved__articles">
        ${
        saved.map(item => {
            return article(item)
        })
        .join('') //need to add this because template
                  //literals use toString() which joins with a ','
    }
    </div> 
` 
       
    render(document.querySelector('.home'), template);
}