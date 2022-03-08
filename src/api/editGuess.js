import { client, q } from "../config/db";

const editGuess = (guessId, newText) =>
  client
    .query(
      q.Update(q.Ref(q.Collection("guesses"), guessId), {
        data: { text: newText },
      })
    )
    .then((ret) => console.log(ret))
    .catch((err) => console.warn(err));

export default editGuess;
