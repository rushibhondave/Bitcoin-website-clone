import React from "react";
import friend from "../Img/Online_friends.svg";

function Connect() 
{
  function Click()
  {
    alert("Thanks For Filling")
  }
  return (
    <>
  

      <div className="Joinme">
        <div className="para111">
          <h1 className="para112">HEY I'M RUSHIKESH BHONDAVE</h1>
          <p className="para113">
            <b>I am a Java full-stack developer</b>.
          </p>
          <p className="para114">
            I'm passionate about beautiful interfaces and intuitively
            implemented UI/UX.
          </p>
        </div>
      </div>

<div className="tweet">
  <div className="form-container">
        <form className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" required="" />
          </div>
          <div className="form-group">
            <label htmlFor="textarea">Please provide any feedback.</label>
            <textarea
              name="textarea"
              id="textarea"
              rows={10}
              cols={50}
              required=""
            
            />
          </div>
          <button className="form-submit-btn" type="button" onClick={Click}>
            Submit
          </button>
        </form>
      </div>
</div>
      

      <main className="main1">
        <div>
          <img src={friend} alt="" className="stroy11" />
        </div>
      </main>
    </>
  );
}

export default Connect;
