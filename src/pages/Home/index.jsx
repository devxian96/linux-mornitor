import React, { useEffect } from "react";
import { Box } from "@mui/material";
import Tile from "../../components/widget/Tile";

const Home = () => {
  useEffect(() => {
    document.title = "리눅스 모니터";
  }, []);

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "nowrap",
      }}
    >
      <Tile
        Component={() => {
          return <div>hi</div>;
        }}
        title="CPU 사용량"
      />
      <Tile
        Component={() => {
          return <div>hi</div>;
        }}
        title="RAM 사용량"
      />
      <Tile
        Component={() => {
          return <div>hi</div>;
        }}
        title="HDD/SDD 사용량"
      />
    </Box>
  );
};

export default Home;
