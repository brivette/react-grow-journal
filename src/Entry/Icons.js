import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCannabis, faTint, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-solid-svg-icons'
import { faShower } from '@fortawesome/free-solid-svg-icons'

const CannIcon = () => {
    return (
    <FontAwesomeIcon className="icon cannabis" icon={faCannabis} />
    )
};

const CalIcon = (props) => {
    return (
        <FontAwesomeIcon className="icon cali glyphicon" icon={faCalendar} />
    )
};

const NuteIcon = () => {
    return (
    <FontAwesomeIcon className="icon nute glyphicon" icon={faShower} />
    )
};

const Therm = () => {
    return (
        <FontAwesomeIcon className="icon therm glyphicon" icon={faThermometerThreeQuarters} />
    )
}

const WaterDrop = () => {
    return <FontAwesomeIcon className="icon waterDrop glyphicon" icon={faTint} />
}

export {
    CannIcon,
    CalIcon,
    NuteIcon,
    Therm,
    WaterDrop
};