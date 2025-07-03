import {Link} from "react-router"

function Contact(){
    return <div className="background">
       <div> 
            <h2>CONTACT US</h2>
            <h3>For queries,please contact us through the following </h3>
            <h4>Phone  :<Link>9876543210</Link></h4>
            <h4>Email  :<Link>fooddelivery@gmail.com</Link></h4>
        </div>
        <div>
            <h3>If you want to share any messages...fill the following details</h3>
            <h4>Name</h4>
            <input ></input>
            <h4>Email</h4>
            <input></input>
            <h4>Message</h4>
            <input />
        </div>
        <button>Submit</button>
        
            
            
        
    </div>
}

export default Contact;