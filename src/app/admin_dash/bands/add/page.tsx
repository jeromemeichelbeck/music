import { addBand } from "@/app/bands/actions";

export default function AddBandPage() {
  return (
    <div>
      <h1>Add Band</h1>

      <form action={addBand}>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

        <div>
          <label htmlFor="description">Description</label>
          <textarea id="description" name="description" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
