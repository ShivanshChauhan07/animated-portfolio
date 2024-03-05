const CardItems = ({ name, logo }) => {
  return (
    <div className="cardItems">
      <img src={logo} alt="" />
      <h5>{name}</h5>
    </div>
  );
};

export default CardItems;
