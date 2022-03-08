import { client, q } from "../config/db";

const deleteGuess = (guessRef) =>
  client
    .query(q.Delete(q.Ref(q.Collection("guesses"), guessRef)))
    .then((res) => res)
    .catch((err) => console.warn(err.message));

export default deleteGuess;
