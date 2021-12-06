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

export {getUsers};
export type {User};
