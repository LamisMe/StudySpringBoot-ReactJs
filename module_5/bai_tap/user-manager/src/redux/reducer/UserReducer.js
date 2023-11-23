const userReducer = (users = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "GET_ALL_USER":
      console.log("ok");
      return payload;
    case "ADD_NEW_USER":
      return [...users, payload];
    case "REMOVE_USER":
      let temp = [...users];
      temp = temp.filter((value) => value.id !== payload);
      return temp;
    default:
      return users;
  }
};

export default userReducer;
