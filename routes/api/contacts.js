const express = require("express");
const contactsCtrl = require("../../controllers/contacts");
const { validateBody } = require("../../middlewares");
const schemas = require("../../schemas/contacts");

const router = express.Router();

router.get("/", contactsCtrl.getAll);

router.get("/:contactId", contactsCtrl.getById);

router.post("/", validateBody(schemas.addSchema), contactsCtrl.add);

router.delete("/:contactId", contactsCtrl.remove);

router.put(
  "/:contactId",
  validateBody(schemas.addSchema),
  contactsCtrl.updateById
);

module.exports = router;
