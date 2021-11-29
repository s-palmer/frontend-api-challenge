const Peep = ( {peep} ) => {
  return (
    <div>
      <h3>{peep.body}</h3>
      <p>{peep.user.handle}</p>
    </div>
  )
}

export default Peep
