import { getMonstersFromRepository } from "../repositories/monster.repository.js";



// Need to implement the following:
// get/ => return all monsters (array of objects)
// get/id => return 1 specific monster (an object)
// patch/id => return 200 (return the object) or return 202 (return nothing)
// post/ => return 200 and the new object
// delete/id => return 204 (return nothing)


export const getMonsters = async (req, res) => {
    try {
        const monsters = await getMonstersFromRepository();
        res.status(200).send(monsters);
    } catch (error) {
        res.status(500).send(error.message, "failed to fetch a list of monsters.")
    }
}
