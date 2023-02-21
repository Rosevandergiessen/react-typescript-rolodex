//import { Component } from "react";
import { Employee } from '../../App';
import './card.styles.css';

type CardProps = {
  employee: Employee;
}

const Card = ({employee}: CardProps) => {
  const {id, name, email} = employee;
    return(
      <div className='card-container' key={id}>
            <img
              src={`https://robohash.org/${id}?set=set4&size=180x180`}
              alt={`employee ${name}`} />
              <h2>{name}</h2>
              <p>{email}</p>
      </div>
    )
}

// class Card extends Component {
//   render() {
//     const {id, name, email} = this.props.monster;
//     return(
//       <div className='card-container' key={id}>
//             <img
//               src={`https://robohash.org/${id}?set=set4&size=180x180`}
//               alt={`monster ${name}`} />
//               <h2>{name}</h2>
//               <p>{email}</p>
//           </div>
//     )
//   }
// };

export default Card;
