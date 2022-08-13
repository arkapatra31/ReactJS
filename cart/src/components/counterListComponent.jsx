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

    handleDelete = (counterID) => {
        console.log("Decremental ID --- ", counterID);
        let count = this.state.count;
        count.map((c) => {
            if(c.id === counterID){
                c.value -= 1;
            }
        });
        this.setState({count});
    }

    handleInc = (count) => {
        let cnt = [...this.state.count];
        let idx = cnt.indexOf(count);
        cnt[idx].value += 1;
        console.log(cnt);
        this.setState({count : cnt});
    }

    render() { 
        return (
            <div>
                {
                    //this.state.count.map(c => <Counter key={ c.id }/>)
                    // Now we can add value of count.value in the component
                    this.state.count.map(counter => (<Counter key={counter.id} 
                        counter={counter} 
                        onDelete={this.handleDelete}
                        onIncrement={this.handleInc} />))
                }
            </div>
        );
    }
}
 
export default CounterList;