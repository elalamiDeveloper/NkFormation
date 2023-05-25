import Client from '../models/Client.js';
import ApiFeatures from '../utils/ApiFeatures.js';

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

export { getAllClients };
