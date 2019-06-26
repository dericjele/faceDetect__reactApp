import React from 'react'
import './FaceRecognition.css'

const FaceRecognition = ({imageUrl, box}) => {
    return(
        <div className='ma outerContainer'>
            <div className='absolute mt2 imageContainer'>
                <img id='inputImage' src={imageUrl} alt='detected Item' width='500px' height='auto'/>
                {
                    box.map((faceBox, i) => {
                        return <div className='bounding-box' key={i} style={{top: faceBox.topRow, right: faceBox.rightCol, left: faceBox.leftCol, bottom: faceBox.bottomRow}}>
                        </div>
                    })
                }
            </div>
        </div>
    )
};

export default FaceRecognition