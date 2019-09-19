export const Person = props => {
  return React.createElement(
    'h2',
    null,
    `${props.name.first} ${props.name.last}`
  );
};
