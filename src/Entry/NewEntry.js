import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap/';
import ConditionSlider from './ConditionSlider';
import PictureUpload from './upload';
import StrainSelector from './StrainSelect';
import NutesSelector from './NutesSelector';


const divStyle = {
    color: 'white',
};

// const temp = `ie: 78${'\u00b0'}F`;
class NewEntry extends Component {
    constructor(props) {
        super(props)

        this.state = {
            date: new Date().toLocaleDateString(),
            entryDate: '',
            temperature: '',
            humidity: '',
            condition: 3,
            comments: '',
            water: '',
            show: false,
            megacrop: '',
            sweetcandy: ''
            }
        }

    handleShowModal = (event) => {
        this.setState({
            show: !this.state.show
        })
    }

    setEntryCondition = (e) => {
        this.setState({
            condition: e
        })
    };

    setMegacrop = (e) => {
        this.setState({
            megacrop: e.target.value
        })
    }

    handleChange = (evt) => {
        const value = evt.target.value;
        this.setState({
          ...this.state,
          [evt.target.name]: value
        });
      }

      setToday = () => {
          const stateDate = this.state.date;
          this.setState({
              ...this.state,
              entryDate: stateDate
          })
      }

render() {
    const { entryDate, temperature, humidity, condition } = this.state
    const megQuan = this.state.megacrop;

    return (
        <div>
            <Container fluid className="entrybox">
                <h1>New Entry</h1>
                <h2>Observed</h2>
            <Row>
                <Col>
                    <Row>
                        <Col xl={1}>
                        <span className="labels">Date:</span>
                        </Col>
                        <Col xl={3}>
                        <input type="text" value={entryDate} name='entryDate' onChange={this.handleChange} />
                        </Col>
                        <Col xl={3}>
                        <button className="formButton" onClick={this.setToday}>Use Today</button>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={1}>
                            <span className="labels">Temperature:</span>
                        </Col>
                        <Col xl={3}>
                        <input type="text" placeholder="Temp" name="temperature" onChange={this.handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={1}>
                            <span className="labels">Humidity:</span>
                        </Col>
                        <Col xl={3}>
                        <input type="text" placeholder="Humidity" name="humidity" onChange={this.handleChange} />
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={1}>
                            <span className="labels">Condition:</span>
                        </Col>
                        <Col xl={3}>
                        <ConditionSlider
                            setEntryCondition={this.setEntryCondition}
                            currentCondition={condition}
                        />
                        </Col>
                        <Col xl={4}>
                        <span>
                            {
                                {
                                    1 : "Very Bad",
                                    2 : "Poor",
                                    3 : "Average",
                                    4 : "Good",
                                    5 : "Excellent"
                                }[condition]
                            }
                        </span>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={1}>
                            <div className="labels">Comments:</div>
                        </Col>
                        <Col xl={5}>
                            <textarea className="comment-box" placeholder="Comments" name="comments" onChange={this.handleChange} />
                        </Col> 
                    </Row>
        
                <h2>Fed</h2>
                    <Row>
                    <Col xl={1}>
                        <span className="labels">Water:</span>
                    </Col>
                    <Col xl={3}>
                    <input type="text" placeholder="Water" name="water" onChange={this.handleChange} />
                    </Col>
                    </Row>
                    <Row>
                    <Col xl={1}>
                        <span className="labels">Nutrients</span>
                    </Col>
                    <Col xl={5}>
                        <div className="formButton" 
                              onClick={this.handleShowModal}>Add Nutrients</div>
                            </Col>
                            {this.state.show ? 
                                <NutesSelector 
                                    show={this.state.show}
                                    handleClose={this.handleShowModal}
                                    handleChange={this.handleChange}
                                    setMegacrop={this.setMegacrop}
                                    megQuan={this.state.megacrop}
                                >       
                                </NutesSelector> : null}
                            { megQuan ? 
                                <span>megacrop:{megQuan}</span>
                            : null}      
                    </Row>
                </Col> 
            </Row>
            </Container>  
        </div>
    )
    }
};

export default NewEntry;