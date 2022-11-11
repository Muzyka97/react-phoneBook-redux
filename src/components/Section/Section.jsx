import PropTypes from 'prop-types';

const Sections = ({title, children}) =>{
    return (  
    <section>
        <div>
          <h2>{title}</h2>
          {children}
        </div>
    </section>)
};
Sections.propTypes ={
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
export default Sections