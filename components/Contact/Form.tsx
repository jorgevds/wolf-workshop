import React from "react";
import { useState } from "react";

interface Props {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
  title: string;
  submit?: boolean;
}

const Form: React.FC<Props> = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const [submit, setSubmit] = useState(false);
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmit(true);
  };

  return (
    <section>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col justify-between flex-1 p-8 pt-12 m-auto mb-12 border-solid sm:border-t-4 sm:border-b-4 minmd:rounded-lg minmd:border-4 minlg:w-3/5 md:w-4/5 sm:w-screen border-purpleBorder"
      >
        <label htmlFor="title" className="flex justify-between my-4">
          Title
        </label>
        <select
          name="title"
          required
          value={title}
          onChange={(event: React.ChangeEvent<HTMLSelectElement>): void =>
            setTitle(event.target.value)
          }
          className="mb-4 transition-all duration-200 ease-in border-b bg-blackMuted border-purpleBorder"
        >
          <option defaultChecked disabled value="">
            Select your title
          </option>
          <option>Sir</option>
          <option>Madam</option>
          <option>Other</option>
        </select>
        <label htmlFor="firstName" className="flex justify-between my-4">
          Name
        </label>
        <input
          type="text"
          name="firstName"
          placeholder="first name"
          value={firstName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setFirstName(event.target.value)
          }
          className="mb-4 transition-all duration-200 ease-in border-b bg-blackMuted border-purpleBorder"
        />
        <label htmlFor="lastName" className="flex justify-between my-4">
          Last name
        </label>
        <input
          type="text"
          name="lastName"
          placeholder="last name"
          value={lastName}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setLastName(event.target.value)
          }
          className="mb-4 transition-all duration-200 ease-in border-b bg-blackMuted border-purpleBorder"
        />
        <label htmlFor="email" className="flex justify-between my-4">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="email"
          required
          value={email}
          onChange={(event: React.ChangeEvent<HTMLInputElement>): void =>
            setEmail(event.target.value)
          }
          className="mb-4 transition-all duration-200 ease-in border-b bg-blackMuted border-purpleBorder"
        />
        <label htmlFor="message" className="flex justify-between my-4">
          Your message
        </label>
        <textarea
          name="message"
          placeholder="Leave your message for our team here"
          required
          value={message}
          onChange={(event: React.ChangeEvent<HTMLTextAreaElement>): void =>
            setMessage(event.target.value)
          }
          className="mb-16 transition-all duration-200 ease-in border-b bg-blackMuted border-purpleBorder min-h-1/8"
        />
        <button
          type="submit"
          name="Send"
          className="w-4/5 px-4 py-2 m-auto text-white transition-all duration-300 ease-in-out transform border-2 border-solid rounded-lg focus:outline-none focus:shadow-outline border-purple hover:transition-all bg-purpleBorder hover:scale-105"
        >
          Send
        </button>
      </form>
      {submit ? (
        <h3>
          Bedankt voor uw bericht! Wij gaan aan het werk en geven u zo snel
          mogelijk een antwoord.
        </h3>
      ) : null}
    </section>
  );
};

export default Form;
