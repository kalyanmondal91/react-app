import React, { Component } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import format from 'xml-formatter';

class FormatXML extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputXml: "",
            outputXml: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({ inputXml: event.target.value });
    }
    handleSubmit(event) {
        this.setState({disabled: true});
        var option = {
            indentation: '\t',
            filter: (node) => node.type !== 'Comment',
            collapseContent: true,
            lineSeparator: '\n'
        };
        var data = this.state.inputXml;
        this.setState({ outputXml: format(data, option) });
        event.preventDefault();
    }
    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSubmit}>
                    <Row>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formatXml.input">
                                <Form.Label>XML Data</Form.Label>
                                <Form.Control as="textarea" rows={15} onChange={this.handleChange} value={this.state.inputXml} placeholder="Paste your XML" />
                            </Form.Group>
                        </Col>
                        <Col md>
                            <Form.Group className="mb-3" controlId="formatXml.output">
                                <Form.Label>Formatted XML Data</Form.Label>
                                <Form.Control as="textarea" rows={15} readOnly value={this.state.outputXml} placeholder="XML Output" />
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

export default FormatXML;