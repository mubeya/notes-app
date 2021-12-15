import { useState } from "react";
import { useNotes } from "../../Context/NotesContext";
import "bootstrap/dist/css/bootstrap.min.css";
import style from "./style.module.css";
import { Collapse, Container, Row, Col } from "react-bootstrap";

function Form() {
  const { newNotes, setNewNotes, notes, setNotes } = useNotes();
  const [open, setOpen] = useState(false); //Formun açılıp kapanır yapısı için

  const handleChangeTitle = (e) => {
    e.preventDefault();
    setNewNotes({ ...newNotes, [e.target.name]: e.target.value }); // gelen kayıtları state ile alıp değişkenlere atadık
  };

  const handleChangeNote = (e) => {
    e.preventDefault();
    setNewNotes({ ...newNotes, [e.target.name]: e.target.value }); // gelen kayıtları state ile alıp değişkenlere atadık
  };

  const handleSubmit = (e) => {
    if (newNotes.title === "" && newNotes.note === "") {
      return alert("The note cannot be saved as blank.");
    } else {
      setNotes([...notes, newNotes]);
      setNewNotes({
        id: notes.length + 1,
        title: "",
        note: "",
        createdAt: new Date().toLocaleString("en-GB"),
      });
      setOpen(false);
      e.preventDefault();
    }
  };

  localStorage.setItem("notes", JSON.stringify(notes));

  return (
    <Container className={style.main}>
      <Row className='justify-content-md-center'>
        <Col xs={12} md={8}>
          <form onSubmit={handleSubmit} className={style.form}>
            <div>
              <input
                type='text'
                name='title'
                onChange={handleChangeTitle}
                className={style.title}
                onClick={() => setOpen(true)}
                placeholder='Title'
                value={newNotes.title}
              />
            </div>
            <Collapse in={open}>
              <textarea
                type='text'
                name='note'
                onChange={handleChangeNote}
                className={style.noteInput}
                placeholder='Take a note..'
                value={newNotes.note}
              />
            </Collapse>
            <Collapse in={open}>
              <input type='submit' value='Submit' className={style.submitBtn} />
            </Collapse>
          </form>
        </Col>
      </Row>
    </Container>
  );
}

export default Form;
