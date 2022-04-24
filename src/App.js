import { Add } from "@mui/icons-material";
import { Container, Stack } from "@mui/material";
import { Box } from "@mui/system";
import Feed from "./Components/Feed";
import NavBar from "./Components/NavBar";
import RightBar from "./Components/RightBar";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <Box>
      <NavBar/>
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <SideBar />
        <Feed />
        <RightBar />
      </Stack>
      <Add/>
    </Box>
  );
}

export default App;
