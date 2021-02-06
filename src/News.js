import React from "react";
import Box from "@material-ui/core/Box";

const News = ({ article }) => {
  return (
    <Box border={1} borderColor="white">
      {article}
    </Box>
  );
};

export default News;
