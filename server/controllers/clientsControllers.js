import Client from '../models/Client.js';
import ApiFeatures from '../utils/ApiFeatures.js';
import AppError from '../utils/AppError.js';

const getAllClients = async (req, res, next) => {
  try {
    const features = new ApiFeatures(Client.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    const clients = await features.query;

    res.status(200).json({
      status: 'success',
      results: clients.length,
      data: { clients },
    });
  } catch (err) {
    next(err);
  }
};

const getClientById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const client = await Client.findById(id);

    if (!client) throw new AppError('No Client with that ID', 404);

    res.status(200).json({
      status: 'success',
      data: { client },
    });
  } catch (err) {
    next(err);
  }
};

const createClient = async (req, res, next) => {
  try {
    const newClient = await Client.create(req.body);

    res.status(201).json({
      status: 'success',
      data: { client: newClient },
    });
  } catch (err) {
    next(err);
  }
};

const updateClientById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const client = await Client.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!client) throw new AppError('No Client with that ID', 404);

    res.status(200).json({
      status: 'success',
      data: { client },
    });
  } catch (err) {
    next(err);
  }
};

const deleteClientById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const client = await Client.findById(id);

    if (!client) throw new AppError('No Client with that ID', 404);

    await Client.deleteOne(client);
    res.status(200).json({
      status: 'success',
      message: 'Tour deleted successfully...',
    });
  } catch (err) {
    next(err);
  }
};

export {
  getAllClients,
  createClient,
  getClientById,
  updateClientById,
  deleteClientById,
};
