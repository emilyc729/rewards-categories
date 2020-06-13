import React, { Component } from 'react';
import './Table.css';
//import Reward from '../Reward/Reward';
import Draggable from 'react-draggable';



class Table extends Component {
    state = {
        activeDrags: 0,
        isDragged: false,
        rewardBox: [],
        deleteBox: []
    }


    onStart = () => {
        let newDrag = this.state.activeDrags;
        this.setState({ activeDrags: ++newDrag, isDragged: false });
    };

    onStop = () => {
        let newDrag = this.state.activeDrags;
        this.setState({ activeDrags: --newDrag, isDragged: true });
    };

    addReward(r) {
        let newRewards = this.state.rewardBox;
        newRewards.push(r);
        this.setState({ rewardBox: newRewards, isDragged: false });
    }

    deleteReward(r, idx) {
        let updateRewards = this.state.rewardBox;
        let deleted = this.state.deleteBox;
        deleted.push(r);
        updateRewards[idx] = '';

        this.setState({ rewardBox: updateRewards,  deleteBox: deleted});
    }

    undoReward() {
        let updateRewards = this.state.rewardBox;
        let deleted = this.state.deleteBox;

        if(updateRewards[this.state.rewardBox.length - 1] === '') {
            updateRewards[this.state.rewardBox.length - 1] = deleted[deleted.length - 1];
            deleted.pop();
        } else {
            updateRewards.pop();
        }

        this.setState({rewardBox: updateRewards, deleteBox: deleted});
    }

    handleSelect = (e) => {
        console.log('hi')
    }

    

    render() {
        const rewards = ['R1', 'R2', 'R3', 'R4', 'R5'];
        const categories = ['C1', 'C2', 'C3', 'C4', 'C5'];
        const dragHandlers = {onStart: this.onStart, onStop: this.onStop};

        return (

            <div className="container">
                <div className="row">
                    <div className="col-md-2">
                        Reward
                    </div>
                    <div className="col-md-10">
                        Categories
                    </div>
                </div>


                <div className="row">

                    <div className={`col-md-2 ${this.state.isDragged ? 'reveal' : '' }`}>
                        blank
                        {rewards.map((r, idx) =>

                            
                        <div key={idx} className="Reward-box" id={r} onMouseDown={() => this.addReward(r)}>
                            {r}
                            
                        </div>
                        

                    )}


                    </div>
                    <div className={`col-md-2 overlap ${this.state.isDragged ? '' : 'reveal' }`}>
                        {this.state.rewardBox.map((r, idx) => 
                            <Draggable key={idx} axis="x" {...dragHandlers} >
                                <div className={`Reward-box ${r === '' ? 'hide' : ''}`}>
                                    <button className="deleteButton btn btn-sm btn-outline-danger" title="Delete Reward" onClick={() => this.deleteReward(r, idx)}><i className="fas fa-times"></i></button>
                                    {r}
                                </div>
                            </Draggable>
                            
                        )}
                    </div>

                    {categories.map((c, idx) =>
                        <div className="col-md-2" key={idx}>
                            <span className="c-name">{c}</span>
                        </div>
                    )}

                </div>
                <button className="btn btn-sm btn-outline-info" title="Delete Reward" onClick={() => this.undoReward()}>Undo</button>

            </div >
        );
    }
}


export default Table;