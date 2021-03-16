const Star = (props) => {
  const { starValue, selectStarValue } = props;

  return (
    <span className={`rating ${starValue ? 'fill' : ''}`} onClick={selectStarValue}>&#x2606;</span>
  )
}

export default Star;