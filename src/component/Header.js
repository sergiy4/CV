import React, {Component} from 'react';
import Info from './Info';

class Header extends Component{
    constructor(){

        super();

        this.state = {
            firstName:"First Name",
            lastName: "Second Name",
            edit:false,
            Btn:false

        }

        this.edit = this.edit.bind(this)
        this.getBtn = this.getBtn.bind(this)
        this.removeBtn = this.removeBtn.bind(this)
        this.handleChangeFirstName = this.handleChangeFirstName.bind(this)
        this.handleChangeSecondName = this.handleChangeSecondName.bind(this)
    }

    edit(){
        this.setState({
            edit:!this.state.edit,
            Btn:false
        })
    }

    getBtn(){
        this.setState({
            Btn:true
        })
    }
    removeBtn(){
        this.setState({
            Btn:false
        })
    }

    handleChangeFirstName = (e) =>{
        this.setState({
            firstName: e.target.value,
        })
    }

    handleChangeSecondName = (e) =>{
        this.setState({
            lastName: e.target.value, 
        })
    }

    render(){
        if(!this.state.edit){
            
            return(
                <div>
                    <div className="header_cv"  onMouseEnter={this.getBtn} onMouseLeave={this.removeBtn}>
                       

                        <h1>{this.state.firstName}</h1>
                        <h1>{this.state.lastName}</h1>

                        {this.state.Btn &&(
                        <button onClick={this.edit} className='edit_btn'>Edit</button>
                        )}
                        
                    </div>
                    
                </div>
            )
        }
        else{
           
            return(
                <div>
                    <div className="header_cv" >
                        
                        <button onClick={this.edit}>Done</button>
                        <input defaultValue={this.state.firstName} onChange={this.handleChangeFirstName}></input>
                        <input defaultValue={this.state.lastName} onChange={this.handleChangeSecondName}></input>
                        
                    </div>
                   
                </div>
            )
            
        }
        
    }
}

export default Header;