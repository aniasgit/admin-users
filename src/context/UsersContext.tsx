import { createContext, useEffect, useState} from "react";
import {getUsers} from '../services/UsersService';
import type {User} from '../services/UsersService';
import {getHobbies} from '../services/HobbiesService';
import type {Hobby} from '../services/HobbiesService';

export type UserContextType = {
    usersData: User[],
    hobbyMap: Hobby[],
    getUser: (id: string) => User|undefined,
    updateUser: (user:User) => void,
    deleteUser: (id: string) => void
}

export const UsersContext = createContext<UserContextType>(undefined!);

export const UsersProvider = (props: any) => {

    const [usersData, setUsersData] = useState<User[]>([]);
    const [hobbyMap, setHobbyMap] = useState<Hobby[]>([]);

    useEffect(() => {
    getUsers()
        .then(setUsersData)
        .catch((err) => {
            console.log(err)
        })
    }, []);

    useEffect(() => {
    getHobbies()
        .then(setHobbyMap)
        .catch((err) => {
            console.log(err)
        })
    }, []);

    function getUser(id:string) {
        const found = usersData.find(elem => elem.id === id);
        return found;
    }

    function updateUser(changedUser:User) {
        const changedUsersData = usersData.map((user) => {
            if (user.id === changedUser.id) {
                return changedUser;
            }
            else return user;
        })
        setUsersData(changedUsersData);
    }

    function deleteUser(id: string) {
        let newUsersData = [];
        newUsersData = usersData.filter((user: User) => {
            return user.id !== id;
        });
        setUsersData(newUsersData);
    }

    let context: UserContextType= {
        usersData,
        hobbyMap,
        getUser,
        updateUser,
        deleteUser
    }

    return (
        <UsersContext.Provider value = {context}>
            {props.children}
        </UsersContext.Provider>
    );
}