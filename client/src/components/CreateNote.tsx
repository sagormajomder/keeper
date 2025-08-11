import type { POST } from "../types/types";
import Button from "./common/Button";
import Heading from "./common/Heading";

type CreateNoteProps = {
  title: string;
  content: string;
  dispatch: React.Dispatch<{
    type: string;
    payload: POST | string;
  }>;
};

function CreateNote({ title, content, dispatch }: CreateNoteProps) {
  async function handleSubmitForm(e: React.FormEvent<HTMLFormElement>) {
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

    // await fetch("http://localhost:3000/app", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newNote),
    // });

    dispatch({ type: "note/created", payload: newNote });
  }

  return (
    <section className="mb-10">
      <Heading text="Write your note" styles="text-center mb-2" />
      <div className="flex w-full justify-center">
        <form
          action="http://localhost:3000/app"
          onSubmit={handleSubmitForm}
          className="flex flex-col gap-2 sm:basis-5/6 lg:basis-1/2"
        >
          <input
            className="bg-primary/10 focus:outline-primary/75 w-full rounded-lg px-4 py-3"
            type="text"
            value={title}
            placeholder="Enter note title"
            onChange={(e) =>
              dispatch({
                type: "note/titleAdded",
                payload: e.target.value,
              })
            }
          />
          <textarea
            className="bg-primary/10 focus:outline-primary/75 rounded-lg px-4 py-3"
            value={content}
            onChange={(e) =>
              dispatch({ type: "note/contentAdded", payload: e.target.value })
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
