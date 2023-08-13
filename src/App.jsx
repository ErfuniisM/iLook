import React, { useState } from "react";
import DarkMode from "./assets/Components/DarkMode/DarkMode";
import LinkField from "./assets/Components/LinkField/LinkField";
import Player from "./assets/Components/Player/Player";
import CharcterGif from "./assets/Components/RandomCharcterGif/CharcterGif";
import { Box } from "@mui/material";
import GithubLink from "./assets/Components/GithubLink/GithubLink";
function App() {
  const [fetchedUrl, setFetchedUrl] = useState("");
  const fetchVideo = (url) => {
    setFetchedUrl(url);
  };
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={"10px"}
      alignItems={"center"}
    >
      <DarkMode LinkField={<LinkField fetchVideo={fetchVideo} />} />
      <Player url={fetchedUrl} />
      <CharcterGif />
      <GithubLink />
    </Box>
  );
}

export default App;
