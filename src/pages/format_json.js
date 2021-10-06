import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

class FormatJSON extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputJson: "",
            outputJson: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ inputJson: event.target.value });
    }
    handleSubmit(event) {
        var data = this.state.inputJson;
        this.setState({ outputJson: data });
        event.preventDefault();
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formatJson.input">
                                <Form.Label>Json Data</Form.Label>
                                <Form.Control as="textarea" rows={15} onChange={this.handleChange} value={this.state.inputJson} placeholder="Paste your json" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formatJson.output">
                                <Form.Label>Formatted Json Data</Form.Label>
                                <Form.Control as="textarea" rows={15} readOnly value={this.state.outputJson} placeholder="Json Output" />
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button variant="primary" type="submit">
                                Process
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default FormatJSON;