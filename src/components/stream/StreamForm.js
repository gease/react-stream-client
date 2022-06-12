import React from "react";
import { Field, reduxForm} from "redux-form";

class StreamForm extends React.Component {

    renderInput = ({input, label, meta}) => {
        const fieldClass = `field ${meta.error && meta.touched ? 'error' : ''}`
        return (
            <div className={fieldClass} >
                <label>{label}</label>
                <input {...input}/>
                <div>{this.renderError(meta)}</div>
            </div>
        )
    }

    renderError(meta) {
        if (meta.touched && meta.error) {
            return (
                <div className="ui error message">
                    {meta.error}
                </div>
            );
        }
        return null;
    }

    formSubmit = formValues => {
        this.props.onSubmit(formValues, this.props.history);
    }

    render() {
        return <form className="ui form error" onSubmit={this.props.handleSubmit(this.formSubmit)}>
            <Field name="title" component={this.renderInput} label="Enter Title"/>
            <Field name="description" component={this.renderInput} label="Enter Description"/>
            <button className="ui button secondary ">Go-go-go</button>
        </form>
    }
}

const validate = (formValues) =>
{
    const err = {};

    if (!formValues.title) {
        err.title = 'You should enter a title';
    }

    if (!formValues.description) {
        err.description = 'You should enter a description';
    }

    return err;
}

export default reduxForm({form: 'streamForm', validate})(StreamForm);
