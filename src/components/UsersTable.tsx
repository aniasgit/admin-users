import {Table, Tag, Button, Modal} from 'antd';
import {useContext, useState} from  'react';
import {UsersContext} from '../context/UsersContext';
import {DeleteOutlined, FormOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';
import type {User, UserContextType} from '../types';
import { ColumnsType } from 'antd/es/table'
import {nameFilters, filterName, emailFilters, filterEmail, ageFilters, filterAge, hobbyFilters, filterHobby, dateFilters, filterDate, addressFilters, filterAddress} from '../utils/UsersTableFilters';

const UsersTable = () => {
  
    const {usersData, hobbyMap, getUser, deleteUser, deleteUsers} = useContext<UserContextType>(UsersContext);

    const handleDeleteSingleUser = (id:string) => {
      const user: User|undefined= getUser(id);
      if (user !== undefined) {
        Modal.confirm({
          title: 'Are you sure you want to delete '+user.name+' '+user.lastName,
          okType:"danger",
          onOk: () => deleteUser(id)
        })
      }
    }

    const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

    const rowSelection = {
      onChange: (selestedRowsKeys:any, selectedRows: User[]) => {
        setSelectedUsers(selectedRows);
      }
    }

    const hasSelected = selectedUsers.length > 0;

    const handleDeleteMultipleUsers = (users: User[]) => {
      let usersNameList: string[] = users.map((user) => ' '+user.name+' '+user.lastName);
      Modal.confirm({
        title: 'Are you sure you want to delete:\n '+usersNameList+'?',
        okType:"danger",
        onOk: () => {
          deleteUsers(users);
          setSelectedUsers([]);
        }
      })
    }

    const columns: ColumnsType<User> = [
      {
        key: '1',
        title: 'Name',
        dataIndex: 'name',
        render: (name: string, record: User) => {return name+' '+record.lastName},
        sorter: (record1: User, record2: User) => {
          const comp = record1.name.localeCompare(record2.name);
          if (comp !== 0) return comp;
          else return record1.lastName.localeCompare(record2.lastName);
        },
        filters: nameFilters(usersData),
        onFilter: filterName
      },
      {
        key: '2',
        title: 'E-mail',
        dataIndex: 'email',
        sorter: (record1: User, record2: User) => record1.email.localeCompare(record2.email),
        filters: emailFilters(usersData),
        onFilter: filterEmail
      },
      {
        key: '3',
        title: 'Gender',
        dataIndex: 'gender',
        filters: [
          {text: "female", value: "female"},
          {text: "male", value: "male"}
        ],
        onFilter: (value: any, record: User) => record.gender === value
      },
      {
        key: '4',
        title: 'Age',
        dataIndex: 'age',
        sorter: (record1:User, record2:User) => record1.age-record2.age,
        filters: ageFilters(usersData),
        onFilter: filterAge
      },
      {
        key: '5',
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
        ),
        filters: hobbyFilters(hobbyMap),
        onFilter: filterHobby
      },
      {
        key: '6',
        title: 'Date of birth',
        dataIndex: 'dateOfBirth',
        sorter: (record1: User, record2: User) => record1.dateOfBirth.localeCompare(record2.dateOfBirth),
        filters: dateFilters(usersData),
        onFilter: filterDate
      },
      {
        key: '7',
        title: 'Address',
        dataIndex: 'address',
        sorter: (record1: User, record2: User) => record1.address.localeCompare(record2.address),
        filters: addressFilters(usersData),
        onFilter: filterAddress
      },
      {
        key: '8',
        title: 'Phone number',
        dataIndex: 'phoneNumber'
      },
      {
        key: '9',
        title: 'Action',
        dataIndex: 'id',
        render: (id: string) => {
          return (
          <>
          <Link to={'/user/'+id}>
          <Button icon={<FormOutlined/>} size='small' block>
              Details
          </Button>
          </Link>
          <Link to='/'>
            <Button icon={<DeleteOutlined />} size='small' onClick={() => handleDeleteSingleUser(id)} danger={true} block>
                Delete
            </Button>
          </Link>
          </>
          );
        }
      }
    ]

    return (
      <div>
        <div style={{ marginBottom: 16, marginTop: 16}}>
          <Button icon={<DeleteOutlined />} danger disabled={!hasSelected} onClick={() => handleDeleteMultipleUsers(selectedUsers)}>Delete selected</Button>
        </div>
        <Table rowSelection={rowSelection} columns={columns} dataSource={usersData} rowKey="id"/>
      </div>
    );
}

export default UsersTable;