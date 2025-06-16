import { useForm } from "react-hook-form";

interface ContactsFormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactsFormData>();

  const FORMSPREE_FORM_URL = import.meta.env.VITE_FORMSPREE_FORM_URL;

  const onSubmit = (data: ContactsFormData) => {
    console.log(data);
    // Here you can handle the form submission, e.g., send data to an API
    fetch(FORMSPREE_FORM_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.ok) {
          alert("Message sent successfully!");
        } else {
          alert("There was an error sending your message.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("There was an error sending your message.");
      });
  };

  return (
    <div className="flex items-center flex-col mx-auto pt-24">
      <div>
        <p className="text-center mb-4 text-6xl">✉️</p>
        <div className="flex flex-col">
          <p className="text-center mb-2 text-2xl font-bold">
            Feel free to reach out
          </p>
          <p className="text-center mb-10 text-large max-w-xl">
            Let me know if you want to work together, get to know me and my work
            better or just have a chat. I am always happy about engaging
            conversations!
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-md w-full">
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            type="text"
            {...register("name", { required: "Name is required" })}
            className={`w-full p-2 border ${
              errors.name ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className={`w-full p-2 border ${
              errors.email ? "border-red-500" : "border-gray-300"
            } rounded`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            {...register("message", { required: "Message is required" })}
            className={`w-full p-2 border ${
              errors.message ? "border-red-500" : "border-gray-300"
            } rounded`}
          ></textarea>
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>
        <button type="submit" className="w-full text-white p-2 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
