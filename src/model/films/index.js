const filmsModel = (data) => {
    return data.results?.map((film) => ({
        title: film.title,
        id: film.episode_id,
        characters: film.characters,
        openingCrawl: film.opening_crawl,
    }))
}


export default filmsModel;
