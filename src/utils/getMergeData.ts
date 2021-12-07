import {getHobbies} from '../services/HobbiesService';
import UsersService from '../services/UsersService';

export const getMergedDataAsync = async () => {
    const hobbies = await getHobbies();
    const users = await UsersService.getUsers();

    return {hobbies, users}
}