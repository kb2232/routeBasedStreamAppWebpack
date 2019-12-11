import React from 'react';
import {Field, reduxForm} from 'redux-form';

class streamCreate extends React.Component{
  renderInput(formProps){
    return(
      <div>
        <label>{formProps.input.name}</label>
        <input type="radio" {...formProps.input} />
      </div>
    )
  }
  renderText(formProps){
    return(
      <div>
        <label>{formProps.input.name}</label>
        <input type="text" />
      </div>
    )
  }
  render(){
    return(
      <div>
        <h3>Form submissions for streams</h3>
          <form>
            <div>
              <Field name="Name" component={this.renderText} />
            </div><br />
            <div style={styles.form}>
              <Field name="Male" component={this.renderInput} />
              <Field name="Female" component={this.renderInput} />
              <Field name="Neither" component={this.renderInput} />
            </div>
          </form>
      </div>
    )
  }
}

const styles={
  form:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems:'flex-start'
  }
}
export default reduxForm(
  {
    form:'creatingStream'
  })(streamCreate);