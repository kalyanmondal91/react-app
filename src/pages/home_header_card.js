import React, { Component } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';

class HomeHeaderCard extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col md>
                        <Card>
                            <Card.Body>
                                <Card.Title>Trending</Card.Title>
                                <Card.Text>
                                    <Table responsive borderless size="sm">
                                        <tbody>
                                            {this.props.coins.map((data, index) => (
                                                <tr key={index}>
                                                    <td>{index}</td>
                                                    <td>{data.symbol}</td>
                                                    <td>DOGE</td>
                                                    <td>0.5%</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md>
                        <Card>
                            <Card.Body>
                                <Card.Title>Top Gainers</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md>
                        <Card>
                            <Card.Body>
                                <Card.Title>Recents</Card.Title>
                                <Card.Text>

                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default HomeHeaderCard;