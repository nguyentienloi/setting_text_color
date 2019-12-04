import React, { Component } from 'react';

class Reset extends Component {
	onReset = () => {
		this.props.onSetting(true);
	}
    render(){
        return(
            <button type="button" className="btn btn-danger" onClick={this.onReset}>Reset</button>
        );
    }
}

export default Reset;
