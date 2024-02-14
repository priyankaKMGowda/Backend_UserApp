const { v4: uuidv4 } = require("uuid");

// given Mock user data
const mockUsers = [
  {
    id: uuidv4(),
    name: "John Doe",
    email: "john@example.com",
    age: 30,
    city: "New York",
  },
  {
    id: uuidv4(),
    name: "Jane Smith",
    email: "jane@example.com",
    age: 28,
    city: "San Francisco",
  },
  {
    id: uuidv4(),
    name: "Mike Johnson",
    email: "mike@example.com",
    age: 35,
    city: "Chicago",
  },
  {
    id: uuidv4(),
    name: "Charlie Smith",
    email: "charlie@example.com",
    age: 32,
    city: "Canada",
  },
];

//!====================GET Request Controller======================
/* HTTP REQUEST GET
@ACCESS PUBLIC
@URL api/users
*/

exports.getAllUsers = async (req, res) => {
  try {
    res
      .status(200)
      .json({ message: "Successfully fetched all users..", mockUsers });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "SERVER ERROR" });
  }
};

//!====================POST Request Controller======================
/* HTTP REQUEST POST
@ACCESS PRIVATE
@URL api/users/add
*/

exports.createMockUsers = async (req, res) => {
  try {
    let { name, email, age, city } = req.body;

    //creating the newUser Data Object
    let newUserData = {
      id: uuidv4(),
      name,
      email,
      age,
      city,
    };

    //pushing the newMock userData into an array
    mockUsers.push(newUserData);

    //Deleting the first 5 elements if the array length exceeds 6
    if (mockUsers.length > 10) {
      mockUsers.splice(0, 2);
    }

    res
      .status(201)
      .json({ message: "Successfully user was created..", newUserData });
  } catch (error) {
    console.log(error);
    res.status(502).json({ message: "SERVER ERROR" });
  }
};
