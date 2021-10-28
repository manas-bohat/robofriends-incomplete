import React from 'react';
import './Cards.css'

const Card = function({name, id, email}) {
	return (

		<div className="bg-light-green dib b3 pa3 ma2 grow bw2 shadow-5">
		
			<img src={`https://robohash.org/${id}?size=200x200`} alt='robot'/>
			<div className="tc">
				<h3> {name} </h3>
				<p> {email} </p>
			</div>
		</div>
	);
}


export default Card;
