import { getDb } from "../utility/db.js";
import { createToken } from "../utility/token.js";

const cookieConfig = {
  httpOnly: true,
  secure: true,
  sameSite: "none",
}

export const register = async (req, res) => {
  const db = await getDb();
  const result = await db.collection('users').insertOne(req.body);
  res.json(result);
}

export const login = async (req, res) => {
  const db = await getDb();
  const dbUser = await db.collection('users').findOne({ user: req.body.user, password: req.body.password });
// console.log(dbUser)
  if (!dbUser) {
    res.status(401).json({ message: "Invalid username or password" })
  }
    else {
      const token = createToken(dbUser._id);
      res.cookie("token", token, cookieConfig);
      res.json({ message: "Success" });
      console.log(token)
    }
}



/* export const logout = (req, res) => {
  res.clearCookie("token", cookieConfig);
  res.json({ message: "Success" });
} */
