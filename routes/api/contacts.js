const express = require("express");
const contactsCtrl = require("../../controllers/contacts");

const router = express.Router();

router.get("/", contactsCtrl.getAll);

router.get("/:contactId", contactsCtrl.getById);

router.post("/", contactsCtrl.add);

router.delete("/:contactId", contactsCtrl.remove);

router.put("/:contactId", contactsCtrl.update);

module.exports = router;
