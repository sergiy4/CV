import React, {Component} from "react";
import uniqid from "uniqid";

class Education extends Component{
    constructor(props){
        super(props)

        this.state = {  
            educationList:[],
            education:{
                id:uniqid(),
                universityName:'',
                specialty:'',
                faculty:'',
                delBtn:false
            },
            AddBtn:false,
            form:false
        }
    }

    showAddBtn = ()=>{
        this.setState({
            AddBtn:true
        })
    }

    
    UnShowAddBtn = ()=>{
        this.setState({
            AddBtn:false
        })
    }
    
    showForm = ()=>{
        this.setState({
            form:true
        })
    }
    
    UnShowForm = ()=>{
        this.setState({
            form:false
        })
    }

    showDelBtn = (id) =>{
        let newList = this.state.educationList.map(item =>{
            if(item.id === id){
                const newItem = {
                    id: item.id,
                    universityName: item.universityName,
                    specialty: item.specialty,
                    faculty: item.faculty,
                    delBtn:true
                }
                return newItem
            }else return item

        })

        this.setState({
            educationList:newList
        })
    }

    UnShowDelBtn = () =>{
        let newList = this.state.educationList.map(item=>{
            const newItem = {
                id: item.id,
                universityName: item.universityName,
                specialty: item.specialty,
                faculty: item.faculty,
                delBtn:false
            }
            return newItem
        })

        this.setState({
            educationList:newList
        })
    }

    deleteEducationItem = (id) =>{
        this.setState({
            educationList:this.state.educationList.filter(item => item.id !== id)
        })
    }

    done = (e) =>{
        e.preventDefault()
        if(this.state.education.universityName &&
        this.state.education.faculty &&
        this.state.education.specialty){

            this.setState({
                educationList: this.state.educationList.concat(this.state.education),
                education:{
                    id: uniqid(),
                    universityName: this.state.education.universityName,
                    specialty: this.state.education.specialty,
                    faculty: this.state.education.faculty,
                    delBtn: this.state.education.delBtn
                }
            })       
        }
        
    }

    render(){
        return( 
            <div   className="education_cv" onMouseEnter={this.showAddBtn} onMouseLeave={this.UnShowAddBtn}>
                <h3>Education:</h3>
                {this.state.AddBtn &&(
                    <button onClick={this.showForm} className='edit_btn'>Add</button>
                )}
                {this.state.form &&(
                    <form className="Form">
                      <label htmlFor='universityName'>University </label>
                      <input value={this.state.education.universityName} id='universityName' onChange={(e)=>{
                        this.setState({
                            education:{
                                id: this.state.education.id,
                                universityName: e.target.value,
                                specialty: this.state.education.specialty,
                                faculty: this.state.education.faculty,
                                delBtn: this.state.education.delBtn
                            }
                        })
                      }}></input>

                      <label  htmlFor='specialty'>Specialty</label>
                      <input value={this.state.education.specialty} id='specialty' onChange={(e)=>{
                         this.setState({
                            education:{
                                id: this.state.education.id,
                                universityName: this.state.education.universityName,
                                specialty: e.target.value,
                                faculty: this.state.education.faculty,
                                delBtn: this.state.education.delBtn
                            }
                        })
                      }} ></input>

                      <label  htmlFor='faculty' >Faculty</label>
                      <input value={this.state.education.faculty} id='faculty' onChange={(e)=>{
                         this.setState({
                            education:{
                                id: this.state.education.id,
                                universityName: this.state.education.universityName,
                                specialty: this.state.education.specialty,
                                faculty: e.target.value,
                                delBtn: this.state.education.delBtn
                            }
                        })
                      }}></input>

                      <button  type="submit" onClick={this.done} className='edit_btn'>Done</button>
                      <button  onClick={this.UnShowForm} className='edit_btn'>Close</button>
                    </form>
                )}
                {this.state.educationList.length > 0 &&(
                    
                    <ul>
                        {console.log('here')}
                        {this.state.educationList.map(item=>{
                           return <li key={item.id} onMouseEnter={()=>this.showDelBtn(item.id)} onMouseLeave={this.UnShowDelBtn}>
                                <p>{item.universityName}</p>
                                <p>{item.specialty}</p>
                                <p>{item.faculty}</p>
                                {item.delBtn &&(
                                    <button onClick={()=>this.deleteEducationItem(item.id)} className='edit_btn'>Delete</button>
                                )}
                            </li>
                        })}
                    </ul>
                )}
            </div>
        )
        
        
    }
}

export default Education