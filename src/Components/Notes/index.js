import { useNotes } from "../../Context/NotesContext";
import { Container, Row, Col } from "react-bootstrap";
import style from "./style.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function Notes() {
  const { notes, setNotes } = useNotes();

  const handleDelete = (index) => {
    const afterDeleteNotes = notes.filter((note) => note.id !== index);
    //herhangi bir not silindiğinde diğer notların indexlerini yeniden sıralıyoruz
    afterDeleteNotes.map((everynotes, index) => {
      return (everynotes.id = index);
    });
    setNotes(afterDeleteNotes);
    localStorage.setItem("notes", JSON.stringify(afterDeleteNotes));
    return afterDeleteNotes;
  };

  const handleUpdateTitle = (e, index) => {
    e.preventDefault();
    const changedNewNotes = [...notes];
    changedNewNotes[index] = {
      id: index,
      [e.target.title]: e.target.textContent,
      note: changedNewNotes[index].note,
      createdAt: new Date().toLocaleString("en-GB"),
    };
    setNotes(changedNewNotes);
    localStorage.setItem("notes", JSON.stringify(changedNewNotes));
    // e.target.style.backgroundColor = "#var(--dark-background) !important"; //texti editledikten sonra arka planı eski rengine çeviriyoruz
  };

  const handleUpdateNote = (e, index) => {
    e.preventDefault();
    const changedNewNotes = [...notes];
    changedNewNotes[index] = {
      id: index,
      title: changedNewNotes[index].title,
      [e.target.title]: e.target.textContent,
      createdAt: new Date().toLocaleString("en-GB"),
    };
    setNotes(changedNewNotes);
    localStorage.setItem("notes", JSON.stringify(changedNewNotes));
    // e.target.style.background = `var(--dark-background) !important;`;
  };

  // const handleFocus = (e) => {
  //   e.target.style.background = "#5d8d972a"; //texi editlerken arka plan rengini değiştiriyoruz.
  //   e.target.style.outline = "none";
  // };

  return (
    <Container>
      <Row md={6} lg={4} className={style.noteMain}>
        {localStorage.getItem("notes") &&
          JSON.parse(localStorage.getItem("notes")).map((notem, index, arr) => (
            <Col key={index} className={style.noteArea}>
              <div className={style.noteDate}>
                <p>{arr[arr.length - 1 - index].createdAt}</p>
                <div>
                  <FontAwesomeIcon
                    icon={faTrash}
                    className={style.deleteBtn}
                    onClick={() => handleDelete(arr.length - 1 - index)}
                    data-toggle='tooltip'
                    data-placement='top'
                    title='Delete'
                  />
                </div>
              </div>
              {/* Son girilen note ilk sırada yazsın diye indexi bu şekilde kullandık */}
              <p
                contentEditable='true'
                className={style.noteTextTitle}
                title='title'
                suppressContentEditableWarning={true}
                onBlur={(e) => handleUpdateTitle(e, arr.length - 1 - index)}
                //onFocus={(e) => handleFocus(e)}
                defaultValue={arr[arr.length - 1 - index].title}>
                {arr[arr.length - 1 - index].title}
              </p>
              <p
                className={style.noteTextNote}
                contentEditable='true'
                title='note'
                suppressContentEditableWarning={true}
                onBlur={(e) => handleUpdateNote(e, arr.length - 1 - index)}
                // onFocus={(e) => handleFocus(e)}
                defaultValue={arr[arr.length - 1 - index].note}>
                {arr[arr.length - 1 - index].note}
              </p>

              {/* <textarea
                className={style.noteTextTitle}
                contentEditable='true'
                title='title'
                suppressContentEditableWarning={true}
                onBlur={(e) => handleUpdateTitle(e, arr.length - 1 - index)}
                onFocus={(e) => handleFocusNote(e)}
                data-role='none'
                defaultValue={arr[arr.length - 1 - index].title}></textarea>
              <textarea
                className={style.noteTextNote}
                contentEditable='true'
                title='note'
                suppressContentEditableWarning={true}
                onBlur={(e) => handleUpdateNote(e, arr.length - 1 - index)}
                onFocus={(e) => handleFocusNote(e)}
                defaultValue={arr[arr.length - 1 - index].note}></textarea> */}
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default Notes;
