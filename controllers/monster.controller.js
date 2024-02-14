import {
    getMonstersFromRepository,
    getMonsterFromRepository,
    updateMonsterInRepository,
    deleteMonsterFromRepository,
    createMonsterInRepository
} from "../repositories/monster.repository.js";

export const getMonsters = async (request, response) => {
    try {
        const monsters = await getMonstersFromRepository();
        // console.log(monsters); // Debugging
        response.status(200).send(monsters);
    } catch (error) {
        response.status(500).send(error.message, "Failed to fetch a list of monsters.")
    }
}

export const getMonster = async (request, response) => {
    const id = request.params.id; // or request.params
    try {
        const monster = await getMonsterFromRepository({ id: id });
        // console.log("ID:", id); // Debugging
        // console.log(monster); // Debugging
        response.status(200).send(monster);
    } catch (error) {
        response.status(500).send(error.message, `Failed to fetch monster ${id}.`)
    }
}

export const createMonster = async (request, response) => {
    const { body } = request;
    try {
        const newMonster = await createMonsterInRepository(body);
        // console.log("Body:", body); // Debugging
        // console.log(newMonster); // Debugging
        response.status(200).send(newMonster);
    } catch (error) {
        response.status(500).send(error.message, "Failed to create a new monster.")
    }
}

export const updateMonster = async (request, response) => {
    const id = request.params.id; // or request.params
    const { body } = request;
    try {
        const updatedMonster = await updateMonsterInRepository({ id: id }, body);
        // console.log("id:", id); // Debugging
        // console.log("Body:", body); // Debugging
        // console.log("Updated Monster:", updatedMonster); // Debugging
        response.status(200).send(updatedMonster);
    } catch (error) {
        response.status(500).send(error.message, `Failed to update monster ${id}.`)
    }
}

export const deleteMonster = async (request, response) => {
    const id = request.params.id; // or request.params
    try {
        const monster = await deleteMonsterFromRepository({ id: id });
        // console.log(monster); // Debugging
        if (monster) {
            response.status(204).send();
        } else {
            response.status(404).send(error.message, `Monster ${id} not found.`);
            response.status(404).send(`Monster ${id} not found.`);
        } ;
    } catch (error) {
        response.status(500).send(error.message, `Failed to delete monster ${id}.`)
    }
}
