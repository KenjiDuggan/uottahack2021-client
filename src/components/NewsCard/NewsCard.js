import React from "react";
import Box from "@material-ui/core/Box";

const NewsCard = ({ article }) => {
  console.log(article);
  const { author, content, description, publishedAt, source, title, url, urlToImage } = article;
  return (
    <Box border={1} borderColor="white">
      { author }
    </Box>
  );
};

export default NewsCard;
