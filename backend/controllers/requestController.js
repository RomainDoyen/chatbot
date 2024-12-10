const RequestModel = require("../models/requestModel");

const getAllRequests = async (req, res) => {
    try {
        const requests = await RequestModel.getAll();
        res.status(200).json(requests);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération des demandes." });
    }
};

const getRequestById = async (req, res) => {
    const { id } = req.params;

    try {
        const [request] = await RequestModel.getAll().where({ id });
        if (!request) {
            return res.status(404).json({ error: "Demande non trouvée." });
        }
        res.status(200).json(request);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération de la demande." });
    }
};

const createRequest = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: "Tous les champs sont obligatoires." });
    }

    try {
        const request = await RequestModel.create({ name, email, message });
        res.status(201).json(request);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la création de la demande." });
    }
};

const updateRequest = async (req, res) => {
    const { id } = req.params;
    const { name, email, message } = req.body;

    try {
        const updatedRequest = await RequestModel.update(id, { name, email, message });
        res.status(200).json(updatedRequest);
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la mise à jour de la demande." });
    }
};

const deleteRequest = async (req, res) => {
    const { id } = req.params;

    try {
        const rowsDeleted = await RequestModel.delete(id);
        if (!rowsDeleted) {
            return res.status(404).json({ error: "Demande non trouvée." });
        }
        res.status(200).json({ message: "Demande supprimée avec succès." });
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la suppression de la demande." });
    }
};

module.exports = { getAllRequests, getRequestById, createRequest, updateRequest, deleteRequest };
