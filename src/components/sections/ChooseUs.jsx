const ChooseUs = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          Nega Aynan Biz?
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Yuqori Sifat
            </h3>
            <p className="text-gray-600">
              Biz faqat eng yangi va sifatli gullarni yetkazib beramiz, har bir
              buket e’tibor bilan tanlanadi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Tez Yetkazib Berish
            </h3>
            <p className="text-gray-600">
              Buyurtmalaringizni eng qisqa vaqt ichida yetkazib beramiz, shunda
              gullaringiz doimo yangilikni saqlaydi.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-green-600 mb-4">
              Mijozlar Roziligi
            </h3>
            <p className="text-gray-600">
              Mijozlarimizni qadrlaymiz va ularning talablariga javob berish
              uchun eng yaxshi xizmatni taklif qilamiz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseUs;
