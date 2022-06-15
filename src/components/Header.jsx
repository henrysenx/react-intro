import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import "./header.scss";

const Header = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const [size, setSize] = useState({
    width: undefined,
    height: undefined,
  });

  const menuToggleHandler = () => {
    setMenuOpen(!menuOpen);
  };

  // componentDidMount and componentWillUnmount
  useEffect(() => {
    const handleReSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleReSize);

    return () => {
      window.removeEventListener("resize", handleReSize);
    };
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const ctaClickHandler = () => {
    navigate("/conclusion");
  };

  return (
    <header className="header">
      <div className="header_content">
        <h2 className="header_content_logo">Navbar</h2>
        <nav className={`header_content_nav ${menuOpen ? "isMenu" : ""}`}>
          <ul>
            <li>
              <Link to="/">Task Manager</Link>
            </li>
            <li>
              <Link to="/calculator">Simple Calculator</Link>
            </li>
          </ul>
          <button onClick={ctaClickHandler}>CTA Page</button>
        </nav>
        <div className="header_content_toggle">
          {menuOpen ? (
            <BiMenuAltRight onClick={menuToggleHandler} />
          ) : (
            <AiOutlineClose onClick={menuToggleHandler} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
