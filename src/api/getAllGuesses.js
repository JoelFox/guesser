import { client, q } from "../config/db";

const getAllNotes = () => {


  console.log(client);

  // let allDocuments = client.query(
  //   q.Map(
  //     q.Paginate(q.Documents(q.Collection("guesses"))),
  //     q.Lambda("X", q.Get(q.Var("X")))
  //   )
  // )

  return client
    .query(q.Paginate(q.Match(q.Ref("indexes/all_guesses"))))
    .then((response) => {
      const guessesRefs = response.data;
      // create new query out of notes refs.
      // https://docs.fauna.com/fauna/current/api/fql/
      const getAllGuessesQuery = guessesRefs.map((ref) => {
        return q.Get(ref);
      });
      // query the refs
      return client.query(getAllGuessesQuery).then((data) => data);
    })
    .then((ret) => {
      return ret.map(x => x.data.guess);
    })
    .catch((error) => console.warn("error", error.message));
}
export default getAllNotes;
