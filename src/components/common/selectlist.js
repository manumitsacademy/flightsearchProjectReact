import React from 'react';


export default class SelectList extends React.Component {
    MakeItem = (i, index) => {
        return <option key={index} value={i.value}>{i.name}</option>;
    };
    render() {
        return (
            <select className="form-control"
                onChange={this.onSelectChange}>
                {this.props.list.map((item, index) => this.MakeItem(item, index))}
            </select>
        );
    }

    onSelectChange = (event) => {
        this.props.onSelectListChange(event.target.value);
    }
}