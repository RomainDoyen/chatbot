const db = require("../db/knex");

const RequestModel = {
    getAll: async () => {
        return await db("requests").select("*");
    },

    create: async (data) => {
        const [id] = await db("requests").insert(data);
        return { id, ...data };
    },

    delete: async (id) => {
        return await db("requests").where({ id }).del();
    },

    update: async (id, data) => {
        await db("requests").where({ id }).update(data);
        return { id, ...data };
    },
};

module.exports = RequestModel;
