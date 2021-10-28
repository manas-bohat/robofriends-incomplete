import React from 'react';
import './Cards.css'

const SearchBox = function({searchChange}) {
	return (
		<div>
			<input className="pa2 ma2 ba b--green bg-lightest-blue"
			type="search" 
			placeholder="search friends"
			onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox;