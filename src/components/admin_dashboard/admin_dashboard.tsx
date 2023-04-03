import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const AdminDashboard = () => {
  return (
    <Container fixed>
      <Box
        sx={{
          display: "flex",
          backgroundColor: "#F7F6F2",
          height: "10vh",
          width: "90vw",
          mt: 2,
          borderRadius:3,
        }}
      ></Box>
      <Box
        sx={{
          backgroundColor: "#F7F6F2",
          height: "100vh",
          width: "90vw",
          mt: 2,
          borderRadius:3,
        }}
      >
         
      </Box>
    </Container>
  );
};
