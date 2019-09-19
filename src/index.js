const Person = props => {
  return React.createElement(
    'h2',
    null,
    `${props.name.first} ${props.name.last}`
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    };
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(response => response.json())
      .then(data => data.results)
      .then(people => this.setState({ people }));
  }

  render() {
    return React.createElement(
      'main',
      {
        className: 'App'
      },
      [
        React.createElement('h1', { key: 0 }, 'Hello World!'),
        this.state.people.map((person, i) =>
          React.createElement(Person, { key: i + 1, ...person })
        )
      ]
    );
  }
}

ReactDOM.render(React.createElement(App), document.getElementById('root'));
