import {Table, Tag} from 'antd';
import {useEffect, useState} from  'react';
import {getUsers} from './services/UsersService';
import type {User} from './services/UsersService';
import {getHobbies} from './services/HobbiesService';
import type {Hobby} from './services/HobbiesService';

function App() {
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

  const columns = [
    {
      key: '1',
      title: 'Name',
      dataIndex: 'name'
    },
    {
      key: '2',
      title: 'Last name',
      dataIndex: 'lastName'
    },
    {
      key: '3',
      title: 'Email',
      dataIndex: 'email'
    },
    {
      key: '4',
      title: 'Gender',
      dataIndex: 'gender'
    },
    {
      key: '5',
      title: 'Age',
      dataIndex: 'age'
    },
    {
      key: '6',
      title: 'Hobbies',
      dataIndex: 'hobbies',
      render: (hobbies: any) => (
        <>
          {hobbies.map((hobby: string) => {
            let text:string;
            const found = hobbyMap.find(elem => elem.id === hobby);
            if (found !== undefined){
              text = found.name;
            }
            else {
              text = 'not exist';
            }
            return (
              <Tag  key={hobby}>
                {text}
              </Tag>
            );
          })}
        </>
      )
    },
    {
      key: '7',
      title: 'Date of birth',
      dataIndex: 'dateOfBirth'
    },
    {
      key: '8',
      title: 'Address',
      dataIndex: 'address'
    },
    {
      key: '9',
      title: 'Phone number',
      dataIndex: 'phoneNumber'
    },
    {
      key: '10',
      title: 'Action'
    }
  ]

  return (
    <div className="App">
      <Table columns = {columns} dataSource = {usersData}></Table>
    </div>
  );
}

export default App;
