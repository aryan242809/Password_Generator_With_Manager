import { React, useState } from 'react'
import passman from './passmanage.module.css'
import tableman from './tabledata.module.css'
import { MdDeleteForever } from "react-icons/md";

function Passmanage() {

  let setemaillocal = () => {
    let settemail = JSON.parse(localStorage.getItem('emaillocal'))
    if (!settemail) {
      return []
    }
    return settemail
  }

  let setpasslocal = () => {
    let settpass = JSON.parse(localStorage.getItem('passlocal'))
    if (!settpass) {
      return []
    }
    return settpass
  }

  let setuserlocal = () => {
    let settuser = JSON.parse(localStorage.getItem('userlocal'))
    if (!settuser) {
      return []
    }
    return settuser
  }

  const [emailInput, setEmailInput] = useState('');
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');


  const [email, setemail] = useState(() => setemaillocal());
  const [user, setuser] = useState(() => setuserlocal());
  const [password, setpassword] = useState(() => setpasslocal());

  let heandlesubmit = (e) => {
    e.preventDefault();

    let emailarray = emailInput.split('');
    let checklist = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    let found = checklist.some((e) => emailarray.includes(e))

    if (!emailInput) {
      alert('Email is empty')
      setEmailInput("");
      setPasswordInput("");
      setUserInput("");
      return;
    }

    if (found) {
      alert('email has not any capital alphabates')
      setEmailInput("");
      setPasswordInput("");
      setUserInput("");
      return;
    }

    if (!emailarray.includes('@')) {
      alert('Please enter valid email')
      setEmailInput("");
      setPasswordInput("");
      setUserInput("");
      return;
    }

    if (!userInput) {
      alert('user is empty')
      setEmailInput("");
      setPasswordInput("");
      setUserInput("");
      return;
    }
    if (!passwordInput) {
      alert('Password is empty')
      setEmailInput("");
      setPasswordInput("");
      setUserInput("");
      return;
    }

    setemail((prev) => [...prev, emailInput])
    setuser((prev) => [...prev, userInput])
    setpassword((prev) => [...prev, passwordInput])

    setEmailInput("");
    setPasswordInput("");
    setUserInput("");
  }

  localStorage.setItem('emaillocal', JSON.stringify(email))
  localStorage.setItem('passlocal', JSON.stringify(password))
  localStorage.setItem('userlocal', JSON.stringify(user))

  let clearall = () => {
    setemail([]);
    setuser([]);
    setpassword([]);
  }

  let deleterow = (index) => {
    let updateemail = email.filter((_, i) => i !== index);
    let updateuser = user.filter((_, i) => i !== index);
    let updatepass = password.filter((_, i) => i !== index);

    setemail(updateemail);
    setuser(updateuser);
    setpassword(updatepass);
  }
  return (
    <>
      <div>
        <div data-aos="fade-up" data-aos-delay="50" className={passman.headdiv}>
          <h1 className={passman.heading}>
            Password manager
          </h1>
        </div>


        <form onSubmit={heandlesubmit}>
          <div data-aos="fade-right" data-aos-delay="300" className={passman.passwritemain}>
            <div className={passman.divinputemail} >
              <label >Email id :- </label>
              <input size={50} className={passman.inputemail} type="text" value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
            </div>


            <div className={passman.usepass}>
              <div>
                <label >User name :- </label>
                <input type="text" className={passman.inputpass} value={userInput} onChange={(e) => setUserInput(e.target.value)} />
              </div>

              <div>
                <label htmlFor="">Password :- </label>
                <input type="text" className={passman.inputpass} value={passwordInput} onChange={(e) => setPasswordInput(e.target.value)} />
              </div>
            </div>

            <div className={passman.butdiv}>
              <div>
                <button type="submit"> Add </button>
              </div>

            </div>
          </div>
        </form>



        <div data-aos="fade-left" data-aos-delay="550" className={tableman.passlistmain}>
          <table className={tableman.tabled}>
            <thead>
              <tr>
                <th>Email Id</th>
                <th>Username</th>
                <th>Password</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {email.map((e, index) => (
                <>
                  <tr key={index}>
                    <td>{e}</td>
                    <td>{user[index]}</td>
                    <td>{password[index]}</td>
                    <td className={tableman.deletetd}><div onClick={() => deleterow(index)} className={tableman.delete}><MdDeleteForever /></div></td>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>

        <div className={tableman.clearall}>
          <span onClick={clearall}>Clear All</span>
        </div>
      </div>
    </>
  )
}

export default Passmanage
