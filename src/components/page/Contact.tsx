import Image from "next/image";
import githubIcon from "../../../public/github-icon.svg";
import igIcon from "../../../public/black-instagram-icon.svg";
import xIcon from "../../../public/x-social-media-black-icon.svg";
import { useState } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [sendResult, setSendResult] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("api/sendMail", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          message: message,
        }),
      });
      const jsonData = await response.json();
      setSendResult(jsonData.message);
      console.log(jsonData.result);
    } catch (err) {
      setSendResult("Error");
    }
  };

  return (
    <div className="flex items-center bg-bg text-base font-montserrat text-baseblack h-screen">
      <div className="mx-10 md:mx-52 my-8 md:my-12 w-full">
        <div className="my-5 text-xl md:text-3xl tracking-widest">Contacts</div>
        <div className="flex flex-col md:flex-row">
          <div className="flex items-center justify-around md:w-1/2 my-5">
            <a
              className="w-8 md:w-10 h-8 md:h-10"
              href={process.env.NEXT_PUBLIC_GITHUB_URL}
              target="_blank"
            >
              <Image src={githubIcon} alt="contact me with GitHub" />
            </a>
            <a
              className="w-8 md:w-10 h-8 md:h-10"
              href={process.env.NEXT_PUBLIC_IG_URL}
              target="_blank"
            >
              <Image src={igIcon} alt="contact me with Instagram" />
            </a>
            <a
              className="w-8 md:w-10 h-8 md:h-10"
              href={process.env.NEXT_PUBLIC_X_URL}
              target="_blank"
            >
              <Image src={xIcon} alt="contact me with X" />
            </a>
          </div>
          <div className="md:w-1/2 h-full">
            <div className="text-base md:px-8 my-5">Contact with Email</div>
            <form onSubmit={handleSubmit}>
              <input
                className="w-full h-12 px-5 md:px-8 my-2 bg-contentbase shadow-3xl rounded-xl md:rounded-3xl focus:outline-none"
                type="text"
                placeholder="Name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full h-12 px-5 md:px-8 my-2 bg-contentbase shadow-3xl rounded-xl md:rounded-3xl focus:outline-none"
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                className="w-full h-36 px-5 md:px-8 py-4 my-3 bg-contentbase shadow-3xl rounded-xl md:rounded-3xl focus:outline-none"
                placeholder="Message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <div className="w-full flex flex-col justify-center items-center mt-5">
                <button
                  className="bg-bgblack text-contentbase w-1/2 md:w-1/4 py-2 rounded-full hover:opacity-90"
                  type="submit"
                >
                  Send
                </button>
                <div className="pt-4">{sendResult}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
