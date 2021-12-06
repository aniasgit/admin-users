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

function getUsers(): Promise<User[]> {
  return fetch('/users.json', {
    headers : {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  })
  .then(function(response){
    return response.json();
  })
  .then(function(myJson) {
    myJson = myJson.map((user: User) => {
      user.hobbies = Array.from(new Set(user.hobbies));
      return user;
    });
    return myJson;
  });
}

export {getUsers};
export type {User};
