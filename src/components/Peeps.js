import Peep from "./Peep";

const Peeps = ({ peeps }) => {
  return (
  <>
    {peeps.map((peep) => (
      <Peep key={peep.id} peep={peep}/>
    ))}
  </>
  );
};

export default Peeps;
