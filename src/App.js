import React from 'react';
import data from './Data';
import './App.css';
import ImageList from './components/ImageList';
import Dropdown from './dropdown';


export default class App extends React.Component {
state={
  keyword: '',
  horns: ''
}
handleKeywordChange = (e) => {
  this.setState({
    keyword: e.target.value
  }) 
  console.log(this.state)
}
handleHornsChange = (e) => {
  this.setState({
    horns: Number(e.target.value)
  })
}
render(){
  // const filteredImages=data.filter((booger) => {
  // if (!this.state.keyword) return true; 
  // if (!this.state.horns) return true; 
  // if (booger.keyword === this.state.keyword && booger.horns === Number(this.state.horns)) return true; 


      const filteredImages = data.filter((data) => {
        if (!this.state.keyword && !this.state.horns) return true; 
        if (this.state.keyword && !this.state.horns) 
          if (data.keyword === this.state.keyword) return true; 
        if (this.state.horns && !this.state.keyword) {
          if (data.horns === this.state.horns) return true; }
        if (this.state.horns && this.state.keyword) {
          if (data.horns === this.state.horns && data.keyword === this.state.keyword) return true;
        }
        return false;
      });
      console.log(filteredImages)
      return (
        <>
  <ImageList
  filteredKeywords={filteredImages}
  />
  Keyword
  <Dropdown
  currentValue={this.state.keyword}
  handleChange={this.handleKeywordChange}
    options={['narwhal', 'rhino', 'unicorn', 'unilego', 'triceratops', 'markhor', 'chameleon', 'lizard', 'dragon']}
    />
  Horns
  <Dropdown
  currentValue={this.state.horns}
  handleChange={this.handleHornsChange}
  options={['1', '2', '3', '100']}
  />
  </>
      )
}
}