const MeiliSearch = require("meilisearch");
const movies = require("./movies.json");

const client = new MeiliSearch({
  host: "http://localhost:7700",
  apiKey: "coucou",
});

(async () => {
  const index = await client.getOrCreateIndex("movies");
  console.log(await client.getKeys());
  // await index.addDocuments(movies);
})();
