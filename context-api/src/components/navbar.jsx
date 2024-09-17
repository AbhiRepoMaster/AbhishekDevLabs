import { useContext } from 'react';
import { ThemeContext } from '../context/themeContex';
import Profile from './Profile';

const Navbar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <nav
            style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "86%",
                height: "9vh",
                backgroundColor: theme === "light" ? "#f9f9f8" : "#1f1f1f",
                color: theme === "light" ? "#333" : "#f1f1f1",
                padding: "0 5%",
                boxShadow: theme === "light" ? "0 4px 10px rgba(0, 0, 0, 0.1)" : "0 4px 10px rgba(255, 255, 255, 0.1)",
                borderRadius: "15px 15px 15px 15px",
                position: "sticky",
                top: 10,
                zIndex: 1000,
            }}
        >
            {/* Logo */}
            <h1
                style={{
                    fontSize: "1.8rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "color 0.3s ease",
                }}
                onMouseOver={(e) => e.target.style.color = theme === "light" ? "#007BFF" : "#FF6347"}
                onMouseOut={(e) => e.target.style.color = theme === "light" ? "#333" : "#f1f1f1"}
            >
                LOGO
            </h1>

            {/* Profile Component */}
            <Profile />

            {/* Toggle Theme Button */}
            <button
                onClick={toggleTheme}
                style={{
                    padding: "10px 20px",
                    fontSize: "1rem",
                    backgroundColor: theme === "light" ? "#007BFF" : "#FF6347",
                    color: "#fff",
                    border: "none",
                    borderRadius: "30px",
                    cursor: "pointer",
                    transition: "background-color 0.3s ease",
                    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.2)",
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = theme === "light" ? "#0056b3" : "#FF4500"}
                onMouseOut={(e) => e.target.style.backgroundColor = theme === "light" ? "#007BFF" : "#FF6347"}
            >
                {theme === "light" ? "Dark Mode" : "Light Mode"}
            </button>
        </nav>
    );
};

export default Navbar;
