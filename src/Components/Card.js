import React from 'react';

const Card = ({email, name, id}) =>{
   
    
    return(
        <div className= 'bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc' >
            <img alt = 'robot'src = {`https://robohash.org/${id}?300x300`}/>
            <div>
                <h2> {name} </h2>    
                <p> {email}</p>
                
            </div>
        </div>
    );
}

export default Card;