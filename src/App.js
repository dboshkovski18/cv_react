import './App.css';
import React from "react";
import pic from "./cv_logo.jpeg";
import {Accordion, Container} from "react-bootstrap";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container className="bg-light shadow text-center">
                <img className="mt-5 rounded-circle shadow" src={pic} width="200px" height="200px"/>
                <div className="row">

                    <div className="col-xs-12">
                        <h1 className="display-4 my-2">Damjan Boshkovski</h1>
                        <hr className="w-25 mx-auto my-3 border "/>
                    </div>
                    <div className="col-xs-12">
                        <h4 className="badge bg-info text-muted">Skopje, Macedonia</h4>
                    </div>
                    <div className="col-xs-6 mx-auto mt-1">
                        <p className="text-muted fw-lighter">
                            Passionate student in his final student years looking forward for an opportunity to work
                            on real
                            projects, and learn from more experienced people!
                        </p>

                        <p className="badge bg-secondary">
                            Find out more about me!
                        </p>

                    </div>

                </div>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 mx-auto col-md-7">
                        <div className="card mt-2 mx-auto shadow">
                            <div className="card-body ">
                                <h4 className="card-title">Contact</h4>
                                <p className="card-text text-muted">damjanx34@gmail.com</p>
                                <p className="card-text text-muted">075/447-837</p>
                                <a className="btn btn-outline-secondary d-block"
                                   href="https://github.com/dboshkovski18">Github</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-xs-12 col-sm-12 mx-auto col-md-6">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey={0}>
                                <Accordion.Header>
                                    Education and Training
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-group">
                                        <li className="list-group-item">High School Diploma at <br/><span
                                            className="fw-lighter">SUGS Josip Broz Tito</span>
                                        </li>
                                        <li className="list-group-item">EESTEC Certificate for <br/><span
                                            className="fw-lighter">Angular course finished</span>
                                        </li>
                                        <li className="list-group-item active">Bachelor Degree at <br/><span
                                            className="fw-lighter">Faculty of Computer Science and Engineering<br/><span
                                            className="text-white fw-lighter">(2019-current)</span></span>
                                        </li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey={1}>
                                <Accordion.Header>
                                    Languages
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-group">
                                        <li className="list-group-item fw-lighter">Macedonian</li>
                                        <li className="list-group-item active fw-lighter">English</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey={2}>
                                <Accordion.Header className="accordion-header" id="flush-headingTwo">
                                    Skills
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-group shadow text-muted">
                                        <li className="list-group-item active">Vuejs</li>
                                        <li className="list-group-item list-group-item-light">React</li>
                                        <li className="list-group-item list-group-item-dark">Angular</li>
                                        <li className="list-group-item list-group-item-light">Javascript</li>
                                        <li className="list-group-item list-group-item-dark">JQuery</li>
                                        <li className="list-group-item list-group-item-light">CSS</li>
                                        <li className="list-group-item list-group-item-dark">GIT</li>
                                        <li className="list-group-item list-group-item-light">Python</li>
                                        <li className="list-group-item list-group-item-dark">ASP .NET</li>
                                        <li className="list-group-item list-group-item-light">Java</li>
                                        <li className="list-group-item list-group-item-dark">C#</li>
                                        <li className="list-group-item list-group-item-light">Spring Boot</li>
                                        <li className="list-group-item list-group-item-dark">SQL</li>
                                         <li className="list-group-item list-group-item-light">Docker</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey={3}>
                                <Accordion.Header>
                                    Hobbies and interests
                                </Accordion.Header>
                                <Accordion.Body>
                                    <ul className="list-group shadow text-muted">
                                        <li className="list-group-item list-group-item-dark">Doing sports</li>
                                        <li className="list-group-item list-group-item-light">Playing the
                                            guitar
                                        </li>
                                        <li className="list-group-item list-group-item-dark">Travelling</li>
                                        <li className="list-group-item list-group-item-light">Listening to
                                            music
                                        </li>
                                        <li className="list-group-item list-group-item-dark">Hanging out with
                                            friends
                                        </li>
                                        <li className="list-group-item list-group-item-light">Walking my dog
                                        </li>
                                        <li className="list-group-item list-group-item-dark">Cooking</li>
                                    </ul>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
                <div className="row mt-3">
                    <p className="text-muted">
                        Thanks for visiting,<br/>
                        I hope you are planning to contact me!
                    </p>
                </div>
            </Container>


    )
    }


}

export default App;
