import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
     };

     styles = {
         count: {
            fontWeight: "bold",
            backgroundColor: "blue",
            cornerRadius: 10,
            color: "white",
            margin: 2,
            padding: 5,
            paddingTop: 10
         },
         button: {
             fontWeight: "bold",
             backgroundColor: "black",
             color: "white",
             cornerRadius: 10,
             margin: 2,
             padding: 5
         }
     };

     handleIncrement = () => {
         this.setState({ count: this.state.count + 1});
     }

    render() { 
        return (
            <div>
                <span style={ this.styles.count }>{this.formatCount()}</span>
                <button  onClick={this.handleIncrement} style = {this.styles.button } className="btn btn-secondary btn-sm">Increment</button>
            </div>
        );
    }

    formatCount() {
        if (this.state.count === 0) {
            return "Zero";
        } else {
            return this.state.count;
        }
    }
}
 
export default Counter;
