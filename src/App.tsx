import { useState, useEffect } from 'react';
//import logo from './logo.svg';
//import {Component} from 'react;
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

import { getData } from './utils/data.utils';

type Monster = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);

  useEffect(() => {
    // fetch('https://jsonplaceholder.typicode.com/users')
    //   .then((response) => response.json())
    //   .then((users) => setMonsters(users));
    const fetchUsers = async () => {
      const users = await getData<Monster[]>('https://jasonplaceholder/typicode.com/users')
      
    }
  }, []) //dependencies: in array what changes in order for the fuction to get run (in this case, never, only gets called on mount)

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return(
    <div className="App">
    <h1 className="app-title">Monster Rolodex</h1>
    <SearchBox
      className='monsters-search-box'
      onChangeHandler={onSearchChange}
      placeholder='Search monsters'
    />
    <CardList monsters={filteredMonsters}  />
    </div>
  )
};

// class App extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchField: ''
//     }
//   }

  // componentDidMount() {
  //   fetch('https://jsonplaceholder.typicode.com/users')
  //     .then((response) => response.json())
  //     .then((users) => this.setState( () => {
  //       return {monsters: users}
  //     }
  //     ));
  // }

//
//   }

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     return (
//       <div className="App">
//       <h1 className="app-title">Monster Rolodex</h1>
//       <SearchBox
//         className='monsters-search-box'
//         onChangeHandler={onSearchChange}
//         placeholder='Search monsters'
//       />
//       <CardList monsters={filteredMonsters}  />
//       </div>
//     );
//   }
// }

export default App;
