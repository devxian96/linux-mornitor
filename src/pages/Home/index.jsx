import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.title = "리눅스 모니터";
  }, []);

  return <div>hi</div>;
};

export default Home;
