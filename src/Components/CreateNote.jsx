import PropTypes from "prop-types";
import Heading from "./Common/Heading";
import InputField from "./Common/InputField";

CreateNote.propTypes = {
  title: PropTypes.string.isRequired,
  contentText: PropTypes.string.isRequired,
  onTitle: PropTypes.func.isRequired,
  onContentText: PropTypes.func.isRequired,
  onAddNote: PropTypes.func.isRequired,
};

function CreateNote({ title, onTitle, contentText, onContentText, onAddNote }) {
  function handleSubmitForm(e) {
    e.preventDefault();

    if (title.length === 0) return;

    const newNote = {
      id: crypto.randomUUID(),
      title,
      content: contentText,
    };

    // console.log(newNote);
    onAddNote(newNote);

    // Clear Values
    onTitle("");
    onContentText("");
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
            value={contentText}
            onChange={(e) => onContentText(e.target.value)}
            placeholder="Take a note"
          />
          <button
            className="bg-primary cursor-pointer self-center rounded-lg px-4 py-2 text-white"
            type="submit"
          >
            Save note
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateNote;
