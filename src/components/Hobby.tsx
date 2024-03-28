const Hobby: React.FC<{ hobby: string }> = ({ hobby }) => {
  return (
    <>
      <h4>Hobby number</h4>
      <div>{hobby}</div>
      <div>lets rebase</div>
      <div>number</div>
    </>
  );
};

export default Hobby;
