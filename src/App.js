import React from 'react';
import data from './Data';
import './App.css';
import ImageList from './components/ImageList';


export default class App extends React.Component {
state={
  keyword: ''
}

handleNameChange = (e) => {
  this.setState({ 
    title: 
    e.target.value 
   });
}


render(){
  const filteredImages=data.filter((booger) => {
  if (!this.state.keyword) return true; 
    
          if (booger.keyword === this.state.keyword) return true; 
    
         return false;
  })


  return (
    <div className="App">
      <header className="App-header">
        <form>
          <select
              value={this.state.keyword}
              onChange={(e) => {
                this.setState({
                  keyword: e.target.value
                })
                console.log(this.state)
              }}
>
          <option value='rhino'>rhino</option>
              <option value='narwhal'>narwhal</option>
          </select>
          <button>Submit</button>
        </form>
      < ImageList ImageItemProp={ filteredImages }/>
      
      </header>
    </div>
    ); }
}







