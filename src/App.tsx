import { useState, useEffect, ChangeEvent } from 'react';
//import logo from './logo.svg';
//import {Component} from 'react;
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

import { getData } from './utils/data.utils';

export type Employee = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [searchField, setSearchField] = useState(''); // [value, setValue]
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Employee[]>('https://jsonplaceholder.typicode.com/users');
      setEmployees(users);
    };

    fetchUsers();
  }, []) //dependencies: in array what changes in order for the fuction to get run (in this case, never, only gets called on mount)

  useEffect(() => {
    const newFilteredEmployees = employees.filter((employee) => {
      return employee.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredEmployees(newFilteredEmployees);
  }, [employees, searchField])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return(
    <div className="App">
    <h1 className="app-title">Our Team</h1>
    <SearchBox
      className='employees-search-box'
      onChangeHandler={onSearchChange}
      placeholder='Search employee'
    />
    <CardList employees={filteredEmployees}  />
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
