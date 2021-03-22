import React, { useState } from "react";
import Navigaton from './Entry/Navigaton';
import NewEntry from './Entry/NewEntry';
import RightBar from './Display/RightBar/RightBar';
import StrainSelector from './Entry/StrainSelect';
import { Container, Row, Col } from 'react-bootstrap';


// import EntryIcon from './NewUX/FormIcon';
import './App.scss'; //Bootstrap included


const App = props => {
  //inside the brackets is the name of the state reference and then the function on how to change that state

const [strainSelected, setStrain] = useState('');

  return (
    <>
      <Container fluid>
        <Row>
        <StrainSelector 
          setStrain = {e => setStrain(e)}
          strainSelected = {strainSelected}
        
        />  
          <Col xl={8} className="h100">
            {/* <Navigaton /> */}
            <NewEntry 
              strainSelected = {strainSelected}
            />
          </Col>
          <Col xl={4}>
            <RightBar 
              strainSelected = {strainSelected}
            />
            {/* <Form /> */}
          </Col>
        </Row>
      </Container>
  </>
  )
}

export default App;
