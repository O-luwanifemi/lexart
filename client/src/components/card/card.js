import { Row, Col, Container, Button } from 'react-bootstrap';

import './card.css';

const Card = ({ primaryText, secondaryText, price }) => {
    return (
        <>
            <Container id="container">
                <Row className="row">
                    <Col className="column img_column">
                        <div className="img_block" style={{ width: '150px' }}>
                            <img
                                src="https://cdn.pixabay.com/photo/2021/01/29/08/10/musician-5960112_960_720.jpg"
                                alt="cartoon"
                                width="100%"
                            />
                        </div>
                    </Col>

                    <Col className="column">
                        <h1>{primaryText}</h1>
                        <p>{secondaryText}</p>
                        <h3>{price}</h3>
                    </Col>

                    <Col className="column">
                        <Button
                            className="button"
                            variant="bg bg-primary text-light"
                            size="lg"
                        >
                            Search the web
                        </Button>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Card;
