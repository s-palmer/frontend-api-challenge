import { FaTimes } from 'react-icons/fa'
import React from 'react'
import ReactTimeAgo from 'react-time-ago'

const Peep = ( {peep} ) => {
  return (
    <div className="peep">
      <p><strong>{peep.user.handle}</strong> posted this: <ReactTimeAgo date={peep.created_at} locale="en"/></p>
      <h3>{peep.body} <FaTimes style={{ color: 'red', cursor: 'pointer' }} /></h3>
    </div>
  )
}

export default Peep
