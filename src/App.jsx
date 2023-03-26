import React from "react";
import DarkMode from "./assets/Components/DarkMode/DarkMode";
import LinkField from "./assets/Components/LinkField/LinkField";
import Player from "./assets/Components/Player/Player";
import CharcterGif from "./assets/Components/RandomCharcterGif/CharcterGif";
import { Box } from "@mui/material";
function App() {
  const [fetchedUrl, setFetchedUrl] = useState("");
  const fetchVideo = (url) => {
    setFetchedUrl(url);
  };
  return (
    <Box>
      <DarkMode LinkField={<Link fetchVideo={fetchVideo} />} />;
      <Player />
      <CharcterGif />
    </Box>
  );
}

export default App;
