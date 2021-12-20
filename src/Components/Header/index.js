import { useEffect } from "react";
import style from "./style.module.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useTheme } from "../../Context/ThemeContext";

function Header() {
  const { theme, setTheme, setDefaultTheme, togClass, setTogClass } =
    useTheme();

  useEffect(() => {
    setTheme(localStorage.getItem("theme"));
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme, setTogClass, setTheme]);

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setDefaultTheme("theme-light");
      setTogClass("light");
    } else {
      setDefaultTheme("theme-dark");
      setTogClass("dark");
    }
  };

  return (
    <div>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Brand href='/' className={style.header}>
            Keep Note
          </Navbar.Brand>
          <Nav>
            <div className={style.containerToggle}>
              {togClass === "light" ? (
                <input
                  type='checkbox'
                  id='toggle'
                  className={style.toggleCheckbox}
                  onClick={handleOnClick}
                  checked
                />
              ) : (
                <input
                  type='checkbox'
                  id='toggle'
                  className={style.toggleCheckbox}
                  onClick={handleOnClick}
                />
              )}
              <label htmlFor='toggle' className={style.toggleLabel}></label>
            </div>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
