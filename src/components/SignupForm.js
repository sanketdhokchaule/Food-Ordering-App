import { Formik, Form, useField } from "formik";
import * as Yup from "yup";

const MyTextInput = ({label, ...props}) =>{
    const [field, meta] = useField(props);
    return(
        <>
            <label htmlFor={props.id || props.name}>{label}</label>
            <input className="flex flex-col space-y-4 justify-center items-center border-solid border-2 border-black my-3 p-1 rounded-md" {...field} {...props}/>
            {meta.touched && meta.error ? (
                <div className="error text-red-600">{meta.error}</div>
            ):null}
        </>
    )
}

const MyCheckbox = ({children, ...props}) => {
    const [field, meta] = useField({...props, type:'checkbox'});
    return(
        <div>
            <label className="checkbox-input">
                <input type="checkbox" className=" m-2 w-5 h-5" {...field}{...props}/>
                {children}
            </label>
            {meta.touched && meta.error ? (
                <div className="error text-red-600">{meta.error}</div>
            ): null}
        </div>
    )
}

const Myselect = ({label, ...props})=>{
    const [field, meta] = useField(props);
    return(
        <div className="flex flex-wrap justify-between items-center">
            <label htmlFor={props.id || props.name}>{label}</label>
            <select className="flex flex-col space-y-4 justify-center items-center border-solid border-2 border-black my-3 p-1 rounded-md"{...field}{...props}/>
            {meta.touched && meta.error?(
                <div className="error text-red-600">{meta.error}</div>
            ): null}
        </div>
    )
}

const SignupForm = () =>{
    return(
        <>
            <Formik
                initialValues={{
                    firstName:'',
                    lastName:'',
                    email:'',
                    acceptedTerms:false,
                    jobType:''
                }}
                validationSchema={Yup.object({
                    firstName:Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('Required'),
                    lastName:Yup.string()
                        .max(20, 'Must be 20 characters or less')
                        .required('Required'),
                    email:Yup.string()
                        .email('Invalid email address')
                        .required('Required'),
                    acceptedTerms:Yup.boolean()
                        .oneOf([true],'You must accept the terms and conditions.')
                        .required('Required'),
                    jobType:Yup.string()
                        .oneOf(['designer','development','product','other'],'Invalid Job Type')
                        .required('Required')
                })}
                onSubmit={(values,{setSubmitting}) =>{
                    setTimeout(()=>{
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    },400);
        
                }}
            >
                <Form className="flex flex-col bg-slate-200 m-4 p-4 rounded-lg">
                    <MyTextInput 
                        label='First Name'
                        name='firstName'
                        type='text'
                        placeholder='John'
                    />
                    <MyTextInput 
                        label='Last Name'
                        name='lastName'
                        type='text'
                        placeholder='Doe'
                    />
                    <MyTextInput 
                        label='Email Address'
                        name='email'
                        type='email'
                        placeholder='abc@example.com'
                    />
                    <Myselect label="Job Type" name="JobType">
                        <option value=''>Select a Job Type</option>
                        <option value='designer'>Designer</option>
                        <option value='development'>Development</option>
                        <option value='product'>Porduct</option>
                        <option value='other'>other</option>
                    </Myselect>

                    <MyCheckbox name="acceptedTerms">
                        I accept the terms and conditions
                    </MyCheckbox>

                    <button type="submit" className=" px-4 py-2 bg-green-500 rounded-lg hover:scale-105">Submit</button>
                </Form>
            </Formik>
        </>
    )
}

export default SignupForm;