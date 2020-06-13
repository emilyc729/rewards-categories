import React, { Component } from 'react';
import './Reward.css';
import Draggable from 'react-draggable';



class Reward extends Component {
    
    state = {
        activeDrags: 0,
    };

    onStart = () => {
        let newDrag = this.state.activeDrags;
        this.setState({ activeDrags: ++newDrag });
    };

    onStop = () => {
        let newDrag = this.state.activeDrags;
        this.setState({ activeDrags: --newDrag });
    };


    render() {
        const dragHandlers = { onStart: this.onStart, onStop: this.onStop };
        console.log(this.state.emptyBox)
        return (
   
          

          

            <Draggable axis="x" {...dragHandlers} onMouseDown={() => this.props.addReward(this.props.r)}>
                <div className="Reward-box" >
                    <button className="deleteButton btn btn-sm btn-outline-danger"  data-toggle="tooltip" data-placement="top" title="Delete Reward"><i className="fas fa-times"></i></button>
                    {this.props.r}
                </div>
            </Draggable>
     
         
        );

    }

}


export default Reward;