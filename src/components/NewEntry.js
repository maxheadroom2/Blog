import React from 'react'
import { Container, Row, Col, Card, InputGroup, FormControl, Tab, Tabs } from 'react-bootstrap';

const View = () => {
    return(
        <React.Fragment>
        <br/>
        <br/>
            <Container>
                <Row>
                    <Col>
                        <Card bg='dark' text='white' className='w-sh'>
                            <Card.Body>
                                <Card.Title>
                                    <h4>Write your post</h4>
                                </Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
        <br/>
                <Row>
                    <Col>
                        <Container>
                            <Row>
                            <Col>
                                <Card bg="dark" text="white" className='w-sh'>
                                    <Card.Header>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Prepend>
                                              <InputGroup.Text>Title</InputGroup.Text>
                                            </InputGroup.Prepend>
                                            <FormControl />
                                        </InputGroup>
                                    </Card.Header>
                                    <Card.Body>
                                      <Card.Title>Content</Card.Title>
                                      <Card.Text>
                                        <InputGroup>
                                          <FormControl as="textarea"/>
                                        </InputGroup>
                                      </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col>
                        <Container>
                            <Row>
                            <Col>
                                <Card bg='dark' text='white' className='w-sh'>
                                    <Card.Header>
                                        Pick an Image
                                    </Card.Header>
                                    <Card.Body>
                                        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                            <Tab eventKey="planets" title="Planets">
                                              <hr/>
                                              <p>
                                                  Here are images of Planets
                                              </p>
                                            </Tab>
                                            <Tab eventKey="moons" title="Moons">
                                              <hr/>
                                              <p>
                                                  Here are images of Moons
                                              </p>
                                            </Tab>
                                            <Tab eventKey="blacHoles" title="Black Holes">
                                              <hr/>
                                              <p>
                                                  Here are images of Black Holes
                                              </p>
                                            </Tab>
                                        </Tabs>
                                    </Card.Body>
                                </Card>
                            </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
            </Container>
        </React.Fragment>
    )
}

export default View