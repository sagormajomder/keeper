import type { SyntheticEvent } from "react";
import type { CreateNoteProps } from "../types/types";
import Button from "./Common/Button";
import Heading from "./Common/Heading";
import InputField from "./Common/InputField";

function CreateNote({
  title,
  onTitle,
  content,
  onContent,
  onAddNote,
}: CreateNoteProps) {
  function handleSubmitForm(e: SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!title && !content) {
      alert("Please enter title or note");
      return;
    }

    const newNote = {
      id: crypto.randomUUID(),
      title,
      content,
      date: new Date().getTime(),
    };

    // console.log(newNote);
    onAddNote(newNote);

    // Clear Values
    onTitle("");
    onContent("");
  }

  return (
    <section className="mb-10">
      <Heading text="Write your note" styles="text-center mb-2" />
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
          <Button type="submit" styles="self-center rounded-lg px-4 py-2">
            Save Note
          </Button>
        </form>
      </div>
    </section>
  );
}

export default CreateNote;
