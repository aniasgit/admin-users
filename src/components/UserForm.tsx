import {Form, Input, Select, DatePicker, Spin, Button, InputNumber, Modal} from 'antd';
import {UsersContext} from '../context/UsersContext';
import type {UserContextType} from '../types';
import {useContext, useState} from  'react';
import {useParams, Link, Navigate} from 'react-router-dom';
import moment from 'moment';

const UserForm = () => {

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
    const [form] = Form.useForm();

    const {hobbyMap, getUser, updateUser} = useContext<UserContextType>(UsersContext);

    const [isSaved, setIsSaved] = useState(false);
    if (isSaved) return <Navigate to='/'/>

    const user = getUser(params.userId!);
    if (user === undefined || hobbyMap === []) return <Spin/>

    let children: any[] = [];
    for (let i:number=0; i<hobbyMap.length ; i++) {
        children.push(<Option key={hobbyMap[i].id} value={hobbyMap[i].id}>{hobbyMap[i].name}</Option>);
    }
    
    const initial = {
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        gender: user.gender,
        age: user.age,
        hobbies: user.hobbies,
        dateOfBirth: moment(user.dateOfBirth, 'YYYY-MM-DD'),
        address: user.address,
        phoneNumber: user.phoneNumber
    }

    const handleReset = () => {
        form.resetFields();
    }

    const handleFinish = (values: any) => {
        let changedUser = form.getFieldsValue();
        changedUser.dateOfBirth = changedUser.dateOfBirth.format('YYYY-MM-DD').toString();
        changedUser.id = user.id;
        updateUser(changedUser);
        setIsSaved(true);
    }
    
    const handleFinishFailed = (errorInfo: any) => {
        Modal.error({
            title: 'Validation error',
            content: 'Provide right values to all required fields.',
          });
    }

    return (
        <Form name="userForm" form={form} initialValues={initial} {...formItemLayout}  onFinish={handleFinish} onFinishFailed={handleFinishFailed}>
            <Form.Item name="name" label="Name" rules={[{ required: true, whitespace: true, message: 'User name is required!' }]}>
                <Input />
            </Form.Item>
            <Form.Item name="lastName" label="Last Name" rules={[{ required: true, whitespace: true, message: 'User last name is required!' }]}>
                <Input/>
            </Form.Item>
            <Form.Item name="email" label="E-mail" rules={[{ required: true, type: "email", message: 'User e-mail is required!' }]}>
                <Input/>
            </Form.Item>
            <Form.Item name="gender" label="Gender">
                <Select  style={{ width: 120 }}>
                <Option value="male">male</Option>
                <Option value="female">female</Option>
                </Select>
            </Form.Item>
            <Form.Item name="age" label="Age" rules={[{ required: true, message: 'Age is required!'}, {type:"number", min: 0, max: 150, message: "Provide right age!"}]}>
                <InputNumber/>
            </Form.Item>
            <Form.Item name="hobbies" label="Hobbies" rules={[{ required: true, message: 'Please provide at least one user hobby!' }]}>
                <Select mode="multiple" virtual={false}>
                    {children}
                </Select>
            </Form.Item>
            <Form.Item name="dateOfBirth" label="Date of birth">
                <DatePicker allowClear={false}></DatePicker>
            </Form.Item>
            <Form.Item name="address" label="Address">
                <Input />
            </Form.Item>
            <Form.Item name="phoneNumber" label="Phone Number">
                <Input/>
            </Form.Item>
            <Form.Item {...tailFormItemLayout}>
                <Link to='/'>
                    <Button>Back to main view</Button>
                </Link>
                <Button onClick={handleReset}>Reset</Button>
                <Button type="primary" htmlType="submit">Save</Button>
            </Form.Item>
            
        </Form>

    );
}

export default UserForm;