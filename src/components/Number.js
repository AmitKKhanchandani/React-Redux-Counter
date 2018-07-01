import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

import { incrementNumber, decrementNumber } from '../actions';

class Number extends Component {
	render() {
		console.log('From the props',this.props);
		return (
			<div>
				<div className="row text-center">
					<p style={{fontSize:'26px'}}>{this.props.num}</p>
				</div>
				<div className="row text-center">
					<Button bsStyle="primary" onClick={()=>this.props.incrementNumber(this.props.num)}>Increment</Button>
					<Button bsStyle="danger" className="col-sm-offset-1" onClick={()=>this.props.decrementNumber(this.props.num)}>Decrement</Button>
				</div>
				<div className="text-center" style={{marginTop:'25px'}}>
					<a href="http://www.amitk.co.in/?utm_source=github&utm_campaign=react_project&utm_content=counter_app">© Amit K Khanchandani</a>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('mapStateToProps - Number.js', state);
	return {
		num: state.num
	}
}

// function mapDispatchToProps(dispatch) {
// 	return bindActionCreators({incrementNumber, decrementNumber}, dispatch);
// }

export default connect(mapStateToProps, {incrementNumber, decrementNumber})(Number);








