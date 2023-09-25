import React, { useState, useEffect } from 'react';
import NewsUpdate from './NewsUpdate';

function News() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = () => {
    setLoading(true);

    fetch('https://newsapi.org/v2/everything?q=Apple&from=2023-09-10&sortBy=popularity&apiKey=76a6b07399f7453898a293eda62e54cb')
      .then(response => response.json())
      .then(data => {
        setArticles(data.articles);
        setLoading(false);
        setFilteredArticles(data.articles);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  };

  const handleSearchChange = event => {
    const searchQuery = event.target.value;
    setSearchQuery(searchQuery);
    filterArticles();
  };

  const filterArticles = () => {
    const filteredArticles = articles.filter(article =>
      article.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredArticles(filteredArticles);
  };

  return (
    <div className='container my-3'>
      <input
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <div className="row">
        {filteredArticles.map(element => (
          <div className="col-md-4" key={element.url}>
            <NewsUpdate
              title={element.title}
              key={element.url}
              newsUrl={element.url}
              description={element.description.slice(0, 100)}
              imageUrl={element.urlToImage}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
