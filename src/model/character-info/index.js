const characterInfoModel = (character) => ({
  name: character.name,
  gender: character.gender,
  height: Number(character.height),
});

export default characterInfoModel;
