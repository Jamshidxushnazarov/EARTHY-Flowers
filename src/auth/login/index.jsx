import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../tools/firebase';
import { Form, Input, Button } from 'antd';
import { toast, Toaster } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = async (values) => {
    const { email, password } = values;
    setLoading(true);

    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success('Tizimga muvaffaqiyatli kirdingiz!');
      navigate('/');
    } catch (error) {
      if (error.code === 'auth/user-not-found') {
        toast.error('Bunday foydalanuvchi topilmadi!');
      } else if (error.code === 'auth/wrong-password') {
        toast.error('Parol noto‘g‘ri!');
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <h2 style={{ textAlign: 'center' }}>Tizimga kirish</h2>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: 'Emailni kiriting!' },
            { type: 'email', message: 'To‘g‘ri email kiriting!' },
          ]}
        >
          <Input placeholder="Email" />
        </Form.Item>

        <Form.Item
          label="Parol"
          name="password"
          rules={[{ required: true, message: 'Parolni kiriting!' }]}
        >
          <Input.Password placeholder="Parol" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            Login
          </Button>
        </Form.Item>
      </Form>

      <Toaster richColors position="top-center" />
    </div>
  );
};

export default Login;
