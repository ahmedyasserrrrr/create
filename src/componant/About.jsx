import React from 'react';
import { Link } from 'react-router-dom';


const About = () => {
    return (
        <div className='container  my-3'>
            <div className="row">
                <div className="col-md-7  ">
                    <div className="card   ">
                        <p className='p-3' >
                        My website is your perfect destination for online shopping, bringing together a wide range of clothing, jewelry, and electronics all in one place. We aim to meet your diverse needs and provide a seamless and enjoyable shopping experience.

In the clothing section, we offer a diverse collection of the latest fashion trends for men, women, and children. Whether you're looking for practical and trendy clothes for everyday wear or seeking an elegant look for parties and special occasions, we provide a wide range of shirts, blouses, dresses, pants, and outerwear to suit all tastes.

In the jewelry section, we offer a fantastic selection of necklaces, bracelets, rings, and earrings designed with elegance and high quality. Whether you're looking for a unique piece to complement your daily outfit or seeking a wonderful gift for someone special in your life, we guarantee that you'll find jewelry that matches your unique taste.

As for electronics, we provide a variety of modern devices and technological accessories. Whether you're looking for a new smartphone, a tablet, or high-quality headphones, we offer you the latest products from top reliable brands.

In addition, we prioritize providing a convenient and secure shopping experience. You can take advantage of our home delivery service, saving your time and effort in traditional shopping. We also offer multiple safe payment options to ensure ease and security in the purchasing process.

In summary, our website is the ideal destination for online shopping for clothing, jewelry, and electronics. It offers a comprehensive shopping experience that meets all your needs and ensures quality, style, and convenience all at once. Join us today and enjoy the pleasure of online shopping with ease and confidence.
                        </p>
                    </div>
                   
                </div>
                <div className="col-md-5 mb-3 mt-4 m-auto text-center my-3  ">
                        <img src={require('../image/IMG_E2602 - Copy.JPG')}  className='w-50 rounded-5 rounded-circle m-auto '  alt="" />
                        <br />
                        <br />
                        <Link to="https://wa.me/message/3GNCBSLOKVH4E1" className='bg-primary btn btn-lg mb-5 text-white text-decoration-none' >مراسله واتساب </Link>

                    </div>
            </div>
        </div>
    );
}

export default About;
