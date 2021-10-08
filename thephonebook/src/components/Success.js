const Success = ({ message }) => {
  if (message === null) {
    return null;
  }
  return <div className="successfully">{message}</div>;
};

export default Success;
