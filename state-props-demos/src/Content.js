import React from 'react';
//import Card from './Card'

var count = 1;
function Content({ children }) {
    React.Children.map(children, () => {
        console.log("child", count++);
    });
    return <>{children}</>;
}
export default Content;
