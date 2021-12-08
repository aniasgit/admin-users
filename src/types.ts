type GenderType = 'male'|'female';

type Hobby = {
    id: string,
    name: string
}

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

type UserContextType = {
    usersData: User[],
    hobbyMap: Hobby[],
    getUser: (id: string) => User|undefined,
    updateUser: (user:User) => void,
    deleteUser: (id: string) => void
    deleteUsers: (users: User[]) => void
}

export type {Hobby, User, UserContextType};