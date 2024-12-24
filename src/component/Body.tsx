import { useState } from 'react';
import { Document } from '../model/Document';
import Person from '../model/Person';
import './Body.css';
import { Calculator } from './page/Calculator';
import { CounterPage } from './page/Counter';
import { DocumentViewer } from './page/DocumentViewer';
import { DocumentWriter } from './page/DocumentWriter';
import { TodoManager } from './page/TodoManager';


export function Body() {
  const baseDocument: Document = {
    title: 'Anonymous Vocal',
    category: 'vocal',
    description: 'Tell me who is your best musician.',
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
  const [page, setPage] = useState(3);
  
  return (
    <div className="body">
      <div className='nav'>
        {['View', 'Write', 'Calc', 'Todos', 'Count'].map((tabName, index) => (
          <button 
            key={'tab'+index}
            type="button"
            disabled = {page == index}
            aria-selected = {page == index}
            onClick={()=> {
              if(page != index) setPage(index)
            }}>
              {tabName}
          </button>
        ))}
      </div>
      {page === 0 && <DocumentViewer document={document} person={user} />}
      {page === 1 && <DocumentWriter onCommit={(document:Document) => {
        setPage(0);
        setDocument(document);
      }}/>}
      {page === 2 && <Calculator />}
      {page === 3 && <TodoManager />}
      {page === 4 && <CounterPage />}
    </div>
  );
}

