//implementing footer component
// I implemented a function that automatically updates the footer to the current year


//import utils
import React from 'react'

export default () => {
  return (
	<footer className="bg-dark text-white p-3 mt-5 text-center">
		MyStuff application Copyright &copy; {new Date().getFullYear()}
	</footer>
  )
}
