import React from 'react'

const ImageLinkForm = ({onInputChange, onSubmit}) =>{
    return(
        <div className=''>
            <p className='f5'>
                This Magic Brain will detect faces in your Pictures, <br/>Give it a try !!
            </p>
            <div className='w-70 center shadow-5'>
                <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange}/>
                <button className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple' onClick={onSubmit}>Detect</button>
            </div>
        </div>
    )
}

export default ImageLinkForm