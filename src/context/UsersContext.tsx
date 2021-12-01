import { createContext, useEffect, useState} from "react";
import {getUsers} from '../services/UsersService';
import type {User} from '../services/UsersService';
import {getHobbies} from '../services/HobbiesService';
import type {Hobby} from '../services/HobbiesService';

export type UserContextType = {
    usersData: User[],
    hobbyMap: Hobby[]
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

    let context: UserContextType= {
        usersData,
        hobbyMap
    }

    return (
        <UsersContext.Provider value = {context}>
            {props.children}
        </UsersContext.Provider>
    );
}