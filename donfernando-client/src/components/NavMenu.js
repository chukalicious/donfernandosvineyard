import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

const NavMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ color: "white" }}
      >
        <MenuIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <Link to="/">
          <MenuItem onClick={handleClose}>Home</MenuItem>
        </Link>
        <Link to="/signup">
          <MenuItem onClick={handleClose}>Join the Club!</MenuItem>
        </Link>
        <Link to="/membershipDetails">
          <MenuItem onClick={handleClose}>Membership Details</MenuItem>
        </Link>
        <Link to="/about">
          <MenuItem onClick={handleClose}>About Us</MenuItem>
        </Link>
        <Link to="/awards">
          <MenuItem onClick={handleClose}>Awards</MenuItem>
        </Link>
      </Menu>
    </div>
  );
};

export default NavMenu;
