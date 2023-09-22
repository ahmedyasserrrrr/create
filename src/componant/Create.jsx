import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { useTheme } from '@mui/material';
const Create = ({setmode}) => {
    return (
        <div>
            <div>
                            <nav class="navbar navbar-expand-lg navbar-light fixed-top shadow-sm" id="mainNav">
    <div class="container px-5">
        <a class="navbar-brand fw-bold" href="/">shopo shop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="bi-list"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto me-4 my-3 my-lg-0">
                <li class="nav-item"><a class="nav-link me-lg-3" href='#features'> Features </a></li>
                <li class="nav-item"><Link class="nav-link me-lg-3" to="/home">products</Link></li>
                <li class="nav-item"><Link class="nav-link me-lg-3" to="/About">About</Link></li>
                <li class="nav-item"><a class="nav-link me-lg-3" href="#cta">show now</a></li>
           
            </ul>
            <button class="btn btn-primary rounded-pill px-3 mb-2 mb-lg-0" data-bs-toggle="modal" data-bs-target="#feedbackModal">
                <span class="d-flex align-items-center">
                    <i class="bi-chat-text-fill me-2"></i>
                 <a href="https://wa.me/message/3GNCBSLOKVH4E1"  class="small text-white text-decoration-none "> Send whatsapp</a>   
                </span>
            </button>
        </div>
    </div>
</nav>
  <section class="cta" id='cta' >
            <div class="cta-content">
                <div class="container px-5">
                    <h2 class="text-white display-1 lh-1 mb-4">
                        Stop reading
                        <br />
                        Start Search.
                    </h2>
                    <Link className="btn btn-outline-light py-3 px-4 rounded-pill" to="/home" >Show  Now</Link>
                </div>
            </div>
        </section>
<header class="masthead">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-6">
                        <div class="mb-5 mb-lg-0 text-center text-lg-start">
                            <h1 class="display-1 lh-1 mb-3">Shopo shop your app beautifully.</h1>
                            <p class="lead fw-normal text-muted mb-5">My website is your perfect destination for online shopping, bringing together a wide range of clothing, jewelry, and electronics all in one place. We aim to meet your diverse needs and provide a seamless and enjoyable shopping experience.</p>
                            <div class="d-flex flex-column flex-lg-row align-items-center">
                               
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="masthead-device-mockup">
                            <svg class="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                        <stop class="gradient-start-color" offset="0%"></stop>
                                        <stop class="gradient-end-color" offset="100%"></stop>
                                    </linearGradient>
                                </defs>
                                <circle cx="50" cy="50" r="50"></circle></svg
                            ><svg class="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg
                            ><svg class="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                            <div class="device-wrapper">
                                <div class="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                    <div class="screen bg-black">
                                       
                                        <video muted="muted" autoplay="" loop=""><source src={require('../image/google-play-badge.svg')} type="video/mp4" /></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <aside class="text-center bg-gradient-primary-to-secondary">
            <div class="container px-5">
                <div class="row gx-5 justify-content-center">
                    <div class="col-xl-8">
                        <div class="h2 fs-1 text-white mb-4">My website is your perfect destination for online shopping, bringing together a wide range of clothing, jewelry, and electronics all in one place. We aim to meet your diverse needs and provide a seamless and enjoyable shopping experience.
</div>
                    </div>
                </div>
            </div>
        </aside>
        <section id="features">
            <div class="container px-5">
                <div class="row gx-5 align-items-center">
                    <div class="col-lg-8 order-lg-1 mb-5 mb-lg-0">
                        <div class="container-fluid px-5">
                            <div class="row gx-5">
                                <div class="col-md-6 mb-5">
                                    <div class="text-center">
                                        <i class="bi-phone icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt">who are we </h3>
                                        <p class="text-muted mb-0">Whatever your needs may be, you will find with us an extensive and diverse selection of products that cater to your requirements. We offer different products such as electronics, home appliances, clothing, accessories, beauty products, and much more.</p>
                                    </div>
                                </div>
                                <div class="col-md-6 mb-5">
                                    <div class="text-center">
                                        <i class="bi-camera icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt"> My products</h3>
                                        <p class="text-muted mb-0">We strive to provide you with a seamless and convenient shopping experience. Our website is designed to be user-friendly, allowing you to easily browse through different categories, compare products, read reviews, and make informed purchasing decision 
                                        
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 mb-5 mb-md-0">
                                    <div class="text-center">
                                        <i class="bi-gift icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt">  About our site </h3>
                                        <p class="text-muted mb-0">At our website, we prioritize quality and reliability. We source our products from reputable brands and vendors to ensure that you receive products that meet high standards of quality and durability.
                                        </p>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="text-center">
                                        <i class="bi-patch-check icon-feature text-gradient d-block mb-3"></i>
                                        <h3 class="font-alt">Additions </h3>
                                        <p class="text-muted mb-0">
                                        Additionally, we offer secure and convenient payment options, as well as reliable shipping and delivery services, to ensure that your products reach you in a timely and efficient manner.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 order-lg-0">
                        <div class="features-device-mockup">
                            <svg class="circle" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="circleGradient" gradientTransform="rotate(45)">
                                        <stop class="gradient-start-color" offset="0%"></stop>
                                        <stop class="gradient-end-color" offset="100%"></stop>
                                    </linearGradient>
                                </defs>
                                <circle cx="50" cy="50" r="50"></circle></svg
                            ><svg class="shape-1 d-none d-sm-block" viewBox="0 0 240.83 240.83" xmlns="http://www.w3.org/2000/svg">
                                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(120.42 -49.88) rotate(45)"></rect>
                                <rect x="-32.54" y="78.39" width="305.92" height="84.05" rx="42.03" transform="translate(-49.88 120.42) rotate(-45)"></rect></svg
                            ><svg class="shape-2 d-none d-sm-block" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="50"></circle></svg>
                            <div class="device-wrapper">
                                <div class="device" data-device="iPhoneX" data-orientation="portrait" data-color="black">
                                    <div class="screen bg-black">
                                      
                                        <video muted="muted" autoplay="" loop="" ><source src="assets/img/demo-screen.mp4" type="video/mp4" /></video>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
      
       
        <footer class="bg-black text-center py-5">
            <div class="container px-5">
                <div class="text-white-50 small">
                    <div class="mb-2">&copy; Your Website 2023. All Rights Reserved.</div>
                    <span class="mx-1">&middot;</span>
                    <a href="#!">Gmail:</a>
                    <span class="mx-1"></span>
                    <a> ahmyas2332@gmail.com </a>
                </div>
            </div>
        </footer>

        </div>
        </div>
    );
}


export default Create;
