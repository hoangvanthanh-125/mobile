const UserModel = require("./../model/users.model");
class UserController {
  //put /user/id;
  updateUser = async (req, res) => {
    try {
      const data = req.body;
      if (data.email) {
        const user = await UserModel.findOne({ email: data.email });
        if (user) {
          return res.status(400).json({ message: "Email đã tồn tại" });
        }
      }
      const { id } = req.params;
      const updateUser = await UserModel.findOneAndUpdate({ _id: id }, data, {
        new: true,
      });
      if (!updateUser) {
        return res.status(400).json({ message: "update failed" });
      }
      res.status(200).json(updateUser);
    } catch (error) {
      res.status(500).json("Server error !!!");
    }
  };
}
module.exports = new UserController();
