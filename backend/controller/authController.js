import { getDb } from "../utility/db.js";
import { createToken } from "../utility/token.js";

const cookieConfig = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
}

export const register = async (req, res) => {
  const db = await getDb();
  const { username, password, role } = req.body;
  const result = await db.collection('users').insertOne(req.body);
  res.json(result);
}

export const login = async (req, res) => {
  const db = await getDb();
  const dbUser = await db.collection('users').findOne({ username: req.body.username, password: req.body.password});
  console.log(dbUser)
  if (!dbUser) {
    res.status(401).json({ message: "Invalid username or password" })
  }
    else {
      const token = createToken({_id: dbUser._id, role: dbUser.role});
      res.cookie("token", token, cookieConfig);
      res.json({ message: "Success" });
      console.log(token)
    }
}



/* export const logout = (req, res) => {
  res.clearCookie("token", cookieConfig);
  res.json({ message: "Success" });
} */
