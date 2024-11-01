import React from 'react'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e9909238-8860-4ddd-82f6-f1722546689a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='Contact'>
      <h1 className="heading-2">
        Contact
        <hr />
      </h1>
      <form onSubmit={onSubmit} className='Contact_form'  >
        <input type="text" name="name" placeholder='Enter your Name' required/>
        <input type="email" name="email" placeholder='Enter your Email' required/>
        <input type="number" name='number' placeholder='Enter your Number' required />
        <textarea rows={20}  cols={20} name="message" placeholder='Message' required></textarea>

        <button type="submit">Submit Form</button>

      </form>
      <span>{result}</span>

    </div>
  );
}

export default Contact
