import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import beautify from 'beautify';

class FormatHTML extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputHtml: "",
            outputHtml: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ inputHtml: event.target.value });
    }
    handleSubmit(event) {
        var data = this.state.inputHtml;
        this.setState({ outputHtml: beautify(data, {format: 'html'}) });
        event.preventDefault();
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formatJson.input">
                                <Form.Label>HTML Data</Form.Label>
                                <Form.Control as="textarea" rows={15} onChange={this.handleChange} value={this.state.inputHtml} placeholder="Paste your HTML" />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formatJson.output">
                                <Form.Label>Formatted HTML Data</Form.Label>
                                <Form.Control as="textarea" rows={15} readOnly value={this.state.outputHtml} placeholder="HTML Output" />
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

export default FormatHTML;