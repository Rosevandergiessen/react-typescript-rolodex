//import { Component } from 'react';
import './card-list.styles.css';
import Card from '../card/card.component';

import { Employee } from '../../App';

type CardListProps = {
  employees: Employee[];
}


const CardList = ({employees}: CardListProps ) => (
  //const { monsters } = this.props;
      <div className='card-list'>
        {employees.map((employee) => {
          return(
          <Card employee={employee}/>
        )})}
      </div>
);

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return(
//       <div className='card-list'>
//         {monsters.map((monster) => {
//           return(
//           <Card monster={monster}/>
//         )})}
//       </div>
//     )
//   }
// }

export default CardList;
