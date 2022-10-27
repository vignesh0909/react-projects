import { PropTypes } from "prop-types";

const Techie = (props) => {
    return (<>
        <h1>{props.skill}</h1>
    </>)
}
Techie.defaultProps = { skill: "MERN", };
Techie.propTypes = { skill: PropTypes.bool, }
export default Techie;
