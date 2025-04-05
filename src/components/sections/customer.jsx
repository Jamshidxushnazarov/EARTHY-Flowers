import { Carousel, Card, Rate } from 'antd';
import { customerData } from '../../constants/customerData';

const Customer = () => {
  return (
    <section className="py-16 bg-gray-100">
      <h2 className="text-center text-4xl font-bold mb-8">Mijozlar Fikri</h2>
      <div className="max-w-4xl mx-auto">
        <Carousel autoplay dots={true} speed={2000}>
          {customerData.map((customer) => (
            <Card
              key={customer.id}
              className="shadow-lg rounded-lg p-6 text-center"
            >
              <img
                src={customer.image}
                alt={customer.name}
                className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold">{customer.name}</h3>
              <Rate disabled defaultValue={customer.rating} className="my-2" />
              <p className="text-gray-600">{customer.feedback}</p>
            </Card>
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Customer;
