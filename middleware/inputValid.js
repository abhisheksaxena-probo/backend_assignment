exports.checkPostValidity = (req, res, next) => {
  const { Contract_Name, Description, Amount, User_Id } = req.body;
  let msg = "";
  if (!Contract_Name || Contract_Name === "") {
    msg += "please enter name of contract ";
  }
  if (!Description || Description === "") {
    msg += "please enter description of contract ";
  }
  if (!Amount || Amount <= 1 || Amount >= 10) {
    msg += "please enter valid amount of contract ";
  }
  if (!User_Id) {
    msg += "please enter user id ";
  }
  if (msg !== "") {
    return res.status(400).json({ message: msg });
  }
  next();
};
