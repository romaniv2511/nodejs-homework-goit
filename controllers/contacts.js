const contacts = require("../models/contacts");
const { HttpError } = require("../helpers");

const getAll = async (req, res, next) => {
  try {
    console.log("result");
    const result = await contacts.listContacts();
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const getById = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.getContactById(contactId);

    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const add = async (req, res, next) => {
  try {
    const result = await contacts.addContact(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
};
const remove = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId);

    if (!result) {
      throw HttpError(404);
    }
    res.json({ message: "Contact delete" });
  } catch (error) {
    next(error);
  }
};
const update = async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const result = await contacts.updateContact(contactId, req.body);
    if (!result) {
      throw HttpError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAll,
  getById,
  add,
  remove,
  update,
};
