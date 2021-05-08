const express = require("express");
const router = express.Router();
const { Users } = require("../models");

router.get("/", async (req, res) => {
  const listOfUsers = await Users.findAll();
  res.json(listOfUsers);
});

router.get("/byId/:id", async (req, res) => {
  const id = req.params.id;
  const user = await Users.findByPk(id);
  res.json(user);
});

router.post("/", async (req, res) => {
  const post = req.body;
  await Users.create(post);
  res.json(post);
});

router.delete("/:userID", async (req, res) => {
  const userID = req.params.userID;
  await Users.destroy({
    where:{
      id:userID,
    },
  })
  res.json("USER DELETED SUCCESFULLY");
});





module.exports = router;
