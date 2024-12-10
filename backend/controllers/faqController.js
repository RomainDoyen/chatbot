const FAQModel = require("../models/faqModel");

const getAllFAQs = async (req, res) => {
    try {
        const faqs = await FAQModel.getAll();
        res.status(200).json(faqs);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération des FAQs." });
    }
};

const getFAQById = async (req, res) => {
    const { id } = req.params;

    try {
        // @ts-ignore
        const [faq] = await FAQModel.getAll().where({ id });
        if (!faq) {
            return res.status(404).json({ error: "FAQ non trouvée." });
        }
        res.status(200).json(faq);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération de la FAQ." });
    }
};

const createFAQ = async (req, res) => {
    const { question, answer } = req.body;

    if (!question || !answer) {
        return res.status(400).json({ error: "La question et la réponse sont obligatoires." });
    }

    try {
        const faq = await FAQModel.create({ question, answer });
        res.status(201).json(faq);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la création de la FAQ." });
    }
};

const updateFAQ = async (req, res) => {
    const { id } = req.params;
    const { question, answer } = req.body;

    try {
        const updatedFAQ = await FAQModel.update(id, { question, answer });
        res.status(200).json(updatedFAQ);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la mise à jour de la FAQ." });
    }
};

const deleteFAQ = async (req, res) => {
    const { id } = req.params;

    try {
        const rowsDeleted = await FAQModel.delete(id);
        if (!rowsDeleted) {
            return res.status(404).json({ error: "FAQ non trouvée." });
        }
        res.status(200).json({ message: "FAQ supprimée avec succès." });
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la suppression de la FAQ." });
    }
};

module.exports = { getAllFAQs, getFAQById, createFAQ, updateFAQ, deleteFAQ };
