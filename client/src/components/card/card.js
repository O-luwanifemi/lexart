import { Row, Col, Container, Button } from 'react-bootstrap';

import './card.css';

const Card = ({ name, description, price, imgSrc }) => {
    return (
        <>
            <Container id="container">
                <Row className="row">
                    <Col className="column img_column">
                        <div className="img_block" style={{ width: '150px' }}>
                            <img
                                src={imgSrc}
                                alt="cartoon"
                                width="100%"
                            />
                        </div>
                    </Col>

                    <Col className="column">
                        <h1>{name}</h1>
                        <p>{description}</p>
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
