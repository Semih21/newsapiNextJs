import React from 'react'
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';


const Sports = (props) => (
  <div>
 <Layout >
 <div class="row">

   {props.articles.map(article=>{
   return (
    <div class="col s12 m6">
      <div class="card">
        <div class="card-image">
          <img src={article.urlToImage}/>
          <span class="card-title">{article.title}</span>
          <a href={article.url} class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
        </div>
        <div class="card-content">
          <p>{article.content}</p>
        </div>
      </div>
    </div>
   )})}

   </div>
 </Layout>

  </div>
)
Sports.getInitialProps = async function() {
  const res = await fetch('https://newsapi.org/v2/top-headlines?country=nl&category=sports&apiKey=d94efa04117b41ddaeb36bffcb564496');
  const data = await res.json();

  

  return {
    articles: data.articles
  };
};


export default Sports