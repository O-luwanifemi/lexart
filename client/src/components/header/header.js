import { Navbar, Nav, FormControl, Form, Button } from 'react-bootstrap';

import './header.css';

const Header = ({ selectedValue, handleSubmit, handleChange }) => {
    return (
        <Navbar bg="light" expand="lg" id="header">
            <Navbar.Collapse id="navbarScroll">
                <Nav className="mr-5 my-2 my-lg-2 dropdown_btns">
                    <Form.Select
                        size="lg"
                        name="categorySelect"
                        id="navbarScrollingDropdown"
                        value={selectedValue.categorySelect}
                        onChange={handleChange}
                    >
                        <option value="Categories">Categories</option>
                        <option value="Mobile">Mobile</option>
                        <option value="Refrigerator">Refrigerator</option>
                        <option value="TV">TV</option>
                    </Form.Select>

                    <Form.Select
                        size="lg"
                        name="siteSelect"
                        id="navbarScrollingDropdown"
                        value={selectedValue.siteSelect}
                        onChange={handleChange}
                    >
                        <option value="Site">Site</option>
                        <option value="Mercado Livre">Mercado Livre</option>
                        <option value="Buscape">Buscape</option>
                    </Form.Select>
                </Nav>

                <Form
                    className="d-flex"
                    style={{ width: '400px' }}
                    onSubmit={handleSubmit}
                >
                    <FormControl
                        type="search"
                        placeholder="Type search here"
                        className="mr-5"
                        aria-label="Search"
                        name="searchInputValue"
                        onChange={handleChange}
                        style={{ fontSize: '18px' }}
                    />

                    <Button
                        variant="bg bg-primary text-light"
                        size="lg"
                        type="submit"
                    >
                        Search
                    </Button>
                </Form>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default Header;
