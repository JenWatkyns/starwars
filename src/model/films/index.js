const filmsModel = (data) => data.results?.map((film) => ({
  title: film.title,
  id: film.episode_id,
  characters: film.characters,
  openingCrawl: film.opening_crawl,
}));

export default filmsModel;
