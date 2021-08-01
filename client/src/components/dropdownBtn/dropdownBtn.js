import { NavDropdown } from 'react-bootstrap';

import './dropdownBtn.css';

const Dropdown = ({ title, itemOne, itemTwo, itemThree }) => {
    return (
        <NavDropdown title={title} id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">{itemOne}</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action4">{itemTwo}</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">{itemThree}</NavDropdown.Item>
        </NavDropdown>
    );
};

export default Dropdown;
