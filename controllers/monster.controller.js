import { getMonstersFromRepository } from "../repositories/monster.repository.js";

export const getMonsters = async (req, res) => {
    try {
        const monsters = await getMonstersFromRepository();
        res.status(200).send(monsters);
    } catch (error) {
        res.status(500).send(error.message, "failed to fetch a list of monsters.")
    }
}
