export const article = (article) => {
    
    let image = '';

    if(article.multimedia){
        if(article.multimedia === null){
            image = '/not-found-image.jpg'; //image not available
        }else{
            image = article.multimedia[0].url;
        }
    }else{
        image = article.img;
    }

    
    const template = `
    <div class="article">
        <a class="article__link" href=${article.url}>
            <div class="article__grp">
            <p class="article__section">${article.section}</p>
            <h2 class="article__title">${article.title}</h2>
            <div class="article__img"><img src=${image} alt=""/></div>
            </div>
            <div class="article__snippet">${article.abstract}</div>
        </a>
            <div class="article__footer">
            <p class="article__by">${article.byline ? article.byline : 'By Unknown'}&nbsp;</p>
            <button class=${article.img ? 'hide' : 'article__btn'}>Add to Reading List</button>
            </div>
        
    </div>
    `
    return template;
}