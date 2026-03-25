"use client";

import { useActionState, useEffect } from "react";
import { ContactType } from "../_types/contact";
import { useRouter } from "next/navigation";

type ContactFormProps = {
    action: (prevState: any, formData: FormData) => Promise<any>;
    contact?: ContactType;
};

const ContactForm = ({ action, contact }: ContactFormProps) => {
    const router = useRouter();
    const [state, formAction, pending] = useActionState(action, null);

    useEffect(() => {
        if (state?.success) {
            router.push("/contact");
            router.refresh();
        }
    }, [state, router]);

    return (
        <form
            className="space-y-6 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-md mx-auto"
            action={formAction}
        >
            <h2 className="text-2xl font-bold text-gray-800 text-center">
                {contact ? "Edit Contact" : "Add Contact"}
            </h2>

            {/* Hidden ID only for edit */}
            {contact && (
                <input type="hidden" name="id" value={contact.id} />
            )}

            {/* Name */}
            <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    name="name"
                    defaultValue={contact?.name || ""}
                    placeholder="Enter your name"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
            </div>

            {/* Email */}
            <div className="flex flex-col">
                <label className="mb-2 text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    defaultValue={contact?.email || ""}
                    placeholder="Enter your email"
                    required
                    className="w-full rounded-xl border border-gray-300 px-4 py-3 text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
                />
            </div>

            {/* Error */}
            {state?.error && (
                <p className="text-red-500 text-sm text-center">
                    {state.error}
                </p>
            )}

            {/* Button */}
            <button
                type="submit"
                disabled={pending}
                className="w-full rounded-xl bg-blue-600 px-4 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 active:scale-[0.98] disabled:opacity-60"
            >
                {pending
                    ? "Saving..."
                    : contact
                        ? "Update Contact"
                        : "Save Contact"}
            </button>
        </form>
    );
};

export default ContactForm;