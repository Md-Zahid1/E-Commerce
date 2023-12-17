import styled from "styled-components";

const Contact = () => {
  const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return <Wrapper>
    <h2 className="common-heading">Contact</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d57909.01128819111!2d74.62584319999999!3d24.887296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1700121258420!5m2!1sen!2sin"
      width="100%"
      height="400"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade">
    </iframe>
    <div className="container">
      <div className="contact-form">
        <form action="" method="POST" className="contact-inputs">
          <input type="text"
            placeholder="username"
            name="username"
            required
            autoComplete="off"
          />

          <input type="email"
            name="Email"
            placeholder="Email"
            autoComplete="off"
            required
          />

          <textarea name="Messege"
            cols="30"
            rows="10"
            required autoComplete="off"
            placeholder="Emter Your Messege">
          </textarea>

          <input type="submit" value="send" />
        </form>
      </div>
    </div>
  </Wrapper>;
};

export default Contact;
