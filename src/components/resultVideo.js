import React, { Component } from 'react';
import {Navbar, Form, Button, FormControl, Container} from 'react-bootstrap';

export default class ResultVideo extends Component {
  render() {
    return (
      <div>  
          <Navbar bg="light"style={{padding: '10px'}}>
            <Container fluid>
                <Form className="d-flex" onSubmit={this.props.onSubmit}>
                    <FormControl
                    type="search"
                    onChange={(e) => this.props.changeValue(e)}
                    placeholder="Search videos"
                    aria-label="Search"
                    style={{width: '52.5vw'}}
                    />
                    <Button variant="outline-success" onClick={this.props.onSubmit} className="btn-ok">Search</Button>
                </Form>
            </Container>
            </Navbar>
      </div>
    );
  }
}
