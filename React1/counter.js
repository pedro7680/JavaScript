class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = { count:0};
    }

    incrementCount() { // callback function
    this.setState({count: this.state.count+1});
}

render() { 
    return (
        <div> Count: { this,this.state.count }
        
        <button type="button" onClick={ this.incrementCount.bind(this) } > Increment</button>
        
        </div>
    );
}
} ;