import React, { Component } from 'react';
import Counter from './counterComponent';
class CounterList extends Component {
    state = { 
        count : [
                {id : 0, value : 0},
                {id : 1, value : 1},
                {id : 2, value : 2},
                {id : 3, value : 3},
                {id : 4, value : 4}
            ]
     }; 

    handleInc = (count) => {
        let cnt = [...this.state.count];
        let idx = cnt.indexOf(count);
        cnt[idx].value += 1;
        this.setState({count : cnt});
    }

    handleDec = (counterID) => {
        let count = this.state.count;
        count.map((c) => {
            if(c.id === counterID){
                c.value -= 1;
            }
        });
        this.setState({count});
    }

    handleDelete = (counterID) => {
        let cnt = [...this.state.count];
        cnt.map((c) => {
            if(c.id === counterID){
                cnt.splice(c.id, 1);
            }
        });
        this.setState({count : cnt});
    }

    handleReset = (counter) => {
        let cnt = [...this.state.count];
        let idx = cnt.indexOf(counter);
        cnt[idx].value = 0;
        this.setState({count:cnt});
    }

    render() { 
        return (
            <div>
                {
                    //this.state.count.map(c => <Counter key={ c.id }/>)
                    // Now we can add value of count.value in the component
                    this.state.count.map(counter => (<Counter key={counter.id} 
                        counter={counter} 
                        onIncrement={this.handleInc}
                        onDecrement={this.handleDec}
                        onDelete={this.handleDelete}
                        onReset = {this.handleReset} />))
                }
            </div>
        );
    }
}
 
export default CounterList;