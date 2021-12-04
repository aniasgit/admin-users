import type {User} from '../services/UsersService';
import type {Hobby} from '../services/HobbiesService';

function nameFilters(users: User[]) {
    let nameArray = users.map((user) => user.name+' '+user.lastName);
    nameArray = Array.from(new Set(nameArray));
    nameArray.sort();
    let nameFilters = [];
    nameFilters = nameArray.map((name) => ({text: name, value: name}));
    return nameFilters;
}

function onNameFilter (value: any, record: User) {
    return (record.name+' '+record.lastName) === value;
}
function emailFilters(users: User[]) {
    let emailArray = users.map((user) => user.email);
    emailArray = Array.from(new Set(emailArray));
    emailArray.sort();
    let emailFilters = [];
    emailFilters = emailArray.map((email) => ({text: email, value: email}));
    return emailFilters;
}

function onEmailFilter (value: any, record: User) {
    return record.email === value;
}

function ageFilters(users: User[]) {
    let ageArray = users.map((user) => user.age);
    ageArray = Array.from(new Set(ageArray));
    ageArray.sort();
    let ageFilters = [];
    ageFilters = ageArray.map((age) => ({text: age.toString(), value: age}));
    return ageFilters;
}

function onAgeFilter (value: any, record: User) {
    return record.age === value;
}

function hobbyFilters(hobbies: Hobby[]) {
    hobbies.sort((a, b) => a.name.localeCompare(b.name));
    let hobbyFilters = [];
    hobbyFilters = hobbies.map((hobby) => ({text: hobby.name, value: hobby.id}));
    return hobbyFilters;
}

function onHobbyFilter (value: any, record: User) {
    return record.hobbies.includes(value);
}

function dateFilters(users: User[]) {
    let dateArray = users.map((user) => user.dateOfBirth);
    dateArray = Array.from(new Set(dateArray));
    dateArray.sort();
    let dateFilters = [];
    dateFilters = dateArray.map((date) => ({text: date, value: date}));
    return dateFilters;
}

function onDateFilter (value: any, record: User) {
    return record.dateOfBirth === value;
}

function addressFilters(users: User[]) {
    let addressArray = users.map((user) => user.address);
    addressArray = Array.from(new Set(addressArray));
    addressArray.sort();
    let addressFilters = [];
    addressFilters = addressArray.map((address) => ({text: address, value: address}));
    return addressFilters;
}

function onAddressFilter (value: any, record: User) {
    return record.address === value;
}
export {nameFilters, onNameFilter, emailFilters, onEmailFilter, ageFilters, onAgeFilter, hobbyFilters, onHobbyFilter, dateFilters, 
    onDateFilter, addressFilters, onAddressFilter}
