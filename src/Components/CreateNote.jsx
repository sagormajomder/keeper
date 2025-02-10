import PropTypes from "prop-types";
import Heading from "./Common/Heading";
import InputField from "./Common/InputField";
import Button from "./common/Button";

CreateNote.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  onTitle: PropTypes.func.isRequired,
  onContent: PropTypes.func.isRequired,
  onAddNote: PropTypes.func.isRequired,
};

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

    // console.log(newNote);
    onAddNote(newNote);

    // Clear Values
    onTitle("");
    onContent("");
  }

  return (
    <section className="mb-10">
      <Heading text="Write your note" style="text-center" />
      <div className="flex w-full justify-center">
        <form
          action=""
          onSubmit={handleSubmitForm}
          className="flex flex-col gap-2 sm:basis-5/6 lg:basis-1/2"
        >
          <InputField
            placeholder="Enter note title"
            title={title}
            onTitle={onTitle}
          />
          <textarea
            className="bg-primary/10 focus:outline-primary/75 rounded-lg px-4 py-3"
            value={content}
            onChange={(e) => onContent(e.target.value)}
            placeholder="Take a note"
          />
          <Button
            style="bg-primary cursor-pointer self-center rounded-lg px-4 py-2 text-white"
            type="submit"
          >
            Save Note
          </Button>
        </form>
      </div>
    </section>
  );
}

export default CreateNote;
