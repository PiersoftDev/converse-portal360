import { Box, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import DownloadIcon from "@mui/icons-material/Download";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

export const Members = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Box
        sx={{
          display: "grid",
          gap: 10,
          gridTemplateColumns: "25% 70%",
        }}
      >
        <div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <p>
              <strong>Members</strong>
            </p>
            <small>
              Invite your team members on Nook <br /> to work faster and collaborate easily together. <br /> Manage their permissions to better structure projects.
            </small>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                mt: 3,
              }}
            >
              <Button variant="contained" startIcon={<DownloadIcon />}>
                <small>Download CSV</small>
              </Button>
              <Button variant="contained" color="success">
                <small>Invite a new member</small>
              </Button>
            </Box>
          </Box>
        </div>
        <div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, backgroundColor: "#f3f5f7" }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>
                    <small>NAME</small>
                  </TableCell>
                  <TableCell align="left">
                    <small>DATE ADDED</small>
                  </TableCell>
                  <TableCell align="left">
                    <small>LAST ACTIVE</small>
                  </TableCell>
                  <TableCell align="left"></TableCell>
                  <TableCell align="left"></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {[...Array(5)].map((x, i) => (
                  <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                    <TableCell component="th" scope="row">
                      <Box
                        sx={{
                          display: "flex",
                          gap: 2,
                        }}
                      >
                        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                        <div>
                          <strong>Glenn Fisher </strong>
                          <br />
                          <small>glenn.fisher@gmail.com</small>
                        </div>
                      </Box>
                    </TableCell>
                    <TableCell align="left">May 02, 2022</TableCell>
                    <TableCell align="left">Aug 28, 2022</TableCell>
                    <TableCell align="left">
                      <FormControl key={i} sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small">Age</InputLabel>
                        <Select labelId="demo-select-small" id="demo-select-small" key={i} value={age} label="Age" onChange={handleChange}>
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>
                          <MenuItem value={10}>Ten</MenuItem>
                          <MenuItem value={20}>Twenty</MenuItem>
                          <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                      </FormControl>
                    </TableCell>
                    <TableCell align="left">
                      <DeleteOutlineOutlinedIcon />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </Box>
    </div>
  );
};
