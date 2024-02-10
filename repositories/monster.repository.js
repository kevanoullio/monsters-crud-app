import { Monster } from '../models/monster.model';

export const getMonstersFromRepository = async (query) => {
    try {
        const monsters = await Monster.find(query);
        return monsters;
    } catch (error) {
        throw new Error(error.message, "Error while fetching monsters from database.");
    }
}
