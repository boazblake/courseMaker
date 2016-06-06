import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const CourseForm = ({course, allAuthors, onSave, onChange, loading, errors}) => {
  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onChange}
        error={errors.title}/>

        <SelectInput
          name="authorId"
          label="Author"
          value={course.authorId}
          defaultOption="select Author"
          options={allAuthors}
          onChnage={onChange} error={errors.authorId}/>

        <TextInput
          name="category"
          label="category"
          value={course.category}
          onChange={onChange}
          error={errors.category}/>

        <TextInput
          name="length"
          label="length"
          value={course.length}
          onChange={onChange}
          error={errors.length}/>

        <input
          name="submit"
          disabled={loading}
          value={loading ? 'saving ...' : 'Save'}
          onChange={onChange}
          error={errors.length}/>
    </form>
  );
};

CourseForm.propTypes = {
  course : React.PropTypes.object.isRequired,
  allAuthors : React.PropTypes.array,
  onSave : React.PropTypes.func.isRequired,
  onChange : React.PropTypes.func.isRequired,
  loading : React.PropTypes.boolean,
  errors : React.PropTypes.object
};

export default CourseForm;