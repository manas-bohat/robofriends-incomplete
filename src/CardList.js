import React from 'react'
import Card from './Card'

const CardList = ({robots}) =>
{
	const cardArray = [];
	for(let i=0; i<robots.length; i++)
	{
		cardArray.push(<Card key={robots[i].id} 
		name={robots[i].name} 
		id={robots[i].id} 
		email={robots[i].email}
		/>)
	}
	return (
		<div>
		{
			/* ANDREI's WAY */
			// robots.map((user, i) => {
			// 	return (
			// 		<Card key={robots[i].id} 
			// 		name={robots[i].name} 
			// 		id={robots[i].id} 
			// 		email={robots[i].email}
			// 	/>

			// 	);
			// })

			cardArray

			
		}
	    </div>
	);
	
}

export default CardList;


