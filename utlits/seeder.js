const Room = require("../models");

const room = require("../data/room");
const dbConnect = require("../config/dbConnect");

dbConnect();

const seedRooms = async () => {
  try {

      await Room.deleteMany();
      console.log('Rooms are deleted');

      await Room.insertMany(room);
      console.log('All Rooms are added.');

      process.exit()


  } catch (error) {
      console.log(error.message);
      process.exit()
  }
}

seedRooms()
