import React, {Component} from 'react';
import './App.css';
import Create from './components/create';
import Post from './components/post';
import axios from 'axios';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: [],
      nameInput: '',
      proteinInput: '',
      caloriesInput: ''
    }
  }

  componentDidMount(){
    this.displayPost();
  }

  displayPost = () => {
    axios.get('/api/post').then(res => {
        this.setState({posts: res.data});
    })
  }

  updatePost = (id, nameInput, proteinInput, caloriesInput) => {
    axios.put(`http://localhost:8989/api/post/${id}`, {nameInput, proteinInput, caloriesInput}).then(res => {
      this.setState({posts: res.data});
    })
  }

  deletePost = id => {
    axios.delete(`http://localhost:8989/api/post/${id}`).then(res => {
      this.setState({posts: res.data});
    })
  }

  createPost = (nameInput, proteinInput, caloriesInput) => {
    axios.post('http://localhost:8989/api/post', {nameInput, proteinInput, caloriesInput}).then(res => {
      this.setState({posts: res.data});
    })
  }

  render(){
    return (
      <div className="App">

        <section className='container-create'>
          <Create createPostFn={this.createPost} posts={this.state.posts} />
        </section>

        <section className='container-post'>
          <div>
        {
          this.state.posts.map(posts => (
            <Post 
              key={posts.id}
              id={posts.id}
              nameInput={posts.nameInput}
              proteinInput={posts.proteinInput}
              caloriesInput={posts.caloriesInput}
              updatePostFn={this.updatePost}
              deletePostFn={this.deletePost}
            />
          ))
        }
          </div>
        </section>
        
      </div>
    );
  }
}

export default App;
