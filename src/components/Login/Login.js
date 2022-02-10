import './Login.css';

function Login() {
    return (
        <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid"
          alt="Sample image"/>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form>
            <h3 class="fw-normal mb-3 pb-3">Sign in</h3>
           <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" placeholder='Email Address'/>
            {/* <label class="form-label" for="form1Example13">Email address</label> */}
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" placeholder='Password'/>
            {/* <label class="form-label" for="form1Example23">Password</label> */}
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            {/* <!-- Checkbox --> */}
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form1Example3"
                checked
              />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

        </form>
      </div>
    </div>
  </div>
  {/* <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
    {/* <!-- Copyright --> */}
    {/* <div class="text-white mb-3 mb-md-0">
      Copyright © 2020. All rights reserved.
    </div>
    {/* <!-- Copyright --> */}

    {/* <!-- Right --> */}
    {/* <div>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-facebook-f"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-twitter"></i>
      </a>
      <a href="#!" class="text-white me-4">
        <i class="fab fa-google"></i>
      </a>
      <a href="#!" class="text-white">
        <i class="fab fa-linkedin-in"></i>
      </a>
    </div> */}
    {/* <!-- Right --> */}
  {/* </div>  */}
</section>
    );
  }
  
  export { Login};