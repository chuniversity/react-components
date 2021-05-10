



class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bold: false
    }
  }
  onGroceryListItemHover() {
    this.setState({
      bold: !this.state.bold
    });
  }

  render() {
    var style = {
      fontWeight: this.state.bold ? 'bolder' : 'normal'
    };

    return (
      <ul>
        <li style={style} onMouseOver={this.onGroceryListItemHover.bind(this)}>{this.props.item}</li>
      </ul>
    );
  }
}

var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);



var App = () => (
  <GroceryList items={['Cucumber', 'Kale']} />
);

ReactDOM.render(<App />, document.getElementById('app'));