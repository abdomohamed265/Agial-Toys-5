import React from 'react'
import"./style.css";
import Navbar from '../homepage/Navbar';
import Footer from '../homepage/Footer';
import { NavLink } from 'react-router-dom';
import { CartProvider } from 'react-use-cart';

const Polices1 = () => {
  return (
    <CartProvider>
    <div>
        <Navbar/>
     <div class="home ">
        <div class="darck">
        </div>
    </div>
    <div class="container">
        <div class="info ">
            <h2 class="blog-title mt-5 mb-5">سياسة الاسترجاع والاستبدال والإلغاء</h2>
            <p class="blog-text">نضمن لك الأصالة والجودة لجميع المنتجات التي تباع على متجرنا ومع ذلك، إذا لم تكن في
                منتهى
                الرضا عن الشراء، يمكنك استعادة المبلغ بالكامل وفق الشروط التالية </p>
            <p class="blog-text"><span style={{backgroundColor:"rgb(255,255,0)",color:"black"}}>اللعبة المباعة غير
                    قابلة للاسترجاع
                    بتاتاً</span>
                الا بشرط خلل فني أو عيب مصنعي خلال خمسة أيام من استلام المنتج ولا يمكن معالجته ابداً كتلف او كسر او خلل
                يعيب المنتج ..أما اذا كان المنتج انتهت بطاريته او لم يعمل فيتم معالجته ولا يحق للعميل ترجيعه ، وإذا كان
                خلل فني يتم اصلاحه او اعطائكم بديل له ، اما اذا لا يمكن معالجته فيتم ارجاعه ورسوم التوصيل الذهاب والاياب
                علينا كاملة ..
            </p>
            <p class="blog-text">
                واذا كان المنتج غير مناسب لرضى العميل فيتحمل العميل (في حال اننا وافقنا على الارجاع بعد وصولها
                لمستودعنا)
            </p>
            <p class="blog-text">يتحمل العميل مبلغ الشحن( ذهاب 30 جنية وعودة 30 جنية اذا كان الطلب داخل او خارج الجيزة )
                . ورسوم الدفع عند الاستلام 20 جنية ان وجدت للشحنات الصغيرة

            </p>
            <p class="blog-text"> ام الشحنات الكبير فيكون حساب قيمة المنتج طول المنتج في ضرب عرض المنتج في ضرب ارتفاع
                المنتج تقسيم 4000</p>
            <br/>
            <p class="blog-text">التأكد من أن هذا المنتج في عبوته الأصلية، وغير مستخدم وفي نفس الحالة الذي ورد فيها. تتم
                عملية استرداد المال بعد استلام وفحص هذا المنتج المُعاد. إذا كنت قد دفعت من خلال الوسائل الإلكترونية
                (بطاقة الائتمان) فسوف يعاد المال لبطاقتك الائتمانية. ووفقا لمتطلبات البنك التابع له كل مشتري، سوف تستغرق
                عملية استرداد المبلغ فترة قد تصل إلى شهر لتظهر في بيان بطاقة الائتمان.

            </p>
            <p class="blog-text">يُرجى الملاحظة أن المبلغ المالي المُعاد إلى حسابك سيتضمن القيمة المدفوعة للمنتج الذي
                قمت بشراءه فقط، ومتجرنا غير مسؤول عن أي تكاليف لعملية إعادة شحن المنتج الذي لاترغب به.

            </p>
            <br/>
            <p class="blog-text">ملاحظة (منتج السيارة المجنونة لايتم الاستبدال او الاسترجاع الا في حالة العيوب المصنعية
                ولا يمكن استرجاع او استبدال المنتج بعد استخدامه)

            </p>
            <br/>
            <p class="blog-text">المنتجات التي لايتم استرجاعها هي كالآتي:</p>
            <ul class="blog-text">
                <li>منتجات التصفية </li>
                <li> المنتجات التي ليست في حالتها الأصلية أو فتحت أو تم العبث بها أو لحق بها ضرر.</li>
                <li>لمنتجات التي لا يتطابق الرقم التسلسلي لها مع ما هو مسجل لدينا.</li>

            </ul>
            <p class="blog-text mb-5">تحت ظروف خاصة، إذا حصلت على منتج خاطئ أو مختلف عن الذي طلبته أو مواصفاته مختلفة عن
                الموضَّحة على الموقع، سنقوم بترتيب عملية إستعادة المنتج واستبداله مجاناً، ولكن يجب إعادة المنتج بنفس
                الحالة التي استلمته بها مع عبوته الأصلية و/ أو في غلافه دون أن يلحق به أي ضرر.

            </p>
        </div>
    </div>  
    <div className='text-center mb-5'>
    <NavLink className="btn btn-primary p-3" to="/polices2" style={{backgroundColor:"darkblue"}}>سياسة الخصوصية </NavLink>
    </div>
    <Footer/>
    </div>
    </CartProvider>
    
  )
}

export default Polices1