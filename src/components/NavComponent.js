import React from "react";
import "../assets/css/NavComponent.css";
const NavComponent = () => {
  return (
    <div className="button-contianer">
      <button>Home</button>
      <button>Destination</button>
      <button>Blog</button>
      <button>Contact</button>

      <div className="login-button">
        <button>LOGIN</button>
        <button
          style={{
            backgroundColor: "white",
            color: "#03496C",
            borderRadius: "10px",
          }}
        >
          SIGNUP
        </button>
      </div>
    </div>
  );
};

export default NavComponent;
