enum Emotion {
  BOOK = "book",
  SPEECH = "speech",
  VIDEO = "video",
}
interface Diary{
  id?: number;
  emotion: Emotion;
  title: string;
  content: string;
  regDate: Date;
}

const placeholderDiary:Diary = {
  id: -1,
  emotion: Emotion.VIDEO,
  title: "PLACEHOLDER",
  content: "sample",
  regDate: new Date("2024-02-11"),
}

function DiaryListItem(
  {diary: {emotion, title, regDate}}: {diary: Diary}
) {
  return (
    <>
    <div>{emotion.toString()}</div>
    <p>{title}</p>
    <p>{regDate.toLocaleString()}</p>
    </>
  );
}


export function DiaryListView() {
  return (
    <>
      <DiaryListItem diary={placeholderDiary} />
      <h3>^^ ITEMS 20211212</h3>
      <h3>^^ ITEMS 20211212</h3>
      <img src="/icons/book.png" alt="book" height="100px" />
      <img src="/icons/speech.png" alt="speech" height="100px" />
      <img src="/icons/video.png" alt="video" height="100px" />
    </>
  );
}
