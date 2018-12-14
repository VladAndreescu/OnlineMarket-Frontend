//import utils
import React, { Component } from 'react'
import PropTypes from 'prop-types'

//import components
import OfferItem from './OfferItem'

class DisplayOffers extends Component {
  render() {
	//using destructuring in order to retrieve the offers and postId from the props
	const {offers, postId} = this.props
	//loop through the offers and set each offer into an OfferItem Object
	return offers.map(offer => <OfferItem key={offer._id} offer={offer} postId={postId} />)
  }
}
// declaring the PropTypes for DisplayOffers component
DisplayOffers.propTypes = {
	offers: PropTypes.array.isRequired,
	postId: PropTypes.string.isRequired
}


export default DisplayOffers
