import React, {Component} from 'react';
import './App.css';
import ItemList from './ItemList'
import axios from 'axios'

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.getItems = this.getItems.bind(this);
    }

    async getItems() {
        let result = await axios.get('http://localhost:8080/api/item');
        this.setState({
            ...this.state,
            items: result.data
        })
    }

    async addItem(item) {
        let result = await axios.post('http://localhost:8080/api/item', item);
        this.state.items.push(result.data);
        this.setState({
            ...this.state
        })
    }

    componentDidMount() {
        this.getItems();
    }

    render() {
        return (
            <div className="App">
                {/*<AddItem/>*/}
                <ItemList items={this.state.items}/>
            </div>
        );
    }
}

export default App;
