import React from 'react'
import {connect} from 'react-redux'
import * as actions from '../redux/actions'
// Estilos
import { Container, Row, Col, Card, InputGroup, FormControl, Tab, Tabs } from 'react-bootstrap';


const View = (props) => {
  let { updateTask, task, task1, task2 } = props
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
                                            <FormControl
                                              className="Titulo"
                                              name="title"
                                              type="text"
                                              value={task}
                                              onChange={(e) => updateTask(e.target.value)}
                                              />
                                        </InputGroup>
                                    </Card.Header>

                                    <Card.Body>
                                      <Card.Title>Content</Card.Title>
                                      <Card.Text>
                                        <InputGroup>
                                          <FormControl
                                            className="Titulo"
                                            name="content"
                                            type="text"
                                            value={task1}
                                            onChange={(e) => updateTask(e.target.value)}
                                             as="textarea"/>
                                        </InputGroup>
                                      </Card.Text>
                                    </Card.Body>

                                    <Card.Body>
                                      <Card.Title>Autor</Card.Title>
                                      <Card.Text>
                                        <InputGroup>
                                          <FormControl
                                            className="Titulo"
                                            name="autor"
                                            type="text"
                                            value={task2}
                                            onChange={(e) => updateTask(e.target.value)}
                                             as="textarea"/>
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

const mapStateToProps = ({blogRedux}) => {
  const { task, task1, task2 } = blogRedux
  return { task, task1, task2 }
}

export default connect(mapStateToProps, actions)(View);
