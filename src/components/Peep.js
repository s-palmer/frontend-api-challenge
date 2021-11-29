const Peep = ( {peep} ) => {
  return (
    <div className="peep">
      <h3>{peep.body}</h3>
      <p>{peep.user.handle}</p>
    </div>
  )
}

export default Peep
