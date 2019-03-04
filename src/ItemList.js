import React, {Component} from 'react'

class ItemList extends Component {
    render() {
        return(
            <ul>
                {this.props.items.map(item => <li>{item.name} - {item.price}$</li>)}
            </ul>
        );
    }
}

export default ItemList