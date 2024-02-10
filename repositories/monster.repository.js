import { Monster } from "../models/monster.model.js";

export const getMonstersFromRepository = async (query) => {
    try {
        const monsters = await Monster.find(query);
        return monsters;
    } catch (error) {
        throw new Error(error.message, "Error while fetching monsters from database.");
    }
}

export const createMonstersInRepository = async (monster) => {
    try {
        const newMonster = new Monster(monster);
        const savedMonster = await newMonster.save();
        // const newMonster = await Monster.create(monster);
        return newMonster;
    } catch (error) {
        throw new Error(error.message, "Error while creating a new monster in the database.");
    }
}

export const updateMonstersInRepository = async (query, monster) => {
    try {
        const updatedMonster = await Monster.findOneAndUpdate(
            { ...query },
            { ...monster },
            { new: true }
        ).lean(); // lean() returns a plain JavaScript object instead of a Mongoose document
        return updatedMonster;
    } catch (error) {
        throw new Error(error.message, "Error while updating a monster in the database.");
    }
}

export const deleteMonstersFromRepository = async (query) => {
    try {
        const deletedMonster = await Monster.findOneAndDelete({ ...query });
        return deletedMonster;
    } catch (error) {
        throw new Error(error.message, "Error while deleting a monster from the database.");
    }
}
