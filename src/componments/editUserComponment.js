import { extend } from 'jquery'
import React ,{Component,useContext} from 'react'
import RegisterUserComponment from './registerUserComponment'
import Header from './HeaderComponment'
import axios from 'axios'
import {UserContext} from './userContext'
function EditUserComponment (props){
//    const value = useContext(UserContext)
   const [userLogin,setLogin] = useContext(UserContext);
   setLogin(localStorage.getItem("userID"))
  
//  setLogin(props.location.state)
//     constructor(props){
//         super(props);
//         this.state = {
//             id:this.props.match.params.id,
//             userLogin:true,
           
//                 // cities : [],
//                 // constituency : [],
//                 // province : [],
//                 // NaselectValue: "",
//                 // PPConstituency:[],
//                 // PPConstituencySelectBox:"",
//                 // showText:"Please Select NA-Constituency First"
                
//     //   // console.log(loggedIn);
//     //  //  console.log(props.location.state);
//     //  //  setLoggedIn(props.location.state)
//     //   //  console.log(loggedIn);
      
//     //  }
//     }
//     console.log(props)
// }
//     componentDidMount(){
//         axios.request({
//             method: "GET",
//             url: 'http://local.apis.evs.com/api/getDataForRegistration',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
           
//         })
//             .then(response => {
//                 console.log(response)
//                 this.setState({
//                     cities:  response.data.cities
                    
//                 })
//                 this.setState({
//                     constituency : response.data.constituency
//                 })
//                 this.setState({
//                     province:response.data.province
//                 })
//             })
//                 .catch((response) => {
//                     console.log(response);
//                 })
                
//         axios.request({
//             method: "GET",
//             url: 'http://local.apis.evs.com/api/getUserById/'+this.state.id,
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//             },
//         })
//             .then(response => {
//                 console.log(response)
//               return false;
              
//             })     
//             .catch((response) => {
//                 console.log(response);
//             })
    
// }
//  render(){
     return(
      <div>
          <RegisterUserComponment user_id = {props.match.params.id}/>
      </div>
     )
 }
// }
export default EditUserComponment