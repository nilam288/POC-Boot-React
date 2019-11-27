import React from 'react';
import {createProject,getProject} from"../../action/ProjectAction";
import{connect} from'react-redux';
import PropTypes from 'prop-types';
class updateProject extends React.Component
{
    constructor()
    {
    super();
    this.state={ //dashbord
            id:"",
            projectName:"", 
            projectDesc:"",
            projectStartDate:"",
            projectEndDate:"",
            //errors:{}
       };
       this.onChange=this.onChange.bind(this);
       this.onSubmit=this.onSubmit.bind(this);
    }
    componentDidMount()
    {
        const { id }=this.props.match.params;
        this.props.getProject(id,this.props.history);
    }

     componentWillReceiveProps(nextProps){
     const{
            id,
            projectName,
            projectDesc,
            projectStartDate,
            projectEndDate
            }=nextProps.project;
            this.setState({
            id,
            projectName,
            projectDesc,
            projectStartDate,
            projectEndDate
            });
                }
 onChange(event)
    {
    this.setState({[event.target.name]:event.target.value});
    }
    onSubmit(event)
    {
      event.preventDefault();
      const updateProject={
        id:this.state.id,
        projectName:this.state.projectName,
        projectDesc:this.state.projectDesc,
        projectStartDate:this.state.projectStartDate,
        projectEndDate:this.state.projectEndDate,
         };
     this.props.createProject(updateProject,this.props.history);
    }

    render()
    {
        return(
            <div className="project">
        <div className="container">
            <div className="row">
                <div className="col-md-8 m-auto">
                    {/*<h5 className="display-4 text-center"> Edit Project form</h5>*/}
                    <div className="alert alert-success" role="alert">Edit Project form </div>
                    <hr />
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg " placeholder="Project Name" 
                            name="projectName"
                            value={this.state.projectName}
                            onChange={this.onChange}
                            />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control form-control-lg" placeholder="Unique Project ID"
                            name="id"
                            value={this.state.id}
                            disabled />
                        </div>
                        
                        <div className="form-group">
                            <textarea className="form-control form-control-lg" placeholder="Project projectDesc"
                            name="projectDesc"
                            value={this.state.projectDesc}
                            onChange={this.onChange}></textarea>
                        </div>
                        <h6>Start Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" 
                             name="projectStartDate" 
                             value={this.state.projectStartDate}
                             onChange={this.onChange}  />
                        </div>
                        <h6>Estimated End Date</h6>
                        <div className="form-group">
                            <input type="date" className="form-control form-control-lg" 
                            name="projectEndDate" 
                            value={this.state.projectEndDate} 
                            onChange={this.onChange}  />
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

  updateProject.propTypes = {
  getProject: PropTypes.func.isRequired,
  createProject:PropTypes.func.isRequired,
  project: PropTypes.object.isRequired
};
 const mapStateToProps = state => ({
    project:state.projects.project
  });
    
    export default connect(mapStateToProps,{getProject,createProject})(updateProject);