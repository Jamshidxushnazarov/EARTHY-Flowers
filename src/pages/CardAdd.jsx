import React, { useState } from 'react';
import { Form, Input, InputNumber, Button, Card, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { db } from '../tools/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { toast } from 'sonner';

const IMG_BB_API_KEY = '312194708bfec3eb3dd88cee2d5c8555';

const CardAdd = () => {
  const [form] = Form.useForm();
  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleImageChange = (info) => {
    const fileList = info.fileList;
    if (fileList.length === 0) {
      setImageFile(null);
      return;
    }

    const file = fileList[0].originFileObj;
    if (file instanceof File) {
      setImageFile(file);
    }
  };

  const uploadToImgBB = async (file) => {
    const formData = new FormData();
    formData.append('image', file);
    const response = await fetch(
      `https://api.imgbb.com/1/upload?key=${IMG_BB_API_KEY}`,
      {
        method: 'POST',
        body: formData,
      }
    );

    const data = await response.json();
    if (data.success) {
      return data.data.url;
    } else {
      throw new Error('Rasm yuklashda xatolik yuz berdi.');
    }
  };

  const onFinish = async (values) => {
    if (!imageFile) {
      toast.error('Iltimos, rasm tanlang!');
      return;
    }

    setUploading(true);

    try {
      const imageUrl = await uploadToImgBB(imageFile);

      await addDoc(collection(db, 'cards'), {
        price: values.price,
        author: values.author,
        image: imageUrl,
        text: values.text,
        createdAt: new Date(),
      });

      toast.success("Ma'lumot muvaffaqiyatli saqlandi!");
      form.resetFields();
      setImageFile(null);
    } catch (error) {
      toast.error('Xatolik: ' + error.message);
    }

    setUploading(false);
  };

  return (
    <Card
      title="Card Qo'shish"
      style={{
        maxWidth: 600,
        margin: '0 auto',
        marginTop: 50,
        textAlign: 'center',
      }}
    >
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Narxi (price)"
          name="price"
          rules={[{ required: true, message: 'Narxni kiriting!' }]}
        >
          <InputNumber style={{ width: '100%' }} min={0} />
        </Form.Item>

        <Form.Item
          label="Muallif (author)"
          name="author"
          rules={[{ required: true, message: 'Muallifni kiriting!' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Rasm (image)">
          <Upload
            beforeUpload={() => false}
            onChange={handleImageChange}
            maxCount={1}
            accept="image/*"
            fileList={
              imageFile
                ? [
                    {
                      uid: '-1',
                      name: imageFile.name || 'rasm',
                      status: 'done',
                    },
                  ]
                : []
            }
            showUploadList={{ showRemoveIcon: true }}
          >
            <Button icon={<UploadOutlined />}>Rasm tanlash</Button>
          </Upload>
        </Form.Item>

        <Form.Item
          label="Matn (text)"
          name="text"
          rules={[{ required: true, message: 'Matn kiriting!' }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={uploading}>
            Saqlash
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default CardAdd;
