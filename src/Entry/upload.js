import React, { Component } from 'react';
 
class PictureUpload extends Component {

fileSectedHandler = event => {
    console.log(event)
}

render() {
    return (
           <div className="formButton">
           Upload Pic
           </div>
        )
    }
}

export default PictureUpload;