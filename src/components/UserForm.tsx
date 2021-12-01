import {Form, Input, Select, DatePicker} from 'antd';
import {UsersContext} from '../context/UsersContext';
import type {UserContextType} from '../context/UsersContext';
import {useContext} from  'react';

function UserForm() {

    const {Option} = Select;

    const {hobbyMap} = useContext<UserContextType>(UsersContext);

    let children = [];
    for (let i:number=0; i<hobbyMap.length ; i++) {
        children.push(<Option value={hobbyMap[i].name}>{hobbyMap[i].name}</Option>);
    }

    console.log(hobbyMap);


    return (
        <Form>
            <Form.Item name="name" label="Name">
                <Input/>
            </Form.Item>
            <Form.Item name="lastName" label="Last Name">
                <Input/>
            </Form.Item>
            <Form.Item name="email" label="Email">
                <Input/>
            </Form.Item>
            <Form.Item name="gender" label="Gender">
                <Select defaultValue="male" style={{ width: 120 }} /*onChange={}*/>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                </Select>
            </Form.Item>
            <Form.Item name="age" label="Age">
                <Input/>
            </Form.Item>
            <Form.Item name="hobbies" label="Hobbies">
                <Select mode="multiple">
                    {children}
                </Select>
            </Form.Item>
            <Form.Item name="dateOfBirth" label="Date of birth">
                <DatePicker></DatePicker>
            </Form.Item>
            
        </Form>

    );
}

export default UserForm;