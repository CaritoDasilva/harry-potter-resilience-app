import { getHouseCharacters, getSpells } from "./harry-potter-services"

const failingPromise = Promise.reject(new Error("Hemos tenido problemas para traer la información. Vuelve a intentarlo"));
export const getDataDashboard = () => {
    return Promise.allSettled(
        [getHouseCharacters('slytherin'),
        getHouseCharacters('gryffindor'),
        getHouseCharacters('hufflepuff'),
        failingPromise,
        getSpells()]
    ).then(values => ({
        houses: {
            "slytherin": values[0].value?.data,
            "gryffindor": values[1].value?.data,
            "hufflepuff": values[2].value?.data,
            "ravenclaw": values[3].value?.data || { error: values[3].reason.message },
            "spells": values[4].value?.data
        }
    }))
    .catch(err => err)
}