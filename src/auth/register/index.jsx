import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../tools/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { Form, Input, Button } from 'antd';
import { toast, Toaster } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    const { firstname, lastname, email, password } = values;
    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, 'users', user.uid), {
        firstname,
        lastname,
        email,
      });

      toast.success('Ro‘yxatdan muvaffaqiyatli o‘tdingiz!');
      navigate('/login');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        toast.error('Bu email bilan foydalanuvchi allaqachon mavjud!');
      } else {
        toast.error(error.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '50px auto' }}>
      <h2 style={{ textAlign: 'center' }}>Ro‘yxatdan o‘tish</h2>

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Ismingiz"
          name="firstname"
          rules={[{ required: true, message: 'Iltimos, ismingizni kiriting!' }]}
        >
          <Input placeholder="Ismingiz" />
        </Form.Item>

        <Form.Item
          label="Familiyangiz"
          name="lastname"
          rules={[
            { required: true, message: 'Iltimos, familiyangizni kiriting!' },
          ]}
        >
          <Input placeholder="Familiyangiz" />
        </Form.Item>

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
            Ro‘yxatdan o‘tish
          </Button>
        </Form.Item>
      </Form>

      <Toaster richColors position="top-center" />
    </div>
  );
};

export default Register;
