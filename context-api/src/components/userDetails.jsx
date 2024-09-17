import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";
import { ThemeContext } from '../context/themeContex';

const UserDetails = () => {
    const { user, fetchUserData } = useContext(UserContext);
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <section
            style={{
                //display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "auto",
                maxWidth: "600px",
                padding: "40px",
                backgroundColor: theme === "light" ? "#f9f9f9" : "#2c2c2c",
                color: theme === "light" ? "#333" : "#f1f1f1",
                borderRadius: "15px",
                boxShadow: theme === "light" ? "0 4px 12px rgba(0, 0, 0, 0.1)" : "0 4px 12px rgba(255, 255, 255, 0.1)",
                textAlign: "center",
                transition: "all 0.3s ease",
                marginTop: "19px"
            }}
        >
            {user ? (
                <>
                    <h1 style={{ fontSize: "1.8rem", marginBottom: "20px" }}>User Details</h1>
                    <p style={{ fontSize: "1.2rem" }}><strong>User ID:</strong> {user.id}</p>
                    <p style={{ fontSize: "1.2rem" }}><strong>Name:</strong> {user.name}</p>
                    <p style={{ fontSize: "1.2rem" }}><strong>Email:</strong> {user.email}</p>
                    <p style={{ fontSize: "1.2rem" }}><strong>Phone:</strong> {user.phone}</p>
                    <button
                        onClick={() => fetchUserData(Math.floor(Math.random() * 10) + 1)}
                        style={{
                            marginTop: "20px",
                            padding: "10px 20px",
                            fontSize: "1rem",
                            backgroundColor: theme === "light" ? "#007BFF" : "#FF7F50",
                            color: "#fff",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseOver={(e) => e.target.style.backgroundColor = theme === "light" ? "#0056b3" : "#FF6347"}
                        onMouseOut={(e) => e.target.style.backgroundColor = theme === "light" ? "#007BFF" : "#FF7F50"}
                    >
                        Fetch Another User
                    </button>
                </>
            ) : (
                <span style={{ fontSize: "1.2rem" }}>User not found!</span>
            )}
        </section>
    );
};

export default UserDetails;
