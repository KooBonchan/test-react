import { Document, DocumentCategory, verifyDocument } from '../../model/Document';

export function DocumentWriter({ onCommit }: { onCommit: (d: Document) => void; }) {
  return (
    <>
      <h3>Write Your Document</h3>
      <form onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.target as HTMLFormElement);

        const data: Document = {
          title: formData.get('title') as string,
          category: formData.get('category') as DocumentCategory,
          description: formData.get('description') as string,
        };
        if (verifyDocument(data)) {
          onCommit(data);
        }
        else {
          alert('Invalid Document');
        }

      }} className="form-write-document">
        <input type="text" placeholder="title" name="title" required /><br />
        <select name="category">
          <option value="guitar">GUITAR</option>
          <option value="bass">BASS</option>
          <option value="percussion">PERCUSSION</option>
          <option value="vocal">VOCAL</option>
        </select><br />
        <textarea name="description" placeholder="Write your document" required /><br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
