import React, {Component} from 'react';

class WorkList extends Component{
    constructor(props){
        super(props)
       
    }
    // 
    render(){
        
        return(
            <ul>
                {this.props.works.map(item=>{
                    // console.log(item.ShowDeleteBtn )

                    return(
                        <div key={item.id} onMouseEnter={()=>this.props.ShowBtn(null,item.id)} onMouseLeave={this.props.UnShowDeleteBtn}>
                            {item.ShowDeleteBtn && (
                                <button onClick={()=>this.props.deleteItem(item.id)} className='edit_btn'>Delete</button>
                            )}
                            <p>Company : {item.companyName} </p>
                            <p>Position : {item.position} </p>
                            <p>Tasks : {item.tasks} </p>
                            <p>Experience : {item.experience} </p>
                        </div>
                    )
                })}
               
            </ul>
            
        )
    }

}

export default WorkList