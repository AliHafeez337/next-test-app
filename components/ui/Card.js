// A card to display a job... styles can be found in _global.scss file

function Card(props) {
  let card = 
    <div className="card">
      { props.children }
    </div>

  return card;
}

export default Card;