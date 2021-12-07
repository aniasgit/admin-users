import type {User} from '../types';

const getUsers = async (): Promise<User[]> => {

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

const deleteUser = async (id: string): Promise<boolean> => {
  console.log("Simulating delete operation for user.id="+id);
  return true;
}

const updateUser = async (user: User): Promise<boolean> => {
  console.log("Simulating updating operation for user.id="+user.id);
  return true;
}

const UsersService = {getUsers, deleteUser, updateUser};
export default UsersService;

