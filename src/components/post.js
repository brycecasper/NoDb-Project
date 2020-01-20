import React, {Component} from 'react';
import Edit from './edit';

class Post extends Component {
    constructor(props){
        super(props);
        this.state = {
            editing: false
        }
        this.showEdit = this.showEdit.bind(this);
        this.hideEdit = this.hideEdit.bind(this);
    }

    showEdit(){
        this.setState({editing: true})
    }

    hideEdit(){
        this.setState({editing: false})
    }

    render(){
        const {editing} = this.state;
        const {id, nameInput, proteinInput, caloriesInput, updatePostFn, deletePostFn} = this.props;

        return(
            <section>
            
            <div className='flex-all'>
            <div className='flex-display'>
                
                <div className='align-food'>
                    <div className='word'>Food:</div>
                    <div className='name-display'>{nameInput}</div>               
                </div>

                <div className='align-food'>
                    <div className='word'>Protein:</div>
                    <div className='name-display'>{proteinInput}</div>
                </div>

                <div className='align-food'>
                    <div className='word'>Calories:</div>
                    <div className='name-display'>{caloriesInput}</div>
                </div>

            </div>

            <div>
                <section className='flex-edit-delete'>
                    <h5 className='delete' onClick={() => deletePostFn(id)}>Delete</h5>
                    <h6 className='edit' onClick={this.showEdit}>Edit</h6>
                </section>
                <div>
                {
                    editing
                    ?
                        <Edit
                            id={id}
                            nameInput={nameInput}
                            proteinInput={proteinInput}
                            caloriesInput={caloriesInput}
                            updatePostFn={updatePostFn}
                            hideEdit={this.hideEdit} />
                    :
                    <></>
                }
                </div>
            </div>

            </div>

            </section>
        )
    }
}

export default Post;
