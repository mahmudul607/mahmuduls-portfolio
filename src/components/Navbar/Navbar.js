
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Header from '../../components/Header/Header'
import  './Navabr.css'
const options = [

  {
    
    scroll: true,
    backdrop: true,
  }
];

function OffCanvasExample({ handleClose, toggleShow, show, ...props }) {
  

  return (
    <>
      <Button  onClick={toggleShow} className="me-2">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h7" />
        </svg>
      </Button>
      <Offcanvas className='w-[250px]' show={show} onHide={handleClose} {...props}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
                <Header></Header>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

const  Navbar =({toggleShow, handleClose, show})=> {
  return (
    <>
     


        {options.map((props, idx) => (
        <OffCanvasExample key={idx} {...props} show={show} handleClose={handleClose} toggleShow={toggleShow}/>
      ))}
     
    </>
  );
}

export default Navbar;