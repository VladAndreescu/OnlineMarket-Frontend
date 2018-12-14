import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

import {removeOffer} from '../../actions/postActions'

class OfferItem extends Component {

	onDeleteClick(postId, offerId){
		this.props.removeOffer(postId, offerId)
	}
  render() {

	const {offer, postId, auth} = this.props

	return (
		<div className="card card-body mb-3">
        	<div className="row">
            	<div className="col-md-5">
                	<h4 className="text-center " style={{textDecoration: 'underline'}}>{offer.name}</h4>
            	</div>
            	<div className="col-md-4">
					<p 
						style={{
							fontSize: '20px',
							textDecoration: 'underline'
						}}
						>Value:
					</p>
                  	<p className="lead">{offer.value}</p>
				</div>
				<div className="col-md-4">
					<p 
						style={{
							fontSize: '20px',
							textDecoration: 'underline'
						}}
						>Offer:
					</p>
                  	<p className="lead">{offer.text}</p>
				</div>
				<div className="col-md-10">
					{offer.user === auth.user.id ? (
					  	<button 
						  	type="button"
						  	className="btn btn-danger"
						  	onClick={this.onDeleteClick.bind(this, postId, offer._id)}>
						  		<i className="fas fa-times"/>
						</button>
				  	) : null}
				</div>
			</div>
		</div>
	)
  }
}

OfferItem.propTypes = {
	removeOffer: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	offer: PropTypes.object.isRequired,
	postId: PropTypes.string.isRequired
	
}

const mapStateToProps = (state) =>({
	auth: state.auth
})

export default  connect(mapStateToProps, {removeOffer})(OfferItem)
