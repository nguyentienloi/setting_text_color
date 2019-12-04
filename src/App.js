import React, { Component } from 'react';
import './App.css';
import ColorPicker from './components/ColorPicker';
import Reset from './components/Reset';
import Result from './components/Result';
import SizeSetting from './components/SizeSetting';

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'red',
            size: 15
        };
        this.onSetColor = this.onSetColor.bind(this);
        this.onChaneSize = this.onChaneSize.bind(this);
        this.onSetting = this.onSetting.bind(this);
    }
    onSetColor(params){
        this.setState({
            color: params
        });
    }
    onChaneSize(value){
        if(this.state.size + value >= 8 && this.state.size + value <= 36){
            this.setState({
                size: this.state.size + value
            });
        }
    }
    onSetting(value){
        if(value) {
            this.setState({
                color: 'red',
                size: 15
            });
        }
    }
    render(){
        return(
            <div className="container mt-50">
                <div className="row">
                   <ColorPicker color={this.state.color} onReceiveColor={this.onSetColor} />
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                        <SizeSetting fontSize={this.state.size} onChaneSize={this.onChaneSize}/>
                        <Reset onSetting={this.onSetting}/>
                    </div>
                    <Result color={this.state.color} fontSize={this.state.size} />
                </div>
            </div>
        );
    }
}

export default App;
