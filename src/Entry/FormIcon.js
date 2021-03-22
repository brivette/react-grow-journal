import React from 'react';
import { Container } from 'react-bootstrap';

const IconCheck = (props) => {
    if (props.faIcon) {
       return <props.faIcon />
    }
};

const EntryIcon = (props) => {
    return (
        <Container fluid className="d-flex justify-content-center">
        <div className="inner-addon left-addon">
        {/* Check to see if there is an icon associated with the field      */}
            {IconCheck(props)}     
        <input type={props.iType} className="form-control" placeholder={props.placeholder} />
        </div>
        </Container>
    )
};

export default EntryIcon;