import React,{useState} from "react";

const Form =() => {
    const [name, setFullname] = useState("");
    const [emailId, setEmailId] = useState("");
    const [dateofbirth, setDateofbirth] = useState("");
    const [mobileno, setMobileno] = useState("");
    const [gender, setGender] = useState("");
    const [occupation, setOccupation] = useState("");
    const [studentname, setStudentname] = useState("");
    const [studentid, setStudentid] = useState("");
    const [circulum, setCirculum] = useState("");
    const [lastyeargrade, setLastyeargrade] = useState("");
    const [applyforscholarshipfreeship, setApplyforscholarshipfreeship ] = useState("");
    const [course, setCourse] = useState("");
    const [adminname, setAdminname ] = useState("");
    const [accountno, setAccountno] = useState("");
    const [ifccode, setIfccode] = useState("");
    const [branch, setBranch] = useState("");
    const [bankname, setBankname ] = useState("");
    const [address, setAdress] = useState("");
    



    


    const handleSubmit = async(e) => {
        if(
          name==="" || 
          emailId==="" || 
          dateofbirth==="" || 
          mobileno==="" || 
          gender==="" || 
          occupation==="" || 
          studentname==="" || 
          studentid==="" || 
          circulum==="" || 
          lastyeargrade==="" || 
          applyforscholarshipfreeship==="" || 
          course===""|| 
          adminname==="" || 
          accountno==="" || 
          setIfccode==="" || 
          setBranch==="" || 
          setBankname==="" || 
          setAdress==="" )
         {
            alert("Fill all the required fields");
        } else {
        e.preventDefault();
        window.location.href = "/Form"
        }
    };
  return (
    <div className="container">
  <h1>Generic Scholarship form</h1>
  <form action="#">
    <div className="form first">
      <div className="details Personal">
        <span className="title">Personal Details</span>
        <div className="fields">
          <div className="input-field">
            <label>Full Name:</label>
            <input value={name} onChange={(e) => setFullname(e.target.value)} type="text" placeholder="Enter your name" required />
          </div>
          <div className="input-field">
            <label>Email ID: </label>
            <input value={emailId} onChange={(e) => setEmailId(e.target.value)} type="text" placeholder="Enter EmailID" required />
          </div>
          <div class="input-field">
            <label>Date of Birth:  </label>
            <input value={dateofbirth} onChange={(e) => setDateofbirth(e.target.value)} type="date" placeholder="Enter Birth date " required />  
            </div> 
            <div class="input-field">
            <label>Mobile Number:</label>
            <input value={mobileno} onChange={(e) => setMobileno(e.target.value)} type="Number" placeholder="Enter your number" required />
            </div>
            <div class="input-field">
            <label>Gender:</label>
            <input value={gender} onChange={(e) => setGender(e.target.value)} type="text" placeholder="Enter your Gender" required />
            </div>
            <div class="input-field">
           <label>Occupation:  </label>
           <input value={occupation} onChange={(e) => setOccupation(e.target.value)} type="text" placeholder="Enter your Occupation " required />  
            </div> 

            </div>

            <div class="details AI">
            <span class="title">Academic Information</span>
    
           
            <div class="fields">
                <div class="input-field">
                <label>Student Name:</label>
                <input value={studentname} onChange={(e) => setStudentname(e.target.value)} type="text" placeholder="Enter your name" required />
            </div>
            <div class="input-field">
                <label>Student ID:   </label>
                <input value={studentid} onChange={(e) => setStudentid(e.target.value)} type="text" placeholder="Enter studentID" required />
                </div>
                <div class="input-field">
                <label>Curiculum:  </label>
                <input value={circulum} onChange={(e) => setCirculum(e.target.value)} type="text" placeholder="Enter curiculum " required/>  
                </div> 
    
                <div class="input-field">
                <label>Last year Grade:</label>
                <input value={lastyeargrade} onChange={(e) => setLastyeargrade(e.target.value)} type="Number" placeholder="Enter Grade" required/>
                </div>
                  
      
                <div class="input-field">
                <label>Apply For Scholarship Freeship:</label>
                <input value={applyforscholarshipfreeship} onChange={(e) => setApplyforscholarshipfreeship(e.target.value)} type="text" placeholder="Yes or No" required />
                </div>
                <div class="input-field">
               <label> Course:</label>
               <input value={course} onChange={(e) => setCourse(e.target.value)} type="text" placeholder="Enter Course " required /> 

               <select name="mycousre" id="course">
                   <option value="First Year">First Year</option>
                   <option value="Second Year">Second Year</option>
                   <option value="Third Year" selected>Third Year</option>
               </select>
               </div>
               <div class="details Personal">
                  <span class="title">Bank Details</span> 
                  <br/>
                          
                <div class="fields">
                <div class="input-field">
                <label>Admin name:</label>
                <input value={adminname} onChange={(e) => setAdminname(e.target.value)} type="text" placeholder="Enter your name" required />
                </div>
               
                  
                  <br/>
                 <div class="input-field">
                <label>Account Number:</label>
                <input value={accountno} onChange={(e) => setAccountno(e.target.value)} type="text" placeholder="Enter Account number" required />
                 </div>
                
                  
                  <br/>
                <div class="input-field">
                <label>IFC Code:</label>
                 <input value={ifccode} onChange={(e) => setIfccode(e.target.value)} type="text" placeholder="Enter IFC code " required />  
                </div> 
                
                 <br/>
                <div class="input-field">
                 <label>Branch:</label>
                <input value={branch} onChange={(e) => setBranch(e.target.value)}type="text" placeholder="Enter Branch" required />
                 </div>
                 
                 <br/>
                 <div class="input-field">
                 <label>Bank Name:</label>
                  <input value={bankname} onChange={(e) => setBankname(e.target.value)} type="text" placeholder="Enter Bank Name " required />  
                      </div> 
                      <br/>
          
                     
                
                 <div class="input-field">
                 <label>Address:</label>
                 <input value={address} onChange={(e) => setAdress(e.target.value)} type="text" placeholder="Enter Address" required />
                               
                 </div>
                               
                  <input type="button" class="button" value="Next" />                   
            
          </div>


        </div>
        </div>
        </div>
        </div>
        </div>
          </form> 
          </div>

          
          

        );
}
export default Form;






