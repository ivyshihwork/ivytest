const Contact = () => {
    return (
      <>
      
        <section class="center">
          <h1>Contact</h1>
            <br></br>
            <p>If you would like to drop a note to me, here is your opportunity!</p>
            <br></br>
            <form>
              <table class="center">
                <tr>
                  <td><label for="name">Name: </label></td>
                  <td><input type="text" id="name" required></input></td>
                </tr>
                <tr>
                    <td><label for="email">Email Address: </label></td>
                    <td><input type="text" id="email" required></input></td>
                </tr>
                <tr>
                    <td><label for="subject">Subject: </label></td>
                    <td><input type="text" id="subject" required></input></td>
                </tr>
                <tr>
                    <td><label for="message">Message: </label></td>
                    <td><textarea id="message" rows="20" cols="80" placeholder="Enter message here" required></textarea></td>
                </tr>
                </table>
                <p>Would you like a response?</p>
                <input type="radio" id="yes" name="response"></input>
                <label for="yes">Yes</label>
                <input type="radio" id="np" name="response"></input>
                <label for="no">No</label>
                <br></br>
                <br></br>
                <button type="submit" class="form-submit-button">Submit</button>
                
            </form>
        </section>
      </>
    );
  }
  
  export default Contact;