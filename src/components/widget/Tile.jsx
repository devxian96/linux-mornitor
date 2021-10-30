import { Card, Box } from "@mui/material";

const Loading = () => {
  return <div>Loading</div>;
};

const Tile = ({ component: Component, title }) => {
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
          display: { md: "flex", sm: "block" },
          position: "relative",
          minHeight: "100px",
          flexWrap: "nowrap",
          p: 1,
          m: 1,
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: { lg: "180px", md: "150px", sm: "120px" },
          }}
        >
          {Component !== undefined ? <Component /> : <Loading />}
        </Box>
        <Box
          sx={{
            flex: "1",
            position: "absolute",
            top: { md: "50%", sm: "90%" },
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
          }}
        >
          {title ? title : ""}
        </Box>
      </Box>
    </Card>
  );
};

export default Tile;
