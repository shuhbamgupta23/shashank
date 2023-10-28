import User from "../models/modal.js";

export const insert = async (req, res) => {
  const { Name, Age, Favoritefood } = req.body;
  try {
    const data = await User.create({ Name, Age, Favoritefood });
    return res.json(data);
  } catch (err) {
    console.log(err);
  }
};


