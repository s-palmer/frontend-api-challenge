// import { useState } from "react";

const AddPeep = ( { onAdd }) => {
  // const [text, setText] = useState('');

  // const onSubmit = (event) => {
  //   event.preventDefault();

  //   if (!text) {
  //     alert('Please add your peep')
  //     return
  //   }

  //   onAdd( { text })
  //   setText('')

  // };

  return (
    <form className="add-form">
      <div className="form-control">
        <label>Peep</label>
        <input type="text" placeholder="Write Peep"/>
      </div>

      <input type="submit" className="btn btn-block" value="Post Peep" />
    </form>
  )
}

export default AddPeep