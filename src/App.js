import React from 'react';
import data from './Data';
import './App.css';
import ImageList from './components/ImageList';


export default class App extends React.Component {
state={
  keyword: '',
  horns: ''
}

render(){
  const filteredImages=data.filter((booger) => {
  if (!this.state.keyword) return true; 
  if (!this.state.horns) return true; 
          if (booger.keyword === this.state.keyword && booger.horns === Number(this.state.horns)) return true; 

         return false;
  })


  return (
    <div className="App">
      <header className="App-header">
      </header>
        <form>
          <select
              value={this.state.keyword}
              onChange={(e) => {
                this.setState({
                  keyword: e.target.value
                })
              }}
>
          <option value='rhino'>rhino</option>
          <option value='narwhal'>narwhal</option>
          <option value='unicorn'>unicorn</option>
          <option value='unilego'>unilego</option>
          <option value='triceratops'>triceratops</option>
          <option value='markhor'>markhor</option>
          <option value='mouflon'>rhino</option>
          <option value='chameleon'>chameleon</option>
          <option value='lizard'>lizard</option>
          <option value='dragon'>dragon</option>

          </select>
        </form>

        <form>
          <select
              value={this.state.horns}
              onChange={(e) => {
                this.setState({
                  horns: e.target.value
                })
              }}
>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='100'>100</option>
          </select>
        </form>
      < ImageList ImageItemProp={ filteredImages }/>
       
      
      
    </div>
    ); }
}



/* 
handleKeywordChange = (e) => {
  this.setState({
    keyword: e.target.value
  })
}

handleHornsChange = (e) => {
  this.setState({
    horns: e.target.value
  })
}




return {
  <>
  <HornedAnimalsList
  filteredKeywords={filteredKeywords}
  />
  Keyword
  <Dropdown
  currentValue={this.state.keyword}
  handleChange={this.handleKeywordChange
  options=['narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'chameleon', 'lizard', 'dragon']
  />
  }


  Horns
  <Dropdown
  currentValue={this.state.horns}
  handleChange={this.handleHornsChange
  options=['1', '2', '3', '100']
  />
  </>
}
}


