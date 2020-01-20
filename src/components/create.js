import React, {Component} from 'react';

class Create extends Component {
    constructor(props){
        super(props);
        this.state = {
            nameInput: '',
            proteinInput: '',
            caloriesInput: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.createPost = this.createPost.bind(this);
    }

    handleInputChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        });
    };

    createPost(){
        const {nameInput, proteinInput, caloriesInput} = this.state;
        const {createPostFn} = this.props;

        createPostFn(nameInput, proteinInput, caloriesInput);

        this.setState({
            nameInput: '',
            proteinInput: '',
            caloriesInput: ''
        })
    };

    render(){
        return(
            <div>
                <section className='form'>

                    <div className='container-food-input'>
                    <input className='main-input' placeholder='Food name' 
                        type='text' value={this.state.nameInput} name='nameInput' onChange={this.handleInputChange} />
                    </div>
                    <br/>

                    <div className='container-protein-input'>
                    <input className='main-input' placeholder='Protein (grams)' 
                        type='number' value={this.state.proteinInput} name='proteinInput' onChange={this.handleInputChange} />
                    </div>
                    <br/>

                    <div className='container-calories-input'>
                    <input className='main-input' placeholder='Total calories' 
                        type='number' value={this.state.caloriesInput} name='caloriesInput' onChange={this.handleInputChange} />
                    </div>
                    <br/>

                    <button className='add-button' onClick={this.createPost}>Add</button>

                </section>
            </div>
        )
    }
}

export default Create;
