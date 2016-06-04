import React, { PropTypes } from 'react';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state ={
      course: {title:" "} 
    };

    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onClickSave = this.onClickSave.bind(this);


  }

  onChangeTitle(evt) {
    const course = this.state.course;
    course.title = evt.target.value;
    this.setState({course: course});
  }

  onClickSave() {
    alert(`saving... ${this.state.course.title}`);
  }

  render(){
   return (
    <div>
      <h1>Courses</h1>
      <h2>Add Course</h2>
      <input
        type="text"
        value={this.state.course.title}
        onChange={this.onChangeTitle}/>

      <input
        type="submit"
        value="save"
        onClick={this.onClickSave}/>
    </div>
    );
  }
}

export default CoursesPage;
