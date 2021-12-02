import {Form, Input, Select, DatePicker, Spin, Button} from 'antd';
import {UsersContext} from '../context/UsersContext';
import type {UserContextType} from '../context/UsersContext';
import {useContext} from  'react';
import {useParams} from 'react-router-dom';

function UserForm() {

    const params = useParams();

    const {Option} = Select;

    const formItemLayout = {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
    };
    
    const tailFormItemLayout = {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
    };

    const {hobbyMap, getUser} = useContext<UserContextType>(UsersContext);

    const user = getUser(params.userId!);
    if (user === undefined) return <Spin/>

    let children = [];
    for (let i:number=0; i<hobbyMap.length ; i++) {
        children.push(<Option value={hobbyMap[i].id}>{hobbyMap[i].name}</Option>);
    }
    const initial = {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        gender: user.gender,
        age: user.age,
        hobbies: user.hobbies,
        //dateOfBirth: user.dateOfBirth,
        address: user.address,
        phoneNumber: user.phoneNumber
    }

    return (
        <Form name="userForm" initialValues={initial} {...formItemLayout}>
            <Form.Item name="name" label="Name">
                <Input />
            </Form.Item>
            <Form.Item name="lastName" label="Last Name">
                <Input/>
            </Form.Item>
            <Form.Item name="email" label="Email">
                <Input/>
            </Form.Item>
            <Form.Item name="gender" label="Gender">
                <Select  style={{ width: 120 }} /*onChange={}*/>
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
            <Form.Item name="address" label="Address">
                <Input />
            </Form.Item>
            <Form.Item name="phoneNumber" label="Phone Number">
                <Input/>
            </Form.Item>
            <Form.Item name="buttons" {...tailFormItemLayout}>
                <Button>Back to main view</Button>
                <Button>Reset</Button>
                <Button type="primary">Submit</Button>
            </Form.Item>
            
        </Form>

    );
}

export default UserForm;