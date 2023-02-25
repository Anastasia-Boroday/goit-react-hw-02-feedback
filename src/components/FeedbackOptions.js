import PropTypes from 'prop-types';
import  './feedback.css';
export function FeedbackOptions({ options, onLeaveFeedback }) {
 return (
  <ul className="list">
   {options.map(el => (
    <li key={el} className="item">
     <button
      className='btn'
      type="button"
      onClick={() => onLeaveFeedback(el)}>{el}</button>
    </li>
   ))
   }
  </ul>
     
 );
}
FeedbackOptions.PropType = {
 options: PropTypes.array.isRequired,
 onLeaveFeedback:PropTypes.func.isRequired,
}
