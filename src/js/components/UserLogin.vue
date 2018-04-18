<template>
	<section class="mp-top-lead" style="height: 100%">
        <div class="inner" style="height: 100%">
            <div class="container-fluid">
                <div class="content">
                    
                    <div class="row ">
                        <div class="formbox col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">

                             
                            <form action="https://www.mypadi.ng/login" method="post">
                                <input type="hidden" name="_token" value="iqp62utPIfhl0nwzTtdFccJSxibKk0Ji1umV9lK3">
                                
                                <div class="form-group">
                                    <input type="email" name="email" class="form-control" placeholder="Email address or phone number">
                                </div>
                                <div class="form-group">
                                    <input type="password" name="password" class="form-control" placeholder="Password">
                                </div>
                                <div class="form-group">
                                    <input type="submit" role="button" class="btn btn-lg btn-block mp-btn big" value="LOGIN">
                                </div>
                            </form>
                        </div>
                    </div>
                    <div class="row cta">
                        <div class="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3">
                            <span>New to Mypadi.ng?</span> <a href="https://www.mypadi.ng/register">Register</a>
                            <br/><a href="https://www.mypadi.ng/password.request">Forgot your password?</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
	export default{

	}
</script>