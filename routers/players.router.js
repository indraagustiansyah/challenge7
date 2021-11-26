const router = require("express").Router();
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const {
  viewHome,
  viewRegister,
  viewRoom,
  viewPlay,
} = require("../controllers/players.controller");
const UserRooms = require("../models/create-rooms.model");

router.get("/home", viewHome);

router.get("/register", viewRegister);

router.get("/join-room", viewRoom);

router.get("/room/(:id)", function (req, res, next) {
  let id = req.params.id;
  console.log(id);
  return res.render("main", { id });
});

router.post("/ajax", async function (req, res) {
  let player = req.body.player;
  let room = req.body.room;
  var isRoom = await UserRooms.findOne({
    where: { room_name: room },
  });
  if (!isRoom) {
    throw {
      code: 400,
      messenge: "failed",
      error: "bad request",
    };
  }
  var isPlayer1 = isRoom.playerone;
  var isPlayer2 = isRoom.playertwo;
  let isHow = "";
  if (isPlayer1.length == 0 && isPlayer2.length == 0) {
    await UserRooms.update(
      {
        playerone: player,
      },
      {
        where: { room_name: room },
      }
    );
    isHow = "playerone";
  } else {
    await UserRooms.update(
      {
        playertwo: player,
      },
      {
        where: { room_name: room },
      }
    );
    isHow = "playertwo";
  }

  res.send({ player, isHow });
});

router.post("/pilih", async function (req, res) {
    const { namaplayer , room, player, pilih } = req.body;
    if (player === "playerone") {
      await UserRooms.update(
        {
          pilihan1 : pilih,
        },
        {
          where: { room_name: room },
        }
      );
     
    } else {
      await UserRooms.update(
        {
          pilihan2: pilih,
        },
        {
          where: { room_name: room },
        }
      );
      isHow = "playertwo";
    }
    var isRoom = await UserRooms.findOne({
        where: { room_name: room },
      });
     
    var cek=''
    if(isRoom.pilihan1.length==0 || isRoom.pilihan2.length==0){
        cek ='menunggu player lainnya pilih'
    }
    if(isRoom.pilihan1.length>0 && isRoom.pilihan2.length>0){
        cek = 1
    }
    
    var pilihan1=isRoom.pilihan1
    var pilihan2=isRoom.pilihan2
    var player1=isRoom.playerone
    var player2=isRoom.playertwo
    res.send({ player1, player2,pilihan1, pilihan2, cek });
  });
  
module.exports = router;
