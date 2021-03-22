import React, { Component } from 'react';
import LastFeed from './LastFeed';
import { Container, Row, Col } from 'react-bootstrap/';
import seedling from './../../img/plantstage/seedling.png';
import { Textfit } from 'react-textfit';


const CurrentGrow = (props) => {
    return (
        <div>
        <Container className="current-grow" fluid>
        <h2> {props.strainSelected} </h2>
            <Row className="plant-stats">

                <Col className="stat-sections">
                    <Row className="stats-label">
                        <Textfit mode="single">Planted On</Textfit>
                    </Row>
                    <Row className="stats">
                        <Textfit mode="single">12/4/2020</Textfit>
                    </Row>
                </Col>

                <Col className="stat-sections">
                    <Row className="stats-label">
                    <Textfit mode="single">Variety</Textfit>
                    </Row>
                    <Row className="stats">
                        <Textfit mode="single">Mostly Sativa</Textfit>
                    </Row>
                </Col>

                <Col className="stat-sections">
                    <Row className="stats-label">
                        <Textfit mode="single">Flowering type</Textfit>
                    </Row>
                    <Row className="stats">
                        <Textfit mode="single">Photo-period</Textfit>
                    </Row>
                </Col>

                <Col className="stat-sections">
                    <Row className="stats-label">
                        <Textfit mode="single">Breeder</Textfit>
                    </Row>
                    <Row className="stats">
                        <Textfit mode="single">Seedsman Genetics</Textfit>
                    </Row>
                </Col>

                <Col className="stat-sections">
                    <Row className="stats-label">
                        <Textfit mode="single">Flowering time</Textfit>
                    </Row>
                    <Row className="stats">
                        <Textfit mode="single">65 days</Textfit>
                    </Row>
                </Col>
            </Row>
        <LastFeed />
        </Container>
    </div>
    )}

export default CurrentGrow;