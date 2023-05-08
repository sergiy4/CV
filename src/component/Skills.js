import React , {Component} from "react";
import uniqid from "uniqid";

class Skills extends Component{
    constructor(props){
        super(props)

        this.state = {
            skills:[],
            skill:{
                text:'',
                showBtnDel:false,
                id:uniqid()
            },
            showBtnAdd:false,
            form:false
            
        }
    }

    ShowBtnAdd = () => {
        this.setState({
            showBtnAdd:true
        })
    }

    UnShowBtnAdd = () => {
        this.setState({
            showBtnAdd:false
        })
    }

    ShowForm = () =>{
        this.setState({
            form:true
        })
    }

    UnShowForm = () =>{
        this.setState({
            form:false
        })
    }

    handleChangeSkills = (e) =>{
        this.setState({
            skills:this.state.skills,
            skill:{
                text: e.target.value,
                showBtnDel: this.state.skill.showBtnDel,
                id:this.state.skill.id
            },
            showBtnAdd:this.state.showBtnAdd,
            form:this.state.form
        })
    }

    done = (e) =>{
        e.preventDefault()
        if(this.state.skill.text){
            this.setState({
                skills:this.state.skills.concat(this.state.skill),
                skill:{
                    text: this.state.skill.text,
                    showBtnDel: this.state.skill.showBtnDel,
                    id:uniqid()
                }
            })
        }
        
    }

    showDelBtn = (id) =>{
        let newArr = this.state.skills.map(item=>{
            if(item.id === id){
                const newItem = {
                    id:item.id,
                    text:item.text,
                    showBtnDel:true
                }
                return newItem
            }else{
                return item
            }
       })

       this.setState({
        skills:newArr
       })
    }

    UnShowDelBtn = () =>{
        let newArr = this.state.skills.map(item=>{
           
            const newItem = {
                id:item.id,
                text:item.text,
                showBtnDel:false
            }
            return newItem
            
       })

       this.setState({
        skills:newArr
       })
    }

    deleteItem = (id) =>{
        let newList = this.state.skills.filter(item => item.id !== id)

        this.setState({
            skills:newList
        })
    }
    render(){
        return(
            <div className="skills_cv" onMouseEnter={this.ShowBtnAdd} onMouseLeave={this.UnShowBtnAdd}>
                <h3>Skills:</h3>
                
                {this.state.form && (
                    <>
                        <input placeholder="React" onChange={this.handleChangeSkills}></input>
                        <button onClick={this.UnShowForm} className='edit_btn'>Close</button>
                        <button onClick={this.done} className='edit_btn'>Done</button>
                    </>
                )}
                {this.state.skills && (
                    <ul style={{listStyle: "none"}}>
                    {this.state.skills.map(item=>{
                       return <li key={item.id} onMouseEnter={()=>this.showDelBtn(item.id)} onMouseLeave={this.UnShowDelBtn} style={{marginTop:"20px"}}>{item.text} 
                         {item.showBtnDel && (<button onClick={()=>this.deleteItem(item.id)} className='edit_btn'>Delete</button>)}
                        </li>

                    })}
                    </ul>
                )}
                {this.state.showBtnAdd &&(
                    <button onClick={this.ShowForm} className='edit_btn'>Add</button>
                )}
           </div>
        )
    }
}

export default Skills
//  <h1  >{item.text}</h1>
//
//  key={item.id} 
