const App = () => {
  return React.createElement(
    'div',
    {
      className: 'App'
    },
    React.createElement('h1', null, 'Hello World!')
  );
};

ReactDOM.render(React.createElement(App), document.getElementById('root'));
