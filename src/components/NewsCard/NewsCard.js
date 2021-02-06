import React from "react";
import Box from "@material-ui/core/Box";

const NewsCard = ({ article }) => {
  console.log(article);
  return (
    <Box border={1} borderColor="white">
      {article}
    </Box>
  );
};

export default NewsCard;
