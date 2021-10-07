import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import beautify from 'beautify';

class FormatJS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputJs: "",
            outputJs: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ inputJs: event.target.value });
    }
    handleSubmit(event) {
        var data = this.state.inputJs;
        this.setState({ outputJs: beautify(data, {format: 'js'}) });
        event.preventDefault();
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formatJson.input">
                                <Form.Label>JS Data</Form.Label>
                                <Form.Control as="textarea" rows={15} onChange={this.handleChange} value={this.state.inputJs} placeholder="Paste your JS" />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formatJson.output">
                                <Form.Label>Formatted JS Data</Form.Label>
                                <Form.Control as="textarea" rows={15} readOnly value={this.state.outputJs} placeholder="JS Output" />
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

export default FormatJS;