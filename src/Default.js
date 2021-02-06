
import React, { useEffect, useState } from "react";
import NewsCard from "./components/NewsCard/NewsCard";
import SampleComponent from "./SampleComponent";
import "./Default.css";
 
const Default = (props) => {
    const [articles, setArticles] = useState(props.news);

    useEffect(() => {
        setArticles(props.news)
    }, [props.news]);

  return (
    <div className="Default">
        <h1>COVID-19 Updates</h1>
        <div>Ontario</div>
        <header className="App-header">
        { articles.length > 0 && articles.map((article, i) => (
            <NewsCard key={article} article={article} key={i} />
        ))}
        <SampleComponent color="blue" />
        </header>
    </div>
  );
}

export default Default