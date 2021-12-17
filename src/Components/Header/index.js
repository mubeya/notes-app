import { useEffect, useState } from "react";
import style from "./style.module.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import { setTheme } from "../../theme";

function Header() {
  const [togClass, setTogClass] = useState("dark");
  let theme = localStorage.getItem("theme");

  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setTogClass("light");
    } else {
      setTheme("theme-dark");
      setTogClass("dark");
    }
  };

  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTogClass("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTogClass("light");
    }
  }, [theme]);

  return (
    <div>
      <Navbar collapseOnSelect expand='lg'>
        <Container>
          <Navbar.Brand href='#home' className={style.header}>
            Keep Note
          </Navbar.Brand>
          <Nav>
            <Nav.Link href='#features'>
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
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
