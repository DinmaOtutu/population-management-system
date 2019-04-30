import mongoose, { Schema } from 'mongoose';
import mongoosePaginate from 'mongoose-paginate';
import mongooseValidator from 'mongoose-unique-validator';

const LocationSchema = new Schema({
  location: {
    type: String,
    unique: true,
    required: true,
  },
  male: {
    type: Number,
    required: true,
  },
  female: {
    type: Number,
    required: true,
  },
  totalPopulation: {
    type: Number,
  },
  subLocation: {
    type: String
  }
}, {
  timeStamps: {
    createdAt: 'created_At', updatedAt: 'updated_At'
  }
});


LocationSchema.plugin(mongoosePaginate);
LocationSchema.plugin(mongooseValidator);
const Location = mongoose.model('Location', LocationSchema);

export default Location;
