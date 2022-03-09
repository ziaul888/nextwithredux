const mongoose= require ("mongoose");

const dbConnect = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  mongoose
    .connect("mongodb://0.0.0.0:27017/bookit", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useFindAndModify: false,
      //useCreateIndex: true,
    })
    .then((con) => console.log("Connect to local database"));
};

export default dbConnect;
