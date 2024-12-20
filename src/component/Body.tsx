import './Body.css';
import { Document } from '../model/Document';
import Person from '../model/Person';
import { Calculator } from './page/Calculator';
import { useState } from 'react';
import { DocumentViewer } from './page/DocumentViewer';
import { DocumentWriter } from './page/DocumentWriter';
import { Greet } from './page/Greet';
import { Counter } from './page/Counter';


export function Body() {
  const baseDocument: Document = {
    title: 'Lorem Ipsum',
    category: 'vocal',
    description: 'Victorum. Quod autem in homine praestantissimum atque optimum est, id deseruit. Quod quidem nobis non saepe contingit.',
  };
  const [document, setDocument] = useState<Document>(baseDocument);
  const user: Person = {name: 'John', location: 'USA',
    favorList: [
      'Fender','Gibson','Ibanez','Music Man','Rickenbacker',
      'Yamaha','Warwick','Epiphone','Schecter','Gretsch',
      'ESP','Spector','Peavey','Cort','Ernie Ball',
      'Dingwall','Sandberg','Modulus','Lakland','Charvel',
    ],
  };
  
  const [page, setPage] = useState(4);
  return (
    <div className="body">
      <div className='nav'>
        {['View', 'Write', 'Calc', 'Greet', 'Count'].map((tabName, index) => (
          <button 
            key={'tab'+index}
            type="button"
            onClick={()=> {
              if(page != index) setPage(index)
            }}>
              {tabName}
          </button>
        ))}
      </div>
      {page === 0 && <DocumentViewer counter={157} document={document} person={user} />}
      {page === 1 && <DocumentWriter onCommit={setDocument}/>}
      {page === 2 && <Calculator />}
      {page === 3 && <Greet />}
      {page === 4 && <Counter />}
    </div>
  );
}
