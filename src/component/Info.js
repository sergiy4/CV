import React, {Component} from 'react';

class Info extends Component{
    constructor(props){
        super(props)

        this.state = {
            gmail:"MyMind@gmail.com",
            num:"+0002341331",
        
            edit:false,
            Btn:false

        }

        this.edit = this.edit.bind(this)
        this.getBtn = this.getBtn.bind(this)
        this.handleChangeGmail = this.handleChangeGmail.bind(this)
        this.handleChangeNum = this.handleChangeNum.bind(this)
       
    
    }
    edit = (e) =>{
      
        this.setState({
            edit:!this.state.edit,
            Btn:false
        })
    }

    getBtn(){
        this.setState({
            Btn:!this.state.Btn
        })
    }

    handleChangeGmail = (e) =>{
        
        this.setState({
            gmail:e.target.value,
           
        })
    }

    handleChangeNum = (e) =>{
        
        this.setState({
            num:e.target.value,
        })
    }


    render(){
       

        if(!this.state.edit){
            
            return(
                <div className="Info_cv" onMouseEnter={this.getBtn} onMouseLeave={this.getBtn}>
                    <h3>Contact:</h3>
                    <h4>{this.state.gmail}</h4>
    
                    <h4>{this.state.num}</h4>
    

                    {this.state.Btn &&(
                        <button onClick={this.edit} className='edit_btn'>Edit</button>
                    )}

                </div>
            )
        }
        else{
           
            return(
                <div className="Info_cv">
                    <h3>Contact:</h3>
                    <input placeholder='gmail' onChange={this.handleChangeGmail}></input>
                   
                    <input placeholder='+000 000 000' onChange={this.handleChangeNum}></input>

                    <button onClick={this.edit}>Done</button>
                </div>
            )
            
        }
    }
}

export default Info