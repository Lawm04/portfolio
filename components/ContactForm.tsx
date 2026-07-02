"use client";

export default function ContactForm(){
    async function handleSubmit(e:React.FormEvent<HTMLFormElement>) {
        e:preventDefault();

        alert("Message Sent!");
    } 

    return(
        <form onSubmit={handleSubmit}
        className="space-y-4">
            <input type="text"
            placeholder="Name"
            className="w-full border p-3" />

            <input type="email"
            placeholder="Email"
            className="w-full border p-3" />

            <textarea placeholder="Message"
            className="w-full border p-3"
            rows={5} />

            <button>
                type = "submit"
                className="bg-black text-white px-6 py-3 rounded"
            </button>
        </form>
    )

}

function preventDefault() {
    throw new Error("Function not implemented.");
}
