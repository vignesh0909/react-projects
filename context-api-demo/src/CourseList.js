import React, { useContext  } from 'react';
import { ThemeContext } from './context/ThemeContext';

// class CourseList extends Component {
//   static contextType = ThemeContext
//   render() { 
//     const {isLightTheme, light, dark} = this.context
//     const theme = isLightTheme ? light:dark;
//     return ( 
//       <div className="course-list" style={{color:theme.color,background:theme.bg}}>
//         <ul>
//           <li style={{background:theme.ui}}>React JS</li>
//           <li style={{background:theme.ui}}>Angular</li>
//           <li style={{background:theme.ui}}>Node</li>
//         </ul>
//       </div>
//     );
//   }
// }

const CourseList = () => {
  const {isLightTheme, light, dark} =  useContext(ThemeContext)
  const theme = isLightTheme ? light:dark;
  return ( 
    <div className="course-list" style={{color:theme.color,background:theme.bg}}>
      <ul>
        <li style={{background:theme.ui}}>React JS</li>
        <li style={{background:theme.ui}}>Angular</li>
        <li style={{background:theme.ui}}>Node</li>
      </ul>
    </div>
  );
}

export default CourseList;
