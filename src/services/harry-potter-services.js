import axios from "axios";

export const getHouseCharacters = (house) => axios.get(`https://hp-api.onrender.com/api/characters/house/${house}`);

export const getSpells = () => axios.get('https://hp-api.onrender.com/api/spells');