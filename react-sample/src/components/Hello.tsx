const Hello = () => {
  const onClick = () => {
    alert('hello');
  };

  const text = 'Hello, React';

  // Alert 기능
  return <div onClick={onClick}>{text}</div>;
};

export default Hello;
