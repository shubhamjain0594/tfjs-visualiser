import React, { Component } from 'react';
import './App.css';

// import * as tf from '@tensorflow/tfjs';
import * as mobilenet from '@tensorflow-models/mobilenet';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    onImageChange(event) {
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                this.setState({image: e.target.result});
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    }

    predictImage(event){
        if (this.state.image) {
            const img = document.getElementById('target');

            // Load the model.
            mobilenet.load().then(model => {
                // Classify the image.
                model.classify(img).then(predictions => {
                    console.log('Predictions: ');
                    console.log(predictions);
                });
            });
        }
    }

    render() {
        const img_style = {
            maxWidth: '100%',
            height: 'auto'
        };
        return (
            <React.Fragment>
                <div className="container-fluid">
                    <nav className="navbar navbar-dark bg-dark">
                        <a className="navbar-brand" href="#">TF-JS Visualiser</a>
                    </nav>
                </div><div className="container">
                    <div className="row mb-3">
                        <div className="custom-file">
                            <label className="custom-file-label">
                                Choose File
                            <input type="file" className="custom-file-input" id="customFile" onChange={this.onImageChange.bind(this)}/>
                            </label>
                        </div>
                    </div>
                {
                    this.state.image &&
                        <React.Fragment>
                            <div className="row mb-3">
                                <div className="col-6 offset-3">
                                    <img id="target" src={this.state.image} style={img_style} alt="Uploaded"/>
                                </div>
                            </div>
                            <div className="row mb-3 justify-content-center">
                                <div className="col-xs-4 offset-xs-4">
                                    <button className="btn btn-primary" onClick={this.predictImage.bind(this)}>Predict</button>
                                </div>
                            </div>
                        </React.Fragment>
                }
                </div>
            </React.Fragment>
        );
    }
}

export default App;
