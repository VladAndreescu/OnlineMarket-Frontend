import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

import Item from './Item'

import Spinner from '../../utils/Spinner'

class Posts extends Component {
  render() {
	return (
	  <div className="postsFeed">
	  	<div className="container">
			<div className="row">
				<div className="col-md-12">
					<Item/>
				</div>
			</div>  
		</div>
	  </div>
	)
  }
}

export default Posts
