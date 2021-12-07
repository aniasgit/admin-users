import { createContext, useEffect, useState} from "react";
import UsersService from '../services/UsersService';
import type {Hobby, User, UserContextType} from '../types';
import { getMergedDataAsync } from "../utils/getMergeData";

export const UsersContext = createContext<UserContextType>(undefined!);

export const UsersProvider = (props: any) => {

    const [usersData, setUsersData] = useState<User[]>([]);
    const [hobbyMap, setHobbyMap] = useState<Hobby[]>([]);

    useEffect(() => {
        (async () => {
            const {hobbies, users} = await getMergedDataAsync();

            setUsersData(users);
            setHobbyMap(hobbies);
        })()
    }, []);

    const getUser = (id:string) => {
        const found = usersData.find(elem => elem.id === id);
        return found;
    }

    const updateUser = async (changedUser:User) => {
        let updateSuccessful = await UsersService.updateUser(changedUser);

        if (updateSuccessful) {

            const changedUsersData = usersData.map((user) => {
                if (user.id === changedUser.id) {
                    return changedUser;
                }
                else return user;
            })
            setUsersData(changedUsersData);
        }
    }

    const deleteUser = async (id: string) => {
        let deleteSuccessful = await UsersService.deleteUser(id);

        if (deleteSuccessful) {
            let newUsersData = [];
            newUsersData = usersData.filter((user: User) => {
                return user.id !== id;
            });
            setUsersData(newUsersData);
        }
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