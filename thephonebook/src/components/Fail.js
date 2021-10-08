const Fail = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <div className="failed">{message}</div>;
};

export default Fail;
