import type { POST } from "../types/types";
import Button from "./Common/Button";
import Heading from "./Common/Heading";
import InputField from "./Common/InputField";

type CreateNoteProps = {
  title: string;
  content: string;
  dispatch: React.Dispatch<{
    type: string;
    payload: POST | string;
  }>;
};

function CreateNote({ title, content, dispatch }: CreateNoteProps) {
  function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
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
    dispatch({ type: "addNote", payload: newNote });
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
            dispatch={dispatch}
          />
          <textarea
            className="bg-primary/10 focus:outline-primary/75 rounded-lg px-4 py-3"
            value={content}
            onChange={(e) =>
              dispatch({ type: "addNoteContent", payload: e.target.value })
            }
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
