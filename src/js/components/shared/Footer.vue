<template>
     <section class="footer green-bg">
            <div class="container">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <h3 class="heading">Useful Links</h3>
                        <ul>
                            <li><a href="#!">About us</a></li>
                            <li><a href="#!">Trust &amp; Safety</a></li>
                            <li><a href="#!">Press</a></li>
                            <li><a href="#!">Terms &amp; Conditions</a></li>
                            <li><a href="#!">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <h3 class="heading">Hostel Booking</h3>
                        <ul>
                            <li><a href="#!">How it works</a></li>
                            <li><a href="#!">FAQ</a></li>
                            <li><a href="#!">Money Back Guarantee</a></li>
                            <li><a href="#!">Cancellation Policy</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <h3 class="heading">Finding Roommates</h3>
                        <ul>
                            <li><a href="#!">How it works</a></li>
                            <li><a href="#!">FAQ</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <h3 class="heading">myPadi.ng</h3>
                        <p class="">&copy; myPadi Networks Technology Limited - RC 1417193 (myPadi.ng) </p>
                        <p>29 Mambilla Street, Off Aso Drive, FCT-Abuja</p>
                        <h4>Follow Us</h4>
                        <p class="second-row"><a href="http://www.twitter.com/mypadi_NG"><i class="fa fa-twitter "></i></a> &nbsp;&nbsp;<a href="http://www.instagram.com/mypadi.ng"><i class="fa fa-instagram "></i></a> &nbsp;&nbsp;<a href="http://www.linkedin.com/company/mypadi"><i class="fa fa-linkedin "></i></a> &nbsp;&nbsp;<a href="http://www.facebook.com/mypadi.ng"><i class="fa fa-facebook "></i></a> </p>
                    </div>
                </div>
                <div class="row second-row text-center">
                </div>
            </div>
            
</section>

</template>

<script>
    export default{
        
        methods: {

            tawk() { //of Tawk.to Script

                var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                (function(){
                var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
                s1.async=true;
                s1.src='https://embed.tawk.to/59582c10e9c6d324a473853e/default';
                s1.charset='UTF-8';
                s1.setAttribute('crossorigin','*');
                s0.parentNode.insertBefore(s1,s0);
                })();

            },

            slick()  { 


                $('.slides').slick({
                    dots: false,
                    autoplay: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    responsive: [{
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true
                            }
                        }, {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
                });


                $('.show-slides').slick({
                    dots: false,
                    autoplay: true,
                    infinite: true,
                    speed: 300,
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    responsive: [{
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                infinite: true,
                                dots: true
                            }
                        }, {
                            breakpoint: 600,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }, {
                            breakpoint: 480,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                        // You can unslick at a given breakpoint now by adding:
                        // settings: "unslick"
                        // instead of a settings object
                    ]
                });
            

            }
        }

    }
</script>