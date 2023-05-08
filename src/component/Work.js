import React, {Component} from 'react';
import uniqid from "uniqid";
import WorkList from './WorkList';

class Work extends Component{
    constructor(){
        super()

        this.state = {
            works:[],
            work :{
                id:uniqid(),
                companyName:"",
                position:"",
                tasks:"",
                experience:"",
                ShowDeleteBtn:false
            },
            add:false,
            form:false,
            
        }

        this.getBtn = this.getBtn.bind(this)
        this.deleteBtn=this.deleteBtn.bind(this)
        this.getForm = this.getForm.bind(this)
        this.closeForm = this.closeForm.bind(this)

        this.handleChangeCompanyName = this.handleChangeCompanyName.bind(this);
        this.handleChangeExperience = this.handleChangeExperience.bind(this)
        this.handleChangePosition = this.handleChangePosition.bind(this)
        this.handleChangeTasks=this.handleChangeTasks.bind(this)

        this.done = this.done.bind(this)
        this.ShowDeleteBtn = this.ShowDeleteBtn.bind(this)
        this.UnShowDeleteBtn = this.UnShowDeleteBtn.bind(this)
        this.deleteItem = this.deleteItem.bind(this)
    }

    ShowDeleteBtn = (e,id) =>{
        console.log(id)

        let newList = this.state.works.map(item => {
            if(item.id === id){
                const newItem = {
                    id: item.id,
                    position:item.position,
                    tasks: item.tasks,
                    experience:item.experience,
                    companyName:item.companyName,
                    ShowDeleteBtn:true   
                }
                return newItem
            }else{
                const newItem = {
                    id: item.id,
                    position:item.position,
                    tasks: item.tasks,
                    experience:item.experience,
                    companyName:item.companyName,
                    ShowDeleteBtn:false   
                }
                return newItem
            }
           
        })
        this.setState({
            works:newList
          
        })
       
    }

    UnShowDeleteBtn = () =>{

        let newList = this.state.works.map(item => {
           
            const newItem = {
                id: item.id,
                position:item.position,
                tasks: item.tasks,
                experience:item.experience,
                companyName:item.companyName,
                ShowDeleteBtn:false  
            }
            return newItem
        })
        
        this.setState({
            works:newList,
           
        })
    }
    getBtn(){
        this.setState({
            add:true
        })
       
    }
    deleteBtn(){
        this.setState({
            add:false
        })
    }

    
    getForm(){
       this.setState({
        form: !this.state.form
       })
    }
    closeForm(){
        this.setState({
            form:false,
            add:true
        })
    }

    handleChangeCompanyName = (e)=>{
        this.setState({
            work:{
                id:this.state.work.id,
                position:this.state.work.position,
                tasks: this.state.work.tasks,
                experience:this.state.work.experience,
                companyName:e.target.value,
                ShowDeleteBtn:this.state.work.ShowDeleteBtn
            }
        })
    }
    handleChangePosition = (e)=>{
        this.setState({
            work:{
                companyName:this.state.work.companyName,
                id:this.state.work.id,
                position:e.target.value,
                tasks: this.state.work.tasks,
                experience:this.state.work.experience,
                ShowDeleteBtn:this.state.work.ShowDeleteBtn
                
            }
        })
    }
    handleChangeTasks = (e)=>{
        this.setState({
            work:{
                companyName:this.state.work.companyName,
                id:this.state.work.id,
                position:this.state.work.position,
                tasks:e.target.value,
                experience:this.state.work.experience,
                ShowDeleteBtn:this.state.work.ShowDeleteBtn
            }
        })
    }
    handleChangeExperience = (e)=>{
        this.setState({
            work:{
                companyName:this.state.work.companyName,
                id:this.state.work.id,
                position:this.state.work.position,
                tasks: this.state.work.tasks,
                experience:e.target.value,
                ShowDeleteBtn:this.state.work.ShowDeleteBtn
            }
        })
    }

    done =(e)=>{
        e.preventDefault()
        if(this.state.work.companyName && this.state.work.experience
        && this.state.work.position && this.state.work.tasks){
           
            this.setState({
                works:this.state.works.concat(this.state.work),
                work:{
                    companyName:this.state.work.companyName,
                    id:uniqid(),
                    position:this.state.work.position,
                    tasks: this.state.work.tasks,
                    experience:this.state.work.experience,
                    ShowDeleteBtn:this.state.work.ShowDeleteBtn
                    
                }
            })
        }
       
    }

    deleteItem = (id)=>{
        console.log(id)
        this.setState({
            works: this.state.works.filter(item => item.id !==id)
        })
    }

    render(){
        const {work,works} = this.state
            return(
                
                <div className="Work_cv" onMouseEnter={this.getBtn} onMouseLeave={this.deleteBtn}>
                    <h3>Work:</h3>
                    {this.state.add &&(
                        <button onClick={this.getForm} className='edit_btn'>Add</button>
                    )}
                    {this.state.form &&(
                       
                        <form class='Form'>
                            <label htmlFor='companyName'>Name Company</label>
                            <input value={work.companyName} placeholder='SoftServe' id='companyName' onChange={this.handleChangeCompanyName}></input>

                            <label htmlFor='position'>Position</label>
                            <input value={work.position}placeholder='Front-end developer' id='position' onChange={this.handleChangePosition}></input>

                            <label htmlFor='tasks'>Tasks</label>
                            <input value={work.tasks}placeholder='web page development' id="tasks" onChange={this.handleChangeTasks}></input>

                            <label htmlFor='experience'>experience</label>
                            <input value={work.experience} placeholder='X year' id="experience" onChange={this.handleChangeExperience}></input>

                            <button  type="submit" onClick={this.done} className='edit_btn'>Done</button>
                            <button  onClick={this.closeForm} className='edit_btn'>Close</button>
                        </form>
                        )
                    }
                    <WorkList works={works} ShowBtn={this.ShowDeleteBtn} UnShowDeleteBtn={this.UnShowDeleteBtn} deleteItem={this.deleteItem}/>
                </div>
            )
    }

}

export default Work