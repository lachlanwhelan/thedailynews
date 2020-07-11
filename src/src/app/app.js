import {article} from '../components/article';
import {runLoader} from '../components/loader';
import {saveToLocal} from '../helpers/SaveToLocal';
import {NYTIMES_KEY} from '../config';
import axios from 'axios';


//callback function implemented in render method
const getArticle = () => {
    const addBtns = document.querySelectorAll('.article__btn');
    
    addBtns.forEach(btn => {
        btn.addEventListener('click', saveToLocal);
    })
}

//param with a default value of 'home'
const app = async (type='home') => {
    
    runLoader();

    const response = await axios.get(`https://api.nytimes.com/svc/topstories/v2/${type}.json?api-key=${NYTIMES_KEY}`)

    const list = response.data.results;

    let first = [];

    let second = [];


    if(list.length <= 10){

            list.forEach(item => {
                second.push(item)
            })
            
    }else{

        list.forEach((item, index) => {
            if(index <= 10  ){
               first.push(item);
            }else{
                second.push(item);
            }
        })
    }
        
        const template = ` 
            <div class="container">
                <aside class="sidebar">
                ${
                    first.map(item => {
                        return article(item)
                    })
                    .join('') //need to add this because template
                              //literals use toString() which joins with a ','
                }
                </aside>
                

                <main class="main">
                ${
                    second.map(item => {
                        return article(item)
                    })
                    .join('') //need to add this because template
                              //literals use toString() which joins with a ','
                }
                </main>
            </div> 
        ` 
        
    render(document.querySelector('.home'), template, getArticle);
}

export default app;