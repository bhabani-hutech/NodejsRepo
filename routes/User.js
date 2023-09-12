const express = require("express");
const router = express.Router();

const users = {
  HTS001: {
    companyid: "HTS",
    name: "Laxmi",
    dept: "UX",
  },
  HTS002: {
    companyid: "HTS",
    name: "Samir",
    dept: "UX",
  },
  HTS003: {
    companyid: "HTTTTTS",
    name: "Suman",
    dept: "BA",
  },
};

//get all users
router.get("/", (req, res) => {
  res.send({ users });
});

//get user by Id
router.get("/:id", (req, res) => {
  const dataId = req.params.id;
  console.log(users[dataId]);
  res.send(users[dataId]);
});

//
router.get("/:id/:compid", (req, res) => {
  const dataId = req.params.id;
  console.log(users[dataId].companyid);
  res.send(users[dataId][companyid]);
});
//created user

module.exports = router;
