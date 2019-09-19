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
          { key: 'app', className: 'app__header' },
          'People list'
        ),
        React.createElement(
          'section',
          { key: 'app__people', className: 'app__people' },
          this.state.people.map((person) =>
            React.createElement(Person, { key: person.email, ...person })
          )
        )
      ]
    );
  }
}
