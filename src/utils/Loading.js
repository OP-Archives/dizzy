import LoadingLogo from "../assets/logo.avif";
import { Box, CircularProgress } from "@mui/material";

export default function Loading() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%", width: "100%", flexDirection: "column" }}>
      <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
        <img alt="" src={LoadingLogo} style={{ height: "auto", maxWidth: "100%", maxHeight: 150 }} />
        <CircularProgress style={{ marginTop: "2rem" }} size="2rem" />
      </Box>
    </Box>
  );
}
