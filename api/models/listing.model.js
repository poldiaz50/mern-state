import mongoose from "mongoose";

const listingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    price: {
      type: Number,
      require: true,
    },
    regularPrice: {
      type: Number,
      require: true,
    },
    descountPrice: {
      type: Number,
      require: true,
    },
    bathRooms: {
      type: Number,
      require: true,
    },
    bedRooms: {
      type: Number,
      require: true,
    },
    furniShed: {
      type: Boolean,
      require: true,
    },
    parking: {
      type: Boolean,
      require: true,
    },
    type: {
      type: String,
      require: true,
    },
    offer: {
      type: Boolean,
      require: true,
    },
    imageUrls: {
      type: Array,
      require: true,
    },
    userRef: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

const Listing = mongoose.model("Listing", listingSchema);

export default Listing;
