import { Document, DocumentCategory, verifyDocument } from '../../../model/Document';



export function DocumentWriter({ onCommit }: { onCommit: (d: Document) => void; }) {
  const onFormSubmit:React.FormEventHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const form = e.target as HTMLFormElement;
    const data: Document = {
      title: (formData.get('title') as string)
              .substring(0,20),
      category: formData.get('category') as DocumentCategory,
      description: (formData.get('description') as string)
                    .substring(0, 1000),
    };

    if (verifyDocument(data)) {
      form.reset();
      onCommit(data);
    }
  };

  return (
    <>
      <h3>Write Your Document</h3>
      <form onSubmit={onFormSubmit} className="form-write-document">
        <input type="text" placeholder="title" name="title" required /><br />
        <select name="category">
          <option value="vocal">VOCAL</option>
          <option value="guitar">GUITAR</option>
          <option value="bass">BASS</option>
          <option value="percussion">PERCUSSION</option>
        </select><br />
        <textarea name="description" placeholder="Write your document" required /><br />
        <input type="submit" value="submit" />
      </form>
    </>
  );
}
