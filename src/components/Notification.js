import PropTypes from 'prop-types';
export function Notification({message}) {
 return (
  <p className='text-massage'>{message}</p>
 )
}
Notification.PropType = {
 message:PropTypes.node.isRequired,
}