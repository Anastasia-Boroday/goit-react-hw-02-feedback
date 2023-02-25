import PropTypes from 'prop-types';

export function Section({ title, children }) {
 return (
  <div>
   <h1 className="title">{title}</h1>
   {children}
  </div>

 )
}
Section.PropType = {
 title: PropTypes.string.isRequired,
 children:PropTypes.object.isRequired,
}

