import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    avatar: {
      type: String,
      default: "https://avatars.mds.yandex.net/i?id=207a136a3829d6e794eb3e115b29815ee5a55eed-8514130-images-thumbs&n=13"
    }
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;