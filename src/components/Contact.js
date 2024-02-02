import SignupForm from './SignupForm';

const Contact = () => {
    return (
        <div className="flex flex-col space-y-4 justify-center items-center ">
            <h1 className="font-bold text-xl">Contact Us ☎</h1>
            <h2>This is Food Court Contact page.</h2>
            
            {/*<div className="signup-form space-y-4">
                <h1 className="text-center">Signup Form</h1>
                <SignupForm/>
                </div>*/}
            <div className='font-bold text-lg text-center'>
                <ul>
                    <li className='my-10'>Develop contact</li>
                    <li className='my-10'>Name : Sanket Dhokchaule</li>
                    <li className='my-10'>📱 : +91-8600166041</li>
                    <li className='my-10'>📧 : sanketdhokchaule59@gmail.com</li>
                    <li className='my-10'>Location : Pune</li>
                </ul>
            </div>
        </div>
    );
};

export default Contact;

//line number 9 --><User name={"class component"} location={"Pune"}/> 