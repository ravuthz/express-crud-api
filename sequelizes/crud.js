const express = require("express");

module.exports = (repository) => {
  
  console.log({ repository });

  const handleError = (res, error) => {
    res.status(500).send(error);
    console.log(error);
  };

  const handleResult = (res, data = {}) => {
    res.sendStatus(200).send(data);
    console.log(data);
  };

  const readList = (req, res) => {
    let query = res.locals.query || {};
    repository.findAll(query)
      .then((data) => handleResult(res, data))
      .catch((error) => handleError(res, error));
  };

  const readOne = (req, res) => {
    const {_id} = req.params;
    repository.findByPk(_id)
      .then((data) => handleResult(res, data))
      .catch((error) => handleError(res, error));
  };

  const create = (req, res) => {
    repository.save(req.body, null)
      .then(() => handleResult(res))
      .catch((error) => handleError(res, error));
  };

  const update = (req, res) => {
    repository.save(req.body, req.params._id)
      .then(() => handleResult(res))
      .catch((error) => handleError(res, error));
  };

  const remove = (req, res) => {
    repository.deleteByPK(req.params._id)
      .then(() => handleResult(res))
      .catch((error) => handleError(res, error));
  };

  let router = express.Router();

  router.post("/", create);
  router.get("/", readList);
  router.get("/:_id", readOne);
  router.put("/:_id", update);
  router.delete("/:_id", remove);

  return router;
};
