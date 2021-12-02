import {Table, Tag, Button} from 'antd';
import {useContext} from  'react';
import {UsersContext} from '../context/UsersContext';
import type {UserContextType} from '../context/UsersContext';
import {DeleteOutlined, FormOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

function UsersTable() {
  
    const {usersData, hobbyMap} = useContext<UserContextType>(UsersContext);
   
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
        render: (hobbies: string[]) => (
          <>
            {hobbies.map((hobby) => {
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
        title: 'Action',
        dataIndex: 'id',
        render: (id: string) => {
            return (
            <>
            <Link to={'/user/'+id}>
            <Button type="primary"  icon={<FormOutlined/>} size='small' block>
                Details
            </Button>
            </Link>
            <Button  icon={<DeleteOutlined />} size='small' block>
                Delete
            </Button>
            </>
            );
        }
      }
    ]

    return <Table columns = {columns} dataSource = {usersData}></Table>
}

export default UsersTable;