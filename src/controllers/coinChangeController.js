import coinChangeModel from '../models/coinChangeModel.js';

export default function coinChangeController(req, res) {
    const { X, arr } = req.body;
    try {
        return res.status(200).json(coinChangeModel(X, arr));
    } catch (error) {
        return res.status(500).json({ error: "Internal Server Error"});  
    }
}