import React from 'react';

const way2 = "Using [ ] - accepts as array elements";
class List extends React.Component{
    render(){
        return(
            <>
            <ol>
            <li>Using one single element that inculdes all other elements</li>
            <li>{way2}</li> 
            <li>Using react.Fragment & even using paranthasis withod word "react.Fragments"</li>
            </ol>
            <p>Note : The above ordered list is displayed using Class Component.</p>
            </>
        );
    }
}
export default List;