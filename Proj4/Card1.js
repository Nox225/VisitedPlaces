import React from 'react'

// let images = [
//     'https://source.unsplash.com/WLxQvbMyfas',
// ]
//           src="images[0]"

export default function Card1(props){
    return(
        <div className='card'>
            <img src={props.item.imageUrl} alt=""/>
            <div className='desc'>
                <div className='info'>
                    <i className="fas fa-map-marker-alt"></i>
                    <h3 className='location'>{props.item.location}</h3>
                    <a href='{https://goo.gl/maps/1DGM5WrWnATgkSNB8}' target="_blank" className='link'>View on Google Maps</a>
                </div>
                <h1>{props.item.title}</h1>
                <h4>{props.item.startDate} - {props.item.endDate}</h4>
                <p>{props.item.description}</p>
            </div>
        </div>
    )
}