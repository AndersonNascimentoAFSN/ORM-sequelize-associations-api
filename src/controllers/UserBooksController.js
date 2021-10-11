const UserBooksService = require('../services/UserBooksService');

const findBooksForUserPk = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await UserBooksService.findBooksForUserPk(id);
  
    if(!user) return res.status(404).json({ message: 'User not found' });

    return res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e.message });
  }
}

module.exports = {
  findBooksForUserPk,
}