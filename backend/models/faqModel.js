const db = require("../db/knex");

const FAQModel = {
    getAll: async () => {
        return await db("faqs").select("*");
    },

    create: async (data) => {
        const [id] = await db("faqs").insert(data);
        return { id, ...data };
    },

    delete: async (id) => {
        return await db("faqs").where({ id }).del();
    },

    update: async (id, data) => {
        await db("faqs").where({ id }).update(data);
        return { id, ...data };
    },
};

module.exports = FAQModel;
