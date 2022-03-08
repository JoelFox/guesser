import { client, q } from "../config/db";

const createGuess = (text) =>
  client
    .query(
      q.Create(q.Collection("guesses"), {
        data: {
          text,
        },
      })
    )
    .then((ret) => ret)
    .catch((err) => console.warn(err));

export default createGuess;
