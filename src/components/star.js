const selectStarValue = () => {
  
}

const Star = (props) => {
  return (
    <span className='rating' onClick={selectStarValue}>&#x2606;</span>
  )
}

export default Star;