import React from 'react';
import {connect} from 'react-redux';
import {createProject} from '../../action/ProjectAction';
import PropTypes from 'prop-types';

class Addproject extends React.Component{

    constructor(props){
        super(props);
        this.state={
            id:"",
            projectName:"", 
            projectDesc:"",
            projectStartDate:"",
            projectEndDate:"",
            errors:{}
            
        };
        this.onChange=this.onChange.bind(this);
        this.onSubmit=this.onSubmit.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.errors){
            this.setState({errors:nextProps.errors});
        }
    }

    onChange(event){
        this.setState({[event.target.name]:event.target.value});
    }

    onSubmit(event){
        event.preventDefault(); //to prevent refresh
        console.log("Submit");
        
        const newProject={
            id:this.state.id,
            projectName:this.state.projectName, 
            projectDesc:this.state.projectDesc,
            projectStartDate:this.state.projectStartDate,
            projectEndDate:this.state.projectEndDate
        };
        console.log(newProject);
        this.props.createProject(newProject,this.props.history);
    }
    

    render(){
        return(
            <div className="project">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <div className="alert alert-primary" role="alert">
                            <h3>Create Project </h3>                            
                            </div>
                            <hr />
                            <form onSubmit={this.onSubmit}>
                                <div className="form-group">
                                    <input type="text" className="form-control form-control-lg " placeholder="Project Name" 
                                    name="projectName"
                                    value={this.state.projectName}
                                    onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <input disabled type="text" className="form-control form-control-lg" placeholder="Unique Project ID"
                                        name="id" 
                                        value={this.state.id}
                                        onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control form-control-lg" placeholder="Project Description" 
                                    name="projectDesc"
                                    value={this.state.projectDesc}
                                    onChange={this.onChange}></textarea>
                                </div>
                                <h6>Start Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" 
                                    name="projectStartDate"
                                    value={this.state.projectStartDate} 
                                    onChange={this.onChange}
                                    />
                                </div>
                                <h6>Estimated End Date</h6>
                                <div className="form-group">
                                    <input type="date" className="form-control form-control-lg" 
                                    name="projectEndDate" 
                                    value={this.state.projectEndDate}
                                    onChange={this.onChange}
                                    />
                                </div>

                                <input type="submit" className="btn btn-primary btn-block mt-4" />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Addproject.propTypes={
    createProject:PropTypes.func.isRequired,
    errors:PropTypes.object.isRequired
};

const mapStateToProps = state =>({
    errors:state.errors
});

export default connect(mapStateToProps,{createProject}) (Addproject);


