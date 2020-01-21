import React, {Component} from 'react';

class Edit extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: props.nameInput,
            proteinInput: props.proteinInput,
            caloriesInput: props.caloriesInput
        }
    }

    updateName = e => {
        this.setState({nameInput: e.target.value});
    };
    updateProtein = e => {
        this.setState({proteinInput: e.target.value})
    };
    updateCalories = e => {
        this.setState({caloriesInput: e.target.value})
    };

    updatePost = () => {
        const {nameInput, proteinInput, caloriesInput} = this.state;
        const {id, updatePostFn, hideEdit} = this.props;

        updatePostFn(id, nameInput, proteinInput, caloriesInput);
        hideEdit();
    };

    render(){
        const {nameInput, proteinInput, caloriesInput} = this.state;
        const {hideEdit} = this.props;

        return(
            <section>
            <div>
                <input className='edit-input' value={nameInput} onChange={this.updateName} placeholder='Food name'></input>
                <input className='edit-input' value={proteinInput} onChange={this.updateProtein} placeholder='Protein (grams)'></input>
                <input className='edit-input' value={caloriesInput} onChange={this.updateCalories} placeholder='Total calories'></input>
            </div>
            <button onClick={this.updatePost} className='update'>Update</button>
            <button onClick={hideEdit} className='cancel'>Cancel</button>
            </section>
        )
    }
}

export default Edit;