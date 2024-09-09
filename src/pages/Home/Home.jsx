import React from "react";
import Layout from "../../components/Layout/Layout";
import {
  FaPencilAlt,
  FaGraduationCap,
  FaVideo,
  FaFolderOpen,
  FaLightbulb,
  FaListAlt,
  FaClock,
  FaDollarSign,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import ReadMore from "../../components/ReadMore/ReadMore";
import UserReviewCard from "../../components/UserReviewCard/UserReviewCard";
import Slider from "../../components/Slider/Slider";
import pic from "../../assets/image/masood.jpg";
import alijalali from "../../assets/image/jalali.jpg";
import mojtahedi from "../../assets/image/mojtahedi.jpg";
import purmohammad from "../../assets/image/purmohammad.jpg";
import farajpour from "../../assets/image/farajpour.jpg";
import mirzaei from "../../assets/image/mirzaei.jpg";
import malekzadeh from "../../assets/image/malekzadeh.jpg";
import slide1 from "../../assets/image/slider/1.png";
import slide2 from "../../assets/image/slider/2.jpg";
import slide3 from "../../assets/image/slider/5.jpg";
import slide4 from "../../assets/image/slider/7.jpg";


const slides = [slide1, slide2, slide3, slide4];

const reviews = [
  {
    id: 1,
    name: "علی جلالی",
    image: alijalali,
    review:
      "من در چند دوره‌ی ویدیویی و حضوری آموزش برنامه نویسی شرکت کرده بودم، ولی با حضور در دوره‌های ری‌اکت و نود جی‌اس استاد صدری به عمیق‌ترین مفاهیم برنامه نویسی جاوااسکریپت پی بردم. روش تدریس ایشون رو تا به حال در هیچ کدوم از دوره‌های مشابه ندیده بودم. از مفاهیم بسیار ساده شروع شده و پله پله بدون اینکه کسی لحظه‌ای از کلاس عقب بمونه تمام حاضرین رو تا رسیدن به پیشرفته‌ترین مراحل با خودشون همراه می‌کردن. من به شخصه کل پیشرفت‌هایی که در زمینه برنامه نویسی داشتم رو مدیون ایشون هستم. بعد از اتمام دوره‌ها توسط ایشون به یک شرکت دانش بنیان معرفی شدم و هم اکنون با این شرکت در حال همکاری هستم. ",
  },
  {
    id: 2,
    name: "سودا مجتهدی",
    image: mojtahedi,
    review:
      "یکی از دلایل مهمی که باعث تمایز دوره‌های فرانت کست از بقیه می‌شه تایم کوتاه ویدیوها و کیفیت بسیار بالای اون‌هاست. به شکلی که پیچیده‌ترین مفاهیم به‌صورت خیلی ساده به دانشجو منتقل می‌شه و دلیل این هم فقط تسلط بسیار عالی استاد صدری روی مباحث و قدرت انتقال قوی ایشون هست. این موضوع خیلی کمک می‌کنه که فرآیند یادگیری اصلا خسته‌کننده نباشه. همینطور چالش‌ها و تمرین‌هایی که در طول دوره مطرح می‌شه خیلی کمک می‌کنه تا یادگیری مفاهیم به شکل عمیق صورت بگیره و یه انگیزه خیلی قوی هم برای ادامه دادن مسیر هست. ",
  },
  {
    id: 3,
    name: "پرستو پورمحمد",
    image: purmohammad,
    review:
      "یکی از معدود اساتیدی که واقعا براشون مهمه که دانشجوها مطلب رو دقیق و کامل یاد بگیرن، برای همین با مطرح کردن سوالات و تمرین‌های متنوع و مفید، انگیزه قوی برای یادگیری ایجاد می کنن که نوع تدریس، نشان دهنده تسلط کامل روی مطلب هست. همیشه روی کد نویسی اصولی خیلی تاکید می‌کنن که این کار، برای دسترسی سریع به کدها و رفع خطای کد خیلی مهم و کاربردی هست، برای خود منم توجه به این موضوع خیلی مفید بوده همیشه. ",
  },

  {
    id: 4,
    name: "مجتبی فرجپور",
    image: farajpour,
    review:
      "در كلاس طراحى و مبانى برنامه نويسى وب با استاد صدرى آشنا شدم و با توجه به تسلط كامل و قدرت بيان قوى علاقه‌ام به برنامه نويسى بيشتر شد و دوره هاى جاوااسكريپت و ري‌اكت را با جناب آقاى صدرى ادامه دادم و الان تو شركت دانش بنيان مشغول به كار هستم. پيشنهاد مي‌كنم اگر واقعا علاقه‌مند به برنامه نويسى هستيد دوره‌هاى آقاى صدرى را از دست ندید. ",
  },
  {
    id: 5,
    name: "شبنم میرزایی",
    image: mirzaei,
    review:
      "در کلاس جاوا اسکریپت با استاد صدری آشنا شدم. تدریس عالی و تشویقهای مستمرشون باعث شد بعد از وقفه طولانی دوباره به سمت برنامه نویسی برگردم. در کلاسهای نود ایشون شرکت کردم و علاوه بر اون از ویدیوهای آموزشی ری اکت و آخرین ویدیوهای بی نظیر نود ایشون استفاده زیادی بردم. خیلی خیلی خوشحالم که باهاشون آشنا شدم؛ کاش که خیلیی زودتر این اتفاق افتاده بود. ",
  },
  {
    id: 6,
    name: "محمد مهدی ملک زاده",
    image: malekzadeh,
    review:
      "زبان جاوااسکریپت رو با اولین دوره‌ی فرانت‌کست یعنی شروع برنامه نویسی با جاوااسکریپت شروع کردم. همونجا بود که بخاطر سبک تدریس فوق‌العاده استاد صدری، علاقه بسیار زیادی به این زبان پیدا کردم و خیلی راحت یاد گرفتم. در ادامه وقتی خواستم Node و React رو شروع کنم از ویدئوهای استاد صدری استفاده کردم و همیشه فرانت‌کست، بهترین گزینه من برای زمانی بود که میخواستم تکنولوژی جدیدی رو یاد بگیرم. این دوره‌ها به قدری کامل هستن که نیازی به هیچ منبع دیگه‌ای نیست و میشه خیلی راحت میشه پروژه کار کرد. حتی وقتی بخوای تو تکنولوژی‌ای عمیق‌تر بشی، بخاطر پایه قوی‌ای که این ویدئوها ایجاد میکنن، کار خیلی سریع و راحت میشه. ",
  },
];
const Home = () => {
  return (
    <>
      <Layout>
        {/* slider */}
        <div>
          <Slider slides={slides} />
        </div>
        {/* end slider */}

        {/* section1 information site */}
        <div className="container mx-auto p-4 md:p-8 rtl">
          <div className="flex flex-col justify-between items-center md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
            {/* Section for home Info */}
            <div className="w-full md:w-1/2 p-4 md:p-8">
              <h6 className="text-2xl font-bold text-gray-900 mb-4">
                برنامه نویسی به زبان ساده.
              </h6>
              <p>
                در فرانت کست می‌توانید مهارت‌های برنامه نویسی خود را تقویت کنید
                و به یک توسعه‌دهنده حرفه‌ای تبدیل شوید.
              </p>

              <Link to={"/Prodacts"}>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  شروع یادگیری
                </button>
              </Link>

              <div className="flex flex-col space-y-4 text-right mt-5">
                {/* icon section */}
                <div className="flex flex-col space-y-4">
                  <div className="flex flex-row">
                    <div className="flex items-center space-x-2">
                      <FaPencilAlt size={14} className="text-blue-500" />
                      <span className="text-xs">یادگیری با انجام تمرین</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <FaClock size={14} className="text-blue-500" />
                      <span className="text-xs">ویدیوهای کوتاه و با کیفیت</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <FaFolderOpen size={14} className="text-blue-500" />
                      <span className="text-xs">ضمانت بازگشت وجه</span>
                    </div>
                  </div>

                  <div className="flex flex-row">
                    <div className="flex items-center space-x-2">
                      <FaVideo size={14} className="text-blue-500" />
                      <span className="text-xs">به روز رسانی رایگان </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <FaListAlt size={24} className="text-blue-500" />
                      <span className="text-xs">سرفصل‌های جامع و دقیق</span>
                    </div>

                    <div className="flex items-center space-x-2">
                      <FaLightbulb size={24} className="text-blue-500" />
                      <span className="text-xs">پشتیبانی دوره‌ها </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section for Image */}
            <div>
              <img src={pic} alt="pic" className="w-full h-64 object-contain" />
            </div>
          </div>
        </div>
        {/* end section1 information site */}

        {/* section 2 readmore product */}
        <div className="mt-3">
          <h1 className="text-2xl font-bold mb-6">دوره‌های آموزشی</h1>
          <ReadMore />
        </div>
        {/* end section 2 readmore product */}

        {/* section 3 userreview */}
        <div className="container mx-auto p-4 mt-3">
          <h1 className="text-2xl font-bold mb-6">
            از زبان دانشجویان فرانت کست
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <UserReviewCard
                key={review.id}
                image={review.image}
                name={review.name}
                review={review.review}
              />
            ))}
          </div>
        </div>
        {/* end section 3 userreview */}
      </Layout>
    </>
  );
};

export default Home;
