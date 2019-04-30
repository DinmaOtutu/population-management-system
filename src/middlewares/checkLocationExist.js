import Location from '../models/Location';
import BaseRepository from '../repositories/BaseRepository';

const checkLocation = async (req, res, next) => {
  const { location } = req.body;
  const check = await BaseRepository.findByField(Location, 'location', location);
  if (check.length) return res.status(400).json({ error: 'Location already exists!' });
  return next();
};

export default checkLocation;
