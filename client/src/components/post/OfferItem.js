//import utils
import React, { Component } from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'

//import actions
import {removeOffer} from '../../actions/postActions'

class OfferItem extends Component {

	//onClick is calling the function that removes the offer based on the postId and offerId
	onDeleteClick(postId, offerId){
		this.props.removeOffer(postId, offerId)
	}
  	render() {
	//using destructuring in order to retrieve the current offer, postId 
	//and authentication State as well as the current user that is logged in
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
					{offer.user === auth.user.id || auth.user.admin === true ? (
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

// declaring the PropTypes for OfferItem component
OfferItem.propTypes = {
	removeOffer: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	offer: PropTypes.object.isRequired,
	postId: PropTypes.string.isRequired
	
}
//developed the mapStateToProps function for OfferItem component
//it will retrieve the state of authentication as well as the information about the current user logged in
const mapStateToProps = (state) =>({
	auth: state.auth
})

export default  connect(mapStateToProps, {removeOffer})(OfferItem)
