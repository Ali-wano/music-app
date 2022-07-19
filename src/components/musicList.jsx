import {useState} from "react"
import {Modal, Button} from "react-bootstrap"
function OpenModal(props) {
    const [show, setShow] = useState(false);
  const playSingleSong = () =>{
    props.songs.map((details) => {
     let song = props.songs.filter((item) => item.id !== details.id )
     props.setIsPlaying(...props.songs)
     console.log(song);
    })
  }
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
         Music Lists
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Music List</Modal.Title>
          </Modal.Header>
          <Modal.Body>{
              props.songs.map((details) =>(
                  <div className="openModal">
                      <div className="modal-wrapper" onClick={playSingleSong}>
                      <img src={details.imageSrc} alt="" srcset="" />
                       <div className="music-information">
                       <p>{details.title}</p>
                        <p>{details.artist}</p>

                       </div>
                      </div>
                  </div>
              ))
              }</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
export default OpenModal