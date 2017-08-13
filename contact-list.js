let contacts = {};

contacts.chris = {
  firstName: "Chris",
  lastName: "Awram",
  number: "(604) 888-8888",
};
contacts.john = {
  firstName: "John",
  lastName: "Smith",
  number: "(604) 777-777",
};

const list = function(obj) {
  for (var prop in obj) {
    console.log(prop);
  }
};

const search = function(name) {
  for(var prop in contacts) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    } else {
      return "Name not found."
    }
  }
};

const addContact = function(firstName, lastName, phoneNumber) {
  contacts[contacts.length] = {
    firstName: firstName,
    lastName: lastName,
    phoneNumber: phoneNumber
  }
};

list(contacts);
search("Chris");
