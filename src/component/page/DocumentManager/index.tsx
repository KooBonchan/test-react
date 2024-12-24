import { useState } from 'react';
import { Document } from '../../../model/Document';
import { DocumentViewer } from "./DocumentViewer";
import { DocumentWriter } from "./DocumentWriter";
import Person from '../../../model/Person';

export default function DocumentManager(){
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

  return (
  <>
    <DocumentWriter onCommit={setDocument}/>
    <DocumentViewer
      document={document}
      person={user}
    />
  </>);
}