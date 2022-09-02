import Database from'../../../database/db';
import { NextApiRequest, NextApiResponse } from 'next';

const allAvos = async (req = NextApiRequest, res = NextApiResponse) => {
    const id = req.query.id

    const avo = await Database.getById(id);
    res.status(200).json(avo);
};

export default allAvos