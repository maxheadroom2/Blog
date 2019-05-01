import React from 'react'
import { Nav, Container, Col, Row, ListGroup, Card, Tab } from 'react-bootstrap'
import { Route, Link } from 'react-router-dom'

const Home = () => {
    return(
        <React.Fragment>
            <br/>
            <br/>
            <Container className='hide-on-sm'>
                <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
                    <Row>
                      <Col sm={3}>
                        <ListGroup className='w-sh'>
                        <ListGroup.Item variant="info">
                          Entries
                        </ListGroup.Item>
                          <ListGroup.Item action href="#link1">
                            Link 1
                          </ListGroup.Item>
                          <ListGroup.Item action href="#link2">
                            Link 2
                          </ListGroup.Item>
                        </ListGroup>
                      </Col>
                      <Col sm={9}>
                        <Tab.Content>
                          <Tab.Pane eventKey="#link1">
                            <Card className='w-sh'  bg='dark' text='white'>
                              <Card.Header>Post Title</Card.Header>
                              <Card.Body>
                                <Card.Title>Longer post Title</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, libero cubilia senectus penatibus nulla pretium nascetur morbi, nec ornare himenaeos inceptos egestas natoque. Fermentum vel ultricies tempor gravida in ad interdum lectus tincidunt, non ac turpis sollicitudin elementum egestas nisl conubia faucibus, quam tellus facilisi potenti fringilla integer ullamcorper maecenas. Sollicitudin lectus vehicula mus curae erat potenti scelerisque venenatis dapibus vitae, odio ut ultrices rhoncus quam justo montes aliquam a aliquet, nunc neque magnis eros non habitasse pulvinar tellus donec.

Senectus tempus at condimentum netus scelerisque commodo, nisl nullam ad aliquam metus volutpat habitasse, integer cursus cum curae ligula. Imperdiet mus proin cubilia penatibus est leo rutrum molestie senectus ut duis hac nisl, pellentesque libero faucibus pharetra condimentum phasellus eros etiam sociosqu himenaeos et. Condimentum habitasse tellus mollis morbi iaculis augue lacus mauris inceptos rutrum vestibulum, feugiat id ullamcorper ad vehicula luctus nec sociosqu pellentesque nulla cras, ultricies netus laoreet placerat nisi vel eleifend porta justo malesuada.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Tab.Pane>
                          <Tab.Pane eventKey="#link2">
                          <Card className='w-sh'  bg='dark' text='white'>
                              <Card.Header>Post Title 2</Card.Header>
                              <Card.Body>
                                <Card.Title>Longer post Title 2</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit, libero cubilia senectus penatibus nulla pretium nascetur morbi, nec ornare himenaeos inceptos egestas natoque. Fermentum vel ultricies tempor gravida in ad interdum lectus tincidunt, non ac turpis sollicitudin elementum egestas nisl conubia faucibus, quam tellus facilisi potenti fringilla integer ullamcorper maecenas. Sollicitudin lectus vehicula mus curae erat potenti scelerisque venenatis dapibus vitae, odio ut ultrices rhoncus quam justo montes aliquam a aliquet, nunc neque magnis eros non habitasse pulvinar tellus donec.

Senectus tempus at condimentum netus scelerisque commodo, nisl nullam ad aliquam metus volutpat habitasse, integer cursus cum curae ligula. Imperdiet mus proin cubilia penatibus est leo rutrum molestie senectus ut duis hac nisl, pellentesque libero faucibus pharetra condimentum phasellus eros etiam sociosqu himenaeos et. Condimentum habitasse tellus mollis morbi iaculis augue lacus mauris inceptos rutrum vestibulum, feugiat id ullamcorper ad vehicula luctus nec sociosqu pellentesque nulla cras, ultricies netus laoreet placerat nisi vel eleifend porta justo malesuada.
                                </Card.Text>
                              </Card.Body>
                            </Card>
                          </Tab.Pane>
                        </Tab.Content>
                      </Col>
                    </Row>
                </Tab.Container>
            </Container>
        </React.Fragment>
    )
}

export default Home