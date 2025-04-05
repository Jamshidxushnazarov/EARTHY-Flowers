import { Button, Form, Input } from 'antd';
import { toast } from 'sonner';
import axios from 'axios';

const ContactPage = () => {
  const [form] = Form.useForm();

  const onSubmit = async (data) => {
    try {
      const token = '8108719197:AAGKM-G_hMbzkcKRZ9hhBUo9buA17WoKIFw';
      const chat_id = 1080849318;
      const url = `https://api.telegram.org/bot${token}/sendMessage`;
      const message = `📩 Yangi buyurtma!
👤 Ism: ${data.name}
📧 Email: ${data.email}
📞 Tel: ${data.phone}
💌 Xabar: ${data.message}`;

      await axios.post(url, { chat_id, text: message });
      toast.success('Buyurtmangiz muvaffaqiyatli yuborildi!');
      form.resetFields();
    } catch (error) {
      console.log(error);
      toast.error("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-rose-200 flex items-center justify-center py-10 px-4">
      <div className="max-w-2xl w-full bg-white shadow-lg rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-pink-700 mb-4">
          Gul yetkazib berish
        </h1>
        <p className="text-gray-600 text-center mb-6">
          Sizning maxsus kunlaringizni go'zallashtirish uchun biz bilan
          bog'laning!
        </p>

        <Form form={form} layout="vertical" onFinish={onSubmit}>
          <Form.Item
            name="name"
            label={<span className="text-gray-700 font-medium">Ismingiz</span>}
            rules={[
              { required: true, message: 'Iltimos, ismingizni kiriting!' },
            ]}
          >
            <Input
              placeholder="Ismingizni kiriting"
              className="py-3 px-4 rounded-lg border-gray-300"
            />
          </Form.Item>

          <Form.Item
            name="email"
            label={
              <span className="text-gray-700 font-medium">
                Email manzilingiz
              </span>
            }
            rules={[
              { required: true, message: 'Iltimos, emailingizni kiriting!' },
              { type: 'email', message: "Email noto'g'ri!" },
            ]}
          >
            <Input
              placeholder="siz@example.com"
              className="py-3 px-4 rounded-lg border-gray-300"
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label={
              <span className="text-gray-700 font-medium">
                Telefon raqamingiz
              </span>
            }
            rules={[
              {
                required: true,
                message: 'Iltimos, telefon raqamingizni kiriting!',
              },
            ]}
          >
            <Input
              placeholder="+998 XX XXX XX XX"
              className="py-3 px-4 rounded-lg border-gray-300"
            />
          </Form.Item>

          <Form.Item
            name="message"
            label={
              <span className="text-gray-700 font-medium">
                Buyurtmangiz tafsilotlari
              </span>
            }
            rules={[
              { required: true, message: 'Iltimos, tafsilotlarni yozing!' },
            ]}
          >
            <Input.TextArea
              rows={4}
              placeholder="Qanday gul kerak? Yetkazib berish manzili? Maxsus talablar?"
              className="rounded-lg border-gray-300"
            />
          </Form.Item>

          <Button
            type="primary"
            htmlType="submit"
            className="w-full py-4 rounded-lg bg-pink-600 hover:bg-pink-700 text-lg font-semibold"
          >
            ✉ Buyurtmani yuborish
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default ContactPage;
