export type DocumentCategory = 'guitar' | 'bass' | 'percussion' | 'vocal';
const documentCategory = new Set<string>([
  'guitar' , 'bass' , 'percussion' , 'vocal'
]);
function verifyCategory(category: string): boolean{
  return documentCategory.has(category);
}

export function verifyDocument(document: Document):boolean {
  return (
    document.title.length > 0 &&
    verifyCategory(document.category) &&
    document.description.length > 0
  );
}

export interface Document {
  title: string;
  category: DocumentCategory;
  description: string;
}