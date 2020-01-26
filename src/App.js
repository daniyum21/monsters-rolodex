import React, {Component} from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list';
import {Search} from './components/search/search';


class App extends Component {
  constructor()
  {
    super();
    this.state = { 
      monsters: [],
      searchField: ''
     }
  }
 handleChange = e =>{
  this.setState({searchField: e.target.value});
}
   componentDidMount()
   {
     fetch('https://jsonplaceholder.typicode.com/users')
     .then(response=>response.json())
     .then(response=>this.setState({"monsters": response}))
   }
  render() { 
    const {monsters, searchField} = this.state;
     
      const filteredMonsters = monsters.filter(monster=>monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return ( 
      <div className="App">
      <header className="App-header">
        <h1>Monsters Rolodex</h1>
        </header>
        <Search  type="search" placeholder="Searching" handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/>
    </div>
     );
  }
}

export default App;
