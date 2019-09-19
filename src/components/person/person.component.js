export const Person = props => {
  return React.createElement(
    'div',
    { className: 'person' },
    React.createElement('h2', { className: 'person__name' }, [
      React.createElement(
        'span',
        { key: props.name.first, className: 'person__first-name' },
        props.name.first
      ),
      ' ',
      React.createElement(
        'span',
        { key: props.name.last, className: 'person__last-name' },
        props.name.last
      )
    ])
  );
};
