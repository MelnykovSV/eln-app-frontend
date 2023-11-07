import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import { Logo } from "../../ui";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { logOut, getCurrentUser } from "../../redux/auth/operations";
import { getIsLoggedIn, getUserName } from "../../redux/auth/authSlice";
import {
  getCurrentSchemeId,
  getCurrentStage,
} from "../../redux/schemes/schemesSlice";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import {
  getSchemesState,
  updateSchemesState,
  clearSchemesData,
} from "../../redux/schemes/schemesSlice";

const settings = ["Logout"];

export function ResponsiveAppBar() {
  const location = useLocation();
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const currentSchemeId = useAppSelector(getCurrentSchemeId);
  const currentStage = useAppSelector(getCurrentStage);
  const userName = useAppSelector(getUserName);
  const dispatch = useAppDispatch();
  const [actualUserName, setActualUserName] = useState(userName);
  const locationState = useAppSelector(getSchemesState);

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCurrentUser());
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggedIn]);
  useEffect(() => {
    setActualUserName(userName);
  }, [userName]);

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

          {isLoggedIn ? (
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
                <MenuItem key={"schemes"} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">
                    <NavLink
                      to={locationState || "/schemes"}
                      className="nav-link">
                      Schemes
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem
                  key={"scheme"}
                  onClick={handleCloseNavMenu}
                  disabled={currentSchemeId ? false : true}>
                  <Typography textAlign="center">
                    <NavLink
                      to={`/scheme/${currentSchemeId}`}
                      className="nav-link"
                      onClick={() => {
                        if (location.pathname === "/schemes") {
                          dispatch(updateSchemesState(location));
                        }
                      }}>
                      Current scheme
                    </NavLink>
                  </Typography>
                </MenuItem>
                <MenuItem
                  key={"stage"}
                  onClick={handleCloseNavMenu}
                  disabled={currentStage._id && currentSchemeId ? false : true}>
                  <Typography textAlign="center">
                    <NavLink
                      to={`/stage/${currentSchemeId}/${currentStage._id}`}
                      className="nav-link"
                      onClick={() => {
                        if (location.pathname === "/schemes") {
                          dispatch(updateSchemesState(location));
                        }
                      }}>
                      Stage
                    </NavLink>
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          ) : null}

          <Box sx={{ display: { xs: "flex", md: "none" }, mr: 2, flexGrow: 1 }}>
            {" "}
            <Logo />
          </Box>
          {isLoggedIn ? (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: "20px",
                alignItems: "center",
                justifyContent: "center",
              }}>
              <MenuItem
                key={"schemes"}
                sx={{ padding: 0 }}
                onClick={handleCloseNavMenu}>
                <Typography textAlign="center">
                  <NavLink
                    className="nav-link"
                    to={locationState || "/schemes"}>
                    Schemes
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem
                key={"scheme"}
                sx={{ padding: 0 }}
                onClick={handleCloseNavMenu}
                disabled={currentSchemeId ? false : true}>
                <Typography textAlign="center">
                  <NavLink
                    className="nav-link"
                    to={`/scheme/${currentSchemeId}`}
                    onClick={() => {
                      if (location.pathname === "/schemes") {
                        dispatch(updateSchemesState(location));
                      }
                    }}>
                    Current scheme
                  </NavLink>
                </Typography>
              </MenuItem>
              <MenuItem
                key={"stage"}
                sx={{ padding: 0 }}
                onClick={handleCloseNavMenu}
                disabled={currentStage._id && currentSchemeId ? false : true}>
                <Typography textAlign="center">
                  <NavLink
                    className="nav-link"
                    to={`/stage/${currentSchemeId}/${currentStage._id}`}
                    onClick={() => {
                      if (location.pathname === "/schemes") {
                        dispatch(updateSchemesState(location));
                      }
                    }}>
                    Stage
                  </NavLink>
                </Typography>
              </MenuItem>
            </Box>
          ) : null}

          {isLoggedIn ? (
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip className="avatar" title="Open settings">
                <div>
                  <p>{actualUserName}</p>
                  <IconButton
                    onClick={handleOpenUserMenu}
                    className="icon-button"
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundColor: "#bdbdbd",
                      p: 0,
                      marginTop: "0",
                    }}>
                    <span> {actualUserName?.split("")[0] || ""}</span>
                  </IconButton>
                </div>
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
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography
                      textAlign="center"
                      onClick={async () => {
                        await dispatch(logOut());
                        dispatch(clearSchemesData());
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
