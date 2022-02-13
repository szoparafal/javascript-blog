'use strict';

//CLASS ACTIVE//


  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');
  
    /* remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }
    console.log('active')
    
    /* add class 'active' to the clicked link */
    clickedElement.classList.add('active');

    //console.log('clickedElement:', clickedElement);

    /* remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts .active');

    for(let activeArticle of activeArticles){
      activeArticle.classList.remove('active');
    }

    /* get 'href' attribute from the clicked link */
    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(href);
    console.log(targetArticle);

    /* add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };

  //TITLE LIST//


    const optArticleSelector = '.post',
        optTitleSelector = '.post-title',
        optTitleListSelector = '.titles';

  function generateTitleLinks(){

    /* remove contents of titleList */
        const titleList = document.querySelector(optTitleListSelector);
        titleList.innerHTML = '';

        let html='';

    /* for each article */
        const articles = document.querySelectorAll(optArticleSelector);
        for(let article of articles){

    /* get the article id */
        const articleId = article.getAttribute('id');

    /* find the title element */
        const articleTitleElement = article.querySelector(optTitleSelector);

    /* get the title from the title element */
        const articleTitle = articleTitleElement.innerHTML;

    /* create HTML of the link */
        const linkHTML = '<li><a href="#'+articleId+'"><span>'+articleTitle+'</span></a></li>';
        
    /* insert link into titleList */
        
        html = html + linkHTML
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }
}

generateTitleLinks()