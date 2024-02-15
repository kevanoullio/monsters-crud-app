import Monster from "../models/monster.model.js";

export const getMonstersFromRepository = async (query) => {
    try {
        const monsters = await Monster.find(query);
        return monsters || [];
    } catch (error) {
        if (error.message === "No monsters found in the database.")
            throw error;
        else {
            throw new Error(error.message, "Error while fetching monsters from database.");
        }
    }
}

export const getMonsterFromRepository = async (query) => {
    try {
        const monster = await Monster.findOne(query);

        if (!monster) {
            throw new Error("Monster not found in the database.");
        }

        return monster;
    } catch (error) {
        if (error.message === "Monster not found in the database.")
            throw error;
        else {
            throw new Error(error.message, "Error while fetching a monster from the database.");
        }
    }
}

export const createMonsterInRepository = async (payload) => {
    try {
        // Search and sort all monster IDs in ascending order
        const monsters = await getMonstersFromRepository();

        monsters.sort((a, b) => a.id - b.id);

        // Make the new monster ID the next number in the sequence
        const newId = monsters.length > 0 ? monsters[monsters.length - 1].id + 1 : 1;
        const monster = { ...payload, id: newId};
        
        // Create a new monster in the database
        const newMonster = new Monster(monster);
        const savedMonster = await newMonster.save();
        return savedMonster;
    } catch (error) {
        throw new Error(error.message, "Error while creating a new monster in the database.");
    }
}

export const updateMonsterInRepository = async (query, payload) => {
    try {
        // lean() returns a plain JavaScript object instead of a Mongoose document
        const monster = await Monster.findOne({ ...query }).lean(); 
        
        if (!monster) {
            throw new Error("Monster not found in the database.");
        }

        const updatedMonster = await Monster.findOneAndUpdate(
            { ...query },
            { ...payload },
            { new: true }
        ).lean(); // lean() returns a plain JavaScript object instead of a Mongoose document
        
        return updatedMonster;
    } catch (error) {
        if (error.message === "Monster not found in the database.")
            throw error;
        else {
            throw new Error("Error while updating a monster in the database.");
        }
    }
}

export const deleteMonsterFromRepository = async (query) => {
    try {
         // lean() returns a plain JavaScript object instead of a Mongoose document
        const monster = await Monster.findOne({ ...query }).lean(); 
        
        if (!monster || Object.keys(monster).length === 0) {
            throw new Error("Monster not found in the database.");
        }

        const deletedMonster = await Monster.findOneAndDelete({ ...query });
        
        return deletedMonster;
    } catch (error) {
        if (error.message === "Monster not found in the database.")
            throw error;
        else {
            throw new Error("Error while deleting a monster from the database.");
        }
    }
}
