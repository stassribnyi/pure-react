const PersonName = props => {
  return React.createElement('h4', { className: 'person__name' }, [
    React.createElement(
      'span',
      { key: props.first, className: 'person__first-name' },
      props.first
    ),
    ' ',
    React.createElement(
      'span',
      { key: props.last, className: 'person__last-name' },
      props.last
    )
  ]);
};

export const Person = props => {
  return React.createElement('div', { className: 'person' }, [
    React.createElement('img', {
      key: props.picture.thumbnail,
      src: props.picture.thumbnail,
      className: 'person__img'
    }),
    React.createElement(PersonName, { key: props.id.value, ...props.name }),
    React.createElement(
      'h4',
      { key: props.id.value + 1, className: 'person__email' },
      `Email: ${props.email}`
    )
  ]);
};
