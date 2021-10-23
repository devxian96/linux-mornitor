import { Card, Box } from "@mui/material";

const Loading = () => {
  return <div>Loading</div>;
};

const Tile = ({ Component, title }) => {
  return (
    <Card
      sx={{
        width: "100%",
        minHeight: "100px",
        backgroundColor: "#0F1C25",
        borderRadius: "0",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          p: 1,
          m: 1,
        }}
      >
        <Box sx={{ width: "100%", maxWidth: "200px" }}>
          {Component !== undefined ? <Component /> : <Loading />}
        </Box>
        <Box sx={{ flex: "1", verticalAlign: "middle", lineHeight: "100px" }}>
          {title ? title : ""}
        </Box>
      </Box>
    </Card>
  );
};

export default Tile;
