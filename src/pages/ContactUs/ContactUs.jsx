import React from "react";
import Layout from "../../components/Layout/Layout";

const ContactUs = () => {
  return (
    <Layout>
      <div className="rtl text-right p-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-4">تماس با ما</h1>
        <p className="text-base md:text-lg leading-relaxed">
        پشتیبانی وب‌سایت فرانت کست در روزهای غیر تعطیل هفته آماده پاسخگویی به دانشجویان گرامی است. همین طور برای مشاوره، می‌توانید از راه‌های ارتباطی با ما استفاده کنید.
        <br/>
        <br/>
        ارتباط در تلگرام: MasoodSadri
        <br />
        <br />
        ایمیل: sadri.masood [at] gmail.com
        </p>
      </div>
    </Layout>
  );
};

export default ContactUs;
