import { Person } from './components/index.js';

export class App extends React.Component {
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
        className: 'app'
      },
      [
        React.createElement(
          'h1',
          { className: 'app__header', key: 0 },
          'People list'
        ),
        React.createElement(
          'section',
          { className: 'app__people' },
          this.state.people.map((person, i) =>
            React.createElement(Person, { key: i + 1, ...person })
          )
        )
      ]
    );
  }
}
