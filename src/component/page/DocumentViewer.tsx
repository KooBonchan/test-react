import { styled } from 'styled-components';
import { Document } from '../../model/Document';
import Person from '../../model/Person';

function Card({title, category, description}: Document) {
  return (
    <div className="card">
      <strong>{title}</strong>
      <span style={{fontSize:'0.8em'}}>{category}</span>
      <p>{description}</p>
    </div>
  );
}


const BorderedItem = styled.li`
  border: 1px solid darkorchid;
  padding: 0 2px;
`
function PersonInfo({person}: {person:Person}){
  const {name, location, favorList = []} = person;
  return (
    <>
    <p>{name} Lives in {location}</p>
    <h2>Favorites</h2>
    <ul className="item-list">
      {favorList.map((item, index) => 
        <BorderedItem key={"item"+index}>{item}</BorderedItem>
      )}
    </ul>
    </>
  )
}

export function DocumentViewer(
  { counter, document: doc, person }: { counter?: number; document?: Document; person: Person; }) {

  return (
    <>
      <h2>BODY {counter}</h2>
      {counter && <h3>Parity: {counter % 2 === 0 ? 'even' : 'odd'}</h3>}
      {doc && <Card {...doc} />}

      <PersonInfo person={person} />
    </>
  );
}
