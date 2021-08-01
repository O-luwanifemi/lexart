import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';

import './header.css';
import Dropdown from '../dropdownBtn/dropdownBtn';

const Header = () => {
    return (
        <Navbar bg="light" expand="lg" id="header">
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-5 my-2 my-lg-2 dropdown_btns">
                    <Dropdown
                        title="Categories"
                        itemOne="Mobile"
                        itemTwo="Refrigerator"
                        itemThree="TV"
                    />

                    <Dropdown
                        title="Site"
                        itemOne="Mobile"
                        itemTwo="Mercado Livre"
                        itemThree="Buscape"
                    />
                </Nav>

                <Form className="d-flex" style={{ width: '400px' }}>
                    <FormControl
                        type="search"
                        placeholder="Type search here"
                        className="mr-5"
                        aria-label="Search"
                        style={{ fontSize: '18px' }}
                    />
                    <Button variant="bg bg-primary text-light" size="lg">
                        Search
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
