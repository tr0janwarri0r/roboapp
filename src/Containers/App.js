import React,{Component} from 'react';          //App is a smart component because it has STATE
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';
import ErrorBoundry from '../Components/ErrorBoundry';
import '../Containers/App.css';


class App extends Component{        //creates class for holding/changing state
    constructor() {                 //App owns the states.
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
        
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')             //URL from JSONplaceholder
        .then(response => response.json())
        .then(users => this.setState({ robots: users}));
    }

    onSearchChange = (event) => {                 //always use '=>' when accessing methods designed by yourself on a component
        this.setState( { searchfield: event.target.value})                      //syntax for changing STATE, now searchfield alwaysy gets updated
        
        
    }
    render(){
        const{ robots, searchfield} = this.state;     // this is destructuring this.state so we dont have to use this.state
    }                                                 // it helps by reducing the complexity of our code
    render(){
        const filteredRobots = this.state.robots.filter(robot =>{              //this is how you access states
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());           //this is an array that checks if the content of the searchfield corresponds with a respective robotname
        })
        if (this.state.robots.lenghth === 0){
            return <h1>loading...</h1>
        }
        else{
            return(
            <div className='tc'>
                <h1 className= 'f1'>RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />       
                <Scroll >                                       {//Scroll isnt a self closing component, it is used to wrap componetns
                    }       
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>                            {//what happens here is the filteredRobots can now be accessed as a component to render and return in response to the state of the SearchBox
         }          </ErrorBoundry>
                </Scroll>
            </div>
            );

        }
        
    }
}

export default App;