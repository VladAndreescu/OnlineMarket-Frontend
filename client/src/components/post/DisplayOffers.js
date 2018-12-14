import React, { Component } from 'react'
import PropTypes from 'prop-types'

import OfferItem from './OfferItem'

class DisplayOffers extends Component {
  render() {
	
	const {offers, postId} = this.props
	
	return offers.map(offer => <OfferItem key={offer._id} offer={offer} postId={postId} />)
  }
}

DisplayOffers.propTypes = {
	offers: PropTypes.array.isRequired,
	postId: PropTypes.string.isRequired
}


export default DisplayOffers
