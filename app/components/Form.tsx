import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Form: React.FC = () => {
  const contactForm = useRef<HTMLFormElement>(null);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (contactForm.current) {
      const { user_name, user_email, message } = contactForm.current;

      if (user_name.value && user_email.value && message.value) {
        emailjs
          .sendForm('service_4am808m', 'template_fo948bf', contactForm.current, 'JLlZHdARt2Uvm4PdA')
          .then(
            () => {
              console.log('SUCCESS!');
              setIsSent(true);
              setTimeout(() => {
                setIsSent(false);
                contactForm.current?.reset();
              }, 3000);
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      } else {
        alert("Veuillez remplir tous les champs du formulaire avant d'envoyer.");
      }
    }
  };

  return (
    <div>
      <form ref={contactForm} onSubmit={handleSubmit} className="flex flex-col w-full p-3 pt-1 gap-1 box-border md:p-[30px_15px_15px_10px] xl:p-[25px_20px_20px_25px] xl:gap-2.5">
        <label className="text-secondary-color text-sm">Name</label>
        <input type="text" name="user_name" className="w-[90%] border-none border-b border-secondary-color bg-primary-color text-sm xl:w-full" />
        <label className="text-secondary-color text-sm">Email</label>
        <input type="email" name="user_email" className="w-[90%] border-none border-b border-secondary-color bg-primary-color text-sm xl:w-full" />
        <label className="text-secondary-color text-sm">Message</label>
        <textarea name="message" className="w-[90%] h-auto border-none border-b border-secondary-color bg-primary-color text-sm xl:w-full" />
        <input type="submit" value="Envoyer" className="mt-3 p-1 w-[40%] self-center bg-tertiary-color rounded-[10px] border border-tertiary-color text-secondary-color text-sm cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110 md:mt-5 xl:p-1.5 xl:w-[30%]" />
        {isSent && <p className="text-green-500 text-center text-sm">Merci votre message a bien été envoyé !</p>}
      </form>
    </div>
  );
};

export default Form;