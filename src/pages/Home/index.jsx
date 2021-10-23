import React, { useEffect } from "react";
import Tile from "../../components/widget/Tile";

const Home = () => {
  useEffect(() => {
    document.title = "리눅스 모니터";
  }, []);

  return (
    <div>
      <Tile
        Component={() => {
          return <div>hi</div>;
        }}
        title="CPU 사용량"
      />
    </div>
  );
};

export default Home;
