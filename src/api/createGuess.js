import { client, q } from "../config/db";

const createGuess = (guess) =>
  client
    .query(
      q.Create(q.Collection("guesses"), {
        data: {
          guess
        },
      })
    )
    .then((ret) => ret)
    .catch((err) => console.warn(err));

export default createGuess;
