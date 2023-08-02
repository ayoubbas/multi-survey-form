import { AppBar, Toolbar, Typography, Avatar } from "@mui/material";
import Container from "@mui/material/Container";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import Stack from "@mui/material/Stack";

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = "#";

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  /* eslint-enable no-bitwise */

  return color;
}

function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
  };
}
function Navbar() {
  // You can replace this with the URL of your user's image
  const userImageUrl =
    "https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg";

  return (
    <AppBar position="static">
      <Container maxWidth="md">
        <Toolbar style={{ display: "grid", gridTemplateColumns: 'repeat(3, 1fr)' ,justifyContent:"space-between"}}>
          <LunchDiningIcon fontSize="large" style={{}} />
          <h1>Survey Form</h1>
          <div style={{ display: "flex", alignItems: "center",justifyContent:"end", gap: "20px" }}>
            <Typography variant="h6" component="span">
              ayoub dev
            </Typography>
            <Stack direction="row" spacing={2}>
              <Avatar {...stringAvatar("Ayoub Dev")} />
            </Stack>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
