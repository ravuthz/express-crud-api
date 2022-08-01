module.exports = (Model) => {

  const save = (data, id = null) => {
    return (id != null)
      ? Model.update(data, {where: {id}})
      : Model.create(data);
  };

  const findAll = (query) => {
    return Model.findAll(query);
  };

  const findOne = (field) => {
    return Model.findOne({where: field});
  };

  const findByPK = (id) => {
    return Model.findByPk(id);
  };

  const deleteOne = (field) => {
    return Model.destroy({where: field});
  };

  const deleteByPK = (id) => {
    return Model.destroy({where: {id}});
  };
  
  return {
    save,
    findAll,
    findOne,
    findByPK,
    deleteOne,
    deleteByPK
  };
};