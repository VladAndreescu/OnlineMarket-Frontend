//Implementing a simple spinner which is displayed when loading state is true

import React from 'react'
import spinner from './spinner.gif'

export default function Spinner() {
  return (
	<div>
	  <img 
		  src={spinner} 
		  style={{
			display: 'block',  
			width: '250px',
			margin: 'auto'
		}}
		  alt="Loading..."
		  />
	</div>
  )
}
