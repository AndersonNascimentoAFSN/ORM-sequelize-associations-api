const { Book, User } = require('../models');

const findBooksForUserPk = async (id) => {
  const user = await User.findOne({
    where: { userId: id },
    include: [{ model: Book, as: 'books', through: { attributes: [] }}]
  });

  return user;
}

module.exports = {
  findBooksForUserPk,
}