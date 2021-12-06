type GenderType = 'male'|'female';

type User = {
  id: string,
  name: string,
  lastName: string,
  email: string,
  age: number,
  gender: GenderType,
  phoneNumber: string,
  address: string,
  dateOfBirth: string,
  hobbies: string[]
}

async function getUsers(): Promise<User[]> {

  let response = await fetch('/users.json', {
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  let myJson = await response.json();

  myJson.forEach((user: User) => {
    user.hobbies = Array.from(new Set(user.hobbies));
  });

  return myJson;
}

async function deleteUser(id: string): Promise<boolean> {
  console.log("Simulating delete operation for user.id="+id);
  return true;
}

async function updateUser(user: User): Promise<boolean> {
  console.log("Simulating updating operation for user.id="+user.id);
  return true;
}

const UsersService = {getUsers, deleteUser, updateUser};
export default UsersService;
export type {User};
