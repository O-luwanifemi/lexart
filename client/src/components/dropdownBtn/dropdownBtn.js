import { NavDropdown, Form } from 'react-bootstrap';

import './dropdownBtn.css';

const Dropdown = ({ title, itemOne, itemTwo, itemThree }) => {
    return (
        // <NavDropdown title={title} id="navbarScrollingDropdown">
        //     <NavDropdown.Item href="#action3">{itemOne}</NavDropdown.Item>
        //     <NavDropdown.Divider />
        //     <NavDropdown.Item href="#action4">{itemTwo}</NavDropdown.Item>
        //     <NavDropdown.Divider />
        //     <NavDropdown.Item href="#action5">{itemThree}</NavDropdown.Item>
        // </NavDropdown>
        <Form.Select size="lg" id="navbarScrollingDropdown">
            <option>{title}</option>
            <option>{itemOne}</option>
            <option>{itemTwo}</option>
            <option>{itemThree}</option>
        </Form.Select>
    );
};

export default Dropdown;
