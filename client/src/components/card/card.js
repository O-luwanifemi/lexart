import { Row, Col, Container } from 'react-bootstrap';

import './card.css';

const Card = ({ name, description, price, imgSrc, category, source }) => {
    return (
        <>
            <Container id="container">
                <Row className="row">
                    <Col className="column img_column">
                        <div className="img_block" style={{ width: '150px' }}>
                            <img src={imgSrc} alt={name} width="100%" />
                        </div>
                    </Col>

                    <Col className="column">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <h1>{price}</h1>
                        <div className="catSite_section">
                            <p>{category}</p>
                            <p>{source}</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Card;
