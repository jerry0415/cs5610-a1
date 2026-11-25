import { v4 as uuidv4 } from "uuid";

export default function UsersDao(db) {
  let { users } = db;
  const findUserByCredentials = (username, password) =>
    users.find(
      (user) => user.username === username && user.password === password,
    );

  const createUser = (user) => {
    const newUser = { ...user, _id: uuidv4() };
    users = [...users, newUser];
    return newUser;
  };
  const findUserByUsername = (username) =>
    users.find((user) => user.username === username);

  const findUserById = (userId) => users.find((user) => user._id === userId);
  const updateUser = (userId, user) =>
    (users = users.map((u) => (u._id === userId ? user : u)));

  return {
    findUserByCredentials,
    createUser,
    findUserByUsername,
    findUserById,
    updateUser,
  };
}
