import React,{Component} from 'react'

class UserSignIn extends Component{
 render(){
     return(
         <div className="container">
            <div className="row">
                <div className = "col-md-5 mx-auto">
                <div id="first">
				<div className="myform form ">
					 <div class="logo mb-3">
						 <div class="col-md-12 text-center">
							<h1>Login</h1>
						 </div>
					</div>
                   <form>
                           <div className="row">
                               <label for="exampleInputEmail1">Email address</label>
                           </div>
                           <div className="row">
                           <div className="col-md-2"></div>
                           <input type="email" name="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email" value=""></input>
                           </div>
                           
                          
                           <div className="row mt-2">
                               <label for="exampleInputEmail1">Password</label>
                           </div>
                           <div className="row">
                              <input type="password" name="password" id="password" class="form-control" aria-describedby="emailHelp" placeholder="Enter Password"></input>
                           </div>
                           <div class="form-group">
                              <p class="text-center mt-3">By signing up you accept our <a href="#">Terms Of Use</a></p>
                           </div>
                           <div class="col-md-12 text-center ">
                              <input type="submit" class=" btn btn-block mybtn btn-primary tx-tfm" value="Login"></input>
                           </div>
                           <div class="form-group ">
                              <p class="text-center">Don't have account? <a href="http://local.evs.com/user" id="signup">Sign up here</a></p>
                           </div>
                        </form>

				</div>
			</div>
                </div>
            </div>
         </div>
     )
 }
}
export default UserSignIn