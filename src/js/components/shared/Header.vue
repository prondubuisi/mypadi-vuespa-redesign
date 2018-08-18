<template>
	
	<nav class="navbar navbar-inverse">
        <div class="container">
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                    <span>MENU</span>
                </button>   

                <router-link to ='/' class="navbar-brand">
                    <img src="https://res.cloudinary.com/knownigeria/image/upload/v1531089359/test_images/WhatsApp_Image_2018-07-08_at_22.09.41.jpg">
                </router-link>

            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
                <ul class="nav navbar-nav navbar-right">
                           <li>
                                <router-link to="/" >
                                    <span class="glyphicon glyphicon-heart"></span>Become an Ambassador
                                </router-link>                
                           </li>
                           <li>
                                <router-link to="/listing">
                                  <span class="glyphicon glyphicon-bed"></span> Rent your Hostel
                                </router-link>    
                           </li>
                          <li>
                              <router-link to="/signup" >
                                <span class="glyphicon glyphicon-user"> </span> Sign Up
                              </router-link>      
                          </li>      
                        <li>  
                            <router-link to="/login" >
                              <span class="glyphicon glyphicon-log-in"></span> Login
                            </router-link>    
                        </li>
                </ul>
            </div>
        </div>
    </nav>

</template>

<script>

export default {


}
	
</script>

