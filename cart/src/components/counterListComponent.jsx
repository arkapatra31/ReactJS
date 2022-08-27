import React, { Component } from 'react';
import Counter from './counterComponent';
class CounterList extends Component {

    render() { 
        return (
            <div>
                {
                    //this.state.count.map(c => <Counter key={ c.id }/>)
                    // Now we can add value of count.value in the component
                    this.props.counters.map(counter => (<Counter key={counter.id} 
                        counter={counter} 
                        onIncrement={this.props.handleInc}
                        onDecrement={this.props.handleDec}
                        onDelete={this.props.handleDelete}
                        onReset = {this.props.handleReset} />))
                }
            </div>
        );
    }
}
 
export default CounterList;