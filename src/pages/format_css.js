import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import beautify from 'beautify';

class FormatCSS extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCss: "",
            outputCss: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ inputCss: event.target.value });
    }
    handleSubmit(event) {
        var data = this.state.inputCss;
        this.setState({ outputCss: beautify(data, {format: 'css'}) });
        event.preventDefault();
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formatJson.input">
                                <Form.Label>CSS Data</Form.Label>
                                <Form.Control as="textarea" rows={15} onChange={this.handleChange} value={this.state.inputCss} placeholder="Paste your CSS" />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formatJson.output">
                                <Form.Label>Formatted CSS Data</Form.Label>
                                <Form.Control as="textarea" rows={15} readOnly value={this.state.outputCss} placeholder="CSS Output" />
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

export default FormatCSS;