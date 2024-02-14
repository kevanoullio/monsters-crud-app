import {
    getMonstersFromRepository,
    getMonsterFromRepository,
    updateMonsterInRepository,
    deleteMonsterFromRepository,
    createMonsterInRepository
} from "../repositories/monster.repository.js";

export const getMonsters = async (response) => {
    try {
        const monsters = await getMonstersFromRepository();
        response.status(200).send(monsters);
    } catch (error) {
        console.log(error); // Log the entire error object for debugging
        response.status(500).send("Failed to fetch a list of monsters.")
    }
}

export const getMonster = async (request, response) => {
    const id = request.params.id; // or request.params
    try {
        const monster = await getMonsterFromRepository({ id: id });
        response.status(200).send(monster);
    } catch (error) {
        console.log(error); // Log the entire error object for debugging
        response.status(500).send(`Failed to fetch monster with id=${id}`)
    }
}

export const createMonster = async (request, response) => {
    const { body } = request;
    try {
        const newMonster = await createMonsterInRepository(body);
        response.status(200).send(newMonster);
    } catch (error) {
        console.log(error); // Log the entire error object for debugging
        response.status(500).send("Failed to create a new monster.")
    }
}

export const updateMonster = async (request, response) => {
    const id = request.params.id; // or request.params
    const { body } = request;
    try {
        const updatedMonster = await updateMonsterInRepository({ id: id }, body);
        response.status(200).send(updatedMonster);
    } catch (error) {
        console.log(error); // Log the entire error object for debugging
        response.status(500).send(`Failed to update monster with id=${id}.`)
    }
}

export const deleteMonster = async (request, response) => {
    const id = request.params.id; // or request.params
    try {
        const monster = await deleteMonsterFromRepository({ id: id });
        if (monster) {
            response.status(204).send();
        } else {
            response.status(404).send(`Monster with id=${id} not found.`);
        };
    } catch (error) {
        console.log(error); // Log the entire error object for debugging
        response.status(500).send(`Failed to delete monster with id=${id}.`)
    }
}
