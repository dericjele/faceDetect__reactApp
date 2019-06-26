import React, {Component} from 'react';
import Clarify from 'clarifai'
import './App.css';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from  './components/FaceRecognition/FaceRecognition'



const particlesOptions = {
    particles:{
        shadow:{
            enabled:true,
            color:'#3CA9D1',
            blur: 5
        }
    }
};

const detectApp = new Clarify.App({
    apiKey:'2ac65e87ed2945e98c3df65f1eca3bbe'
});


class App extends Component{

    constructor(){
        super();
        this.state = {
            input:'',
            imageUrl:'',
            box:[]
        }
    }

    onInputChange = (e) => {
     this.setState({input:e.target.value})
    };

    onSubmit = () =>{
        this.setState({imageUrl:this.state.input});
        detectApp.models.predict(
            Clarify.FACE_DETECT_MODEL,
            this.state.input)
            .then(response => {
                //console.log(response);
                //this.calculateFaceLocation(response)
                this.displayFaceBox(this.calculateFaceLocation(response))
            })
            .catch((err)=>{
                console.log(err)
            }
        )
    };

    calculateFaceLocation = (data) =>{
        const clarifyFace = data.outputs[0].data.regions[0].region_info.bounding_box;
        //console.log(clarifyFace);
        const clarifyFaces = data.outputs[0].data.regions;
        //console.log(clarifyFaces)
        const faceItem = document.querySelector('#inputImage');
        const width = Number(faceItem.width);
        const height = Number(faceItem.height);

        const drawnRegions = clarifyFaces.map(face => {
            return face.region_info.bounding_box
        });

        const finalDrawings = drawnRegions.map(faceMain => {
            return {
                leftCol : faceMain.left_col*width,
                topRow:faceMain.top_row *height,
                rightCol: width - (faceMain.right_col*width),
                bottomRow: height - (faceMain.bottom_row * height)
            }
        });

        return finalDrawings

        /*return {
            leftCol : clarifyFace.left_col*width,
            topRow:clarifyFace.top_row *height,
            rightCol: width - (clarifyFace.right_col*width),
            bottomRow: height - (clarifyFace.bottom_row * height)
        }*/

    };

    displayFaceBox =(box)=>{
        //console.log(box);
        this.setState({box:box});
    };

    render(){
        return (
            <div className="App">
                <Particles className="particles" paraks={particlesOptions}/>
                <Navigation/>
                <Logo/>
                <Rank/>
                <ImageLinkForm onInputChange = {this.onInputChange} onSubmit={this.onSubmit}/>
                <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.box}/>
            </div>
        );
    }
}

export default App;
