import React from 'react';



const Scroll = (props) => {
    console.log(props)
    return(
        <div style = {{ overflowY: 'scroll', border: '5px solid black', height: '800px' }}> {//this is a jsx code with a csx style inside thats why its double-braced
        }
            {props.children}
        </div>
    )                           //props.children used to wrap custom made components
};

export default Scroll;