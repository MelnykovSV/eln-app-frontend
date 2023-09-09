import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

import { NavLink } from "react-router-dom";
import { Logo } from "../../ui";
// import { useAppSelector } from "../../redux/hooks";
// import { getToken, getUser } from "../../redux/auth/authSlice";
// import { UserMenu } from "../UserMenu/UserMenu";
import { useAppDispatch } from "../../redux/hooks";
import { logOut } from "../../redux/auth/operations";

const publicPages = ["register", "login"];
const privatePages = ["scheme", "stage", "tasks"];
const settings = ["Logout"];

export function ResponsiveAppBar() {
  const dispatch = useAppDispatch();
  const token = true;
  //   const user = true;
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container className="container" maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}>
            {" "}
            <Logo />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              alignItems: "center",
            }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              className="menu-button">
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              className="mobile-menu"
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}>
              <MenuItem key="Home" onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink to={`/`}>Home</NavLink>
                </Typography>
              </MenuItem>
              {publicPages.map((page) =>
                !token ? (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <NavLink to={`/${page}`}>{page}</NavLink>
                    </Typography>
                  </MenuItem>
                ) : null
              )}
              {privatePages.map((page) =>
                token ? (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">
                      <NavLink to={`/${page}`}>{page}</NavLink>
                    </Typography>
                  </MenuItem>
                ) : null
              )}
            </Menu>
          </Box>

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2, flexGrow: 1 }}>
            {" "}
            <Logo />
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              gap: "20px",
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Button
              key="Home"
              onClick={handleCloseNavMenu}
              className="menu-button"
              variant="contained"
              color="info"
              sx={{
                padding: 0,
              }}>
              <NavLink className="nav-link" to={`/`}>
                Home
              </NavLink>
            </Button>
            {publicPages.map((page) =>
              !token ? (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className="menu-button"
                  variant="contained"
                  color="info"
                  sx={{
                    padding: 0,
                  }}>
                  <NavLink className="nav-link" to={`/${page}`}>
                    {page}
                  </NavLink>
                </Button>
              ) : null
            )}
            {privatePages.map((page) =>
              token ? (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  className="menu-button"
                  variant="contained"
                  color="info"
                  sx={{ padding: 0 }}>
                  <NavLink className="nav-link" to={`/${page}`}>
                    {page}
                  </NavLink>
                </Button>
              ) : null
            )}
          </Box>
          {token ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip className="avatar" title="Open settings">
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{
                    width: 40,
                    height: 40,
                    backgroundColor: "#bdbdbd",
                    p: 0,
                    marginTop: "0",
                  }}>
                  {true ? (
                    <Avatar alt={`alt`} src="/static/images/avatar/2.jpg" />
                  ) : null}
                </IconButton>
              </Tooltip>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}>
                {/* <UserMenu handleCloseUserMenu={handleCloseUserMenu} /> */}
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={() => {
                        dispatch(logOut());
                      }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : null}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
// export default ResponsiveAppBar;
