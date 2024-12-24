import { styled } from 'styled-components';
import { Document } from '../../model/Document';
import Person from '../../model/Person';
import './DocumentViewer.css';

function DocumentCard({title, category, description}: Document) {
  return (
    <div className="document-card">
      <div className='title'>{title}</div>
      <div className='category'>{category.toUpperCase()}</div>
      <p className='description'>{description}</p>
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
    <h2>{name} Lives in {location}</h2>
    <h3>Favorites</h3>
    <ul className="item-list">
      {favorList.map((item, index) => 
        <BorderedItem key={"item"+index}>{item}</BorderedItem>
      )}
    </ul>
    </>
  )
}

export function DocumentViewer(
  { document: doc, person }: { document?: Document; person: Person; }) {

  return (
    <>
      {doc && <DocumentCard {...doc} />}

      <PersonInfo person={person} />
    </>
  );
}
