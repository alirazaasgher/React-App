import React,{Component} from 'react'
import axios from 'axios'
import { withRouter } from "react-router-dom";
import {UserContext} from './userContext'
class RegisterUser extends Component {
    static contextType  = UserContext
    
    constructor(props){
        super(props)
        this.state = {
            cities : [],
            constituency : [],
            province : [],
            NaselectValue: "",
            PPConstituency:[],
            PPConstituencySelectBox:"",
            showText:"Please Select NA-Constituency First",
            firstName:"",
            lastName:"",
            email:"",
            cnic:"",
            provinceis:"0",
            city:"0",
            naConstituency:"0",
            ppConstituency:"0",
            userId:localStorage.getItem('userID'),
            displayMessage:"Create User Account",
            update:false,
            isUserLogin:false
        }
        this.getPPConstituency = this.getPPConstituency.bind(this);

      console.log(this.contextType)
     
    }
    componentDidMount(){
        axios.request({
            method: "GET",
            url: 'http://local.apis.evs.com/api/getDataForRegistration',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
           
        })
            .then(response => {
                console.log(response)
                this.setState({
                    cities:  response.data.cities
                    
                })
                this.setState({
                    constituency : response.data.constituency
                })
                this.setState({
                    province:response.data.province
                })
                
            })
            .catch((response) => {
                console.log(response);
            })

            if(this.props.user_id){
                axios.request({
                                method: "GET",
                                url: 'http://local.apis.evs.com/api/getUserById/'+this.props.user_id,
                                headers: {
                                    'Accept': 'application/json',
                                    'Content-Type': 'application/json',
                                },
                            })
                                .then(response => {
                                    this.setState({
                                        displayMessage:"Update Information"
                                    })
                                    this.setState({
                                        update:true
                                    })
                                    this.setState({
                                        formSubmit:"this.updateUserData"
                                    })
                                    if(response.data.success === "true"){
                                    this.setState({
                                        firstName:response.data.data.user_first_name
                                    })
                                    this.setState({
                                        lastName:response.data.data.user_last_name
                                    })
                                    this.setState({
                                        lastName:response.data.data.user_last_name
                                    })
                                    this.setState({
                                        email:response.data.data.user_email
                                    })
                                    this.setState({
                                        cnic:response.data.data.user_cnic
                                    })
                                    this.setState({
                                        provinceis:response.data.data.evs_province
                                    })
                                    this.setState({
                                        city:response.data.data.evs_city
                                    })
                                    this.setState({
                                        naConstituency:response.data.data.evs_na_constituency
                                    })
                                    this.getPPConstituency(false, this.state.naConstituency);
                                   
                                    this.setState({
                                        ppConstituency:response.data.data.evs_pp_constituency
                                    })
                                   
                                }
                                    console.log(response)
                                  return false;
                                  
                                })     
                                .catch((response) => {
                                    console.log(response);
                                })
            }
    }
    getPPConstituency(e, constit = false){
     
        let newConst = false;
        if(constit) {
            newConst = constit;
        } else {
            newConst = e.target.value
        }
            this.setState({
                naConstituency:newConst
                });
        axios.request({
            method: "GET",
            url: "http://local.apis.evs.com/api/getPPConstituency/"+newConst,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        })
            .then(response => {
                console.log(response)
                this.setState({
                    PPConstituency:response.data.pp_constituencies
                })
                this.setState({
                    showText:"Please Select One"
                })
               
            })
            .catch((response) => {
                console.log(response);
            })
           
       
    }
    handelUserName = (event) =>{
     this.setState({
        firstName:event.target.value
     })
    }
    handelLastName = (event) =>{
      this.setState({
        lastName:event.target.value
      })
    }
    handelEmail = (event) =>{
        this.setState({
            email:event.target.value
          })
    }
    handelCnic = (event) => {
      this.setState({
          cnic:event.target.value
      })
    }
    handelProvinces = (event) =>{
    this.setState({
        provinceis:event.target.value
    })
   
    }
    handelCity = (event) =>{
        this.setState({
            city:event.target.value
        })
    }
    handelPPConstituency = (event)=>{
        this.setState({
            ppConstituency:event.target.value
        })
       
    }
    saveUserData = (event) =>{
        event.preventDefault();
        const quotes = {
            user_first_name: this.state.firstName,
            user_last_name: this.state.lastName,
            user_email:this.state.email,
            user_cnic:this.state.cnic,
            province:this.state.provinceis,
            user_password:"12345678",
            city:this.state.city,
            NAconstituency:this.state.naConstituency,
            PPconstituency:this.state.ppConstituency
        }
          axios.request({
            method: "POST",
            url: "http://local.apis.evs.com/api/saveUser",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            data: quotes
        })
            .then(response => {
                if(response.data.success == "true"){
                    localStorage.setItem('userID', response.data.id);
                    this.setState({
                        isUserLogin:true,
                    })
                    this.props.history.push({
                        pathname: `/editUserComponment/${localStorage.getItem('userID')}`,
                        state: {
                            isUserLogin: true,
                        
                        }
                      })
                    // const path = 
                    // this.props.history.push(path);
                }
               
            })
            .catch((response) => {
               
            })
        console.log(quotes);
     
    }
    updateUserData = (event) =>{
        event.preventDefault();
        console.log(this.state.firstName)
        // alert(event.props);
    }
    render(){
        const {cities,constituency,province,PPConstituency,showText} = this.state
        return (
         
           
            
<div className="container">
{
   
        <h1>{this.state.userId}</h1>
     }
            <div className="row mt-5">
                <div className="col-md-4"></div>
    <h1>{this.state.displayMessage}</h1>
            </div>
           
            <form onSubmit = {
                this.state.update ? this.updateUserData : this.saveUserData} >
                <div className="row mt-2">
                    <div className="col-md-4"></div>
                    <label>First Name</label>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <input type="text" value = {this.state.firstName} onChange = {this.handelUserName} className="form-control col-md-5"></input>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4"></div>
                    <label>Last Name</label>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <input type="text" value = {this.state.lastName} onChange = {this.handelLastName} className="form-control col-md-5"></input>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4"></div>
                    <label>Email</label>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <input type="email" value = {this.state.email} onChange = {this.handelEmail} className="form-control col-md-5"></input>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4"></div>
                    <label>CNIC</label>
                </div>
                <div className="row ">
                    <div className="col-md-4"></div>
                    <input type="number" value = {this.state.cnic} onChange = {this.handelCnic} className="form-control col-md-5"></input>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4"></div>
                    <label>Province</label>
                </div>
                <div className="row">
                <div className="col-md-4"></div>
                    <select className="provinces form-control col-md-5" value = {this.state.provinceis} onChange={this.handelProvinces}>
                    <option value = "0">Please Selcet One</option>
                  {
                  province.map((provinceData) => 
                  <option key={provinceData.id} value={provinceData.id}>{provinceData.province_name}</option>
                  )
                 }
                    </select>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4"></div>
                    <label>City</label>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <select className="city form-control col-md-5" value = {this.state.city} onChange={this.handelCity}>
                    <option value = "0">Please Selcet One</option>
                  {
                  cities.map((cityData) => 
                  <option key={cityData.id} value={cityData.id}>{cityData.city_name}</option>
                  )
                  }
                    </select>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4"></div>
                    <label>NA-Constituency:</label>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <select className="provinces form-control col-md-5" value = {this.state.naConstituency} onChange = {this.getPPConstituency} >
                        <option value="0">Please Select One</option>
                        {
                        constituency.map((constituencyData) =>
                        <option key={constituencyData.id} value={constituencyData.id}>{constituencyData.constituency_name}</option>
                        )
                        }
                    </select>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4"></div>
                    <label>PP-Constituency:</label>
                </div>
                <div className="row">
                    <div className="col-md-4"></div>
                    <select className="PPConstituency form-control col-md-5" value={this.state.ppConstituency} onChange = {this.handelPPConstituency}>
                    <option value="">{showText}</option>
                        {
                  PPConstituency.map((PPConstituencyData) => 
                  <option key={PPConstituencyData.id} value={PPConstituencyData.id}>{PPConstituencyData.pp_constituency_name}</option>
                  )
                 }
                    </select>
                </div>
                <div className="row mt-2">
                    <div className="col-md-4"></div>
                    <input type="submit" className="btn btn-primary form-control col-md-5" value="Save User"></input>
                </div>
            </form>
        </div>
        )
            }
        }
export default RegisterUser