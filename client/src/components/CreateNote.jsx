import Button from "./common/Button";
import Heading from "./common/Heading";

function CreateNote({ title, onTitle, content, onContent, onAddNote }) {
  function handleSubmitForm(e) {
    e.preventDefault();

    if (!title && !content) {
      alert("Please enter title or note");
      return;
    }

    const newNote = {
      id: crypto.randomUUID(),
      title,
      content,
    };

    onAddNote(newNote);

    // Clear Values
    onTitle("");
    onContent("");
  }

  return (
    <section className="mb-10">
      <Heading text="Write your note" style="text-center mb-2" />
      <div className="flex w-full justify-center">
        <form
          action=""
          onSubmit={handleSubmitForm}
          className="flex flex-col gap-2 sm:basis-5/6 lg:basis-1/2"
        >
          <input
            type="text"
            placeholder="Enter note title"
            value={title}
            className="bg-primary/10 focus:outline-primary/75 w-full rounded-lg px-4 py-3"
            onChange={(e) => onTitle(e.target.value)}
          />
          <textarea
            className="bg-primary/10 focus:outline-primary/75 rounded-lg px-4 py-3"
            value={content}
            onChange={(e) => onContent(e.target.value)}
            placeholder="Take a note"
          />
          <Button style="self-center rounded-lg px-4 py-2" type="submit">
            Save Note
          </Button>
        </form>
      </div>
    </section>
  );
}

export default CreateNote;
