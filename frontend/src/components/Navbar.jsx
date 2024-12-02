import React from "react";
import { AppBar, Toolbar, Typography, Button, Container, IconButton, Menu, MenuItem } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const userId = '123';
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
    const navigate = useNavigate(); // useNavigate hook for programmatic navigation

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        setMobileMenuOpen(false); // Close the menu when clicking outside
    };

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleLogout = () => {
        // Clear session or authentication token
        localStorage.removeItem("userToken"); // Example for local storage, replace with your auth token
        // Optionally, you can clear other session data if needed
        // Redirect to the login page
        navigate("/login"); // Redirect to login after logout
    };

    return (
        <AppBar position="sticky">
            <Container>
                <Toolbar>
                    <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        Ticket Booking
                    </Typography>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ display: { sm: "none", md: "none" } }}
                        onClick={handleMobileMenuToggle}
                    >
                        <MenuIcon />
                    </IconButton>
                    <div style={{ display: "flex", gap: "20px", flexGrow: 1, justifyContent: "flex-end" }}>
                        <Button color="inherit" component={Link} to="/dashboard">
                            Home
                        </Button>
                        <Button color="inherit" component={Link} to="/my-bookings">
                            My Bookings
                        </Button>
                        <Button
                            color="inherit"   // Inherit color from the parent (e.g., text color)
                            component={Link}  // Use Link as the component
                            to={`/profile/${userId}`}  // Specify the path
                            sx={{
                                textTransform: 'none', // Keeps the button text case as is
                                padding: '6px 16px',   // Adjust padding if needed
                            }}
                        >
                            PROFILE
                        </Button>
                        <Button color="inherit" component={Link} to="/admin">
                            Admin Panel
                        </Button>
                        <Button color="inherit" onClick={handleLogout}>
                            Logout
                        </Button>
                    </div>
                </Toolbar>
            </Container>

            {/* Mobile Menu */}
            <Menu
                anchorEl={anchorEl}
                open={mobileMenuOpen}
                onClose={handleMenuClose}
                MenuListProps={{ "aria-labelledby": "menu-button" }}
            >
                <MenuItem component={Link} to="/dashboard" onClick={handleMenuClose}>
                    Home
                </MenuItem>
                <MenuItem component={Link} to="/my-bookings" onClick={handleMenuClose}>
                    My Bookings
                </MenuItem>
                <MenuItem component={Link} to="/profile" onClick={handleMenuClose}>
                    Profile
                </MenuItem>
                <MenuItem component={Link} to="/admin" onClick={handleMenuClose}>
                    Admin Panel
                </MenuItem>
                <MenuItem
                    onClick={() => {
                        handleLogout();
                        handleMenuClose(); // Close the menu after logging out
                    }}
                >
                    Logout
                </MenuItem>
            </Menu>
        </AppBar>
    );
};

export default Navbar;
