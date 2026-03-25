import ContactList from "../_components/ContactList";
import { getSession } from "../_lib/session";
import { getContacts } from "../api/contact";

const Contactpage = async () => {
    const user = await getSession();

    if (!user) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Please Login to Continue
                    </h2>
                    <a
                        href="/login"
                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition"
                    >
                        Go to Login
                    </a>
                </div>
            </div>
        );
    }

    const contacts = await getContacts(user?.id);

    if (!contacts || contacts.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4">
                <div className="bg-white p-8 rounded-2xl shadow-lg text-center max-w-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        No Contacts Found
                    </h2>
                    <p className="text-gray-600 mb-6">
                        Start by adding your first contact.
                    </p>
                    <a
                        href="/contact/new"
                        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-xl font-medium hover:bg-blue-700 transition"
                    >
                        Add Contact
                    </a>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-6 py-10">
            <div className="max-w-5xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">
                        Your Contacts
                    </h1>
                    <a
                        href="/contact/new"
                        className="bg-blue-600 text-white px-5 py-2 rounded-xl font-medium shadow hover:bg-blue-700 transition"
                    >
                        + Add Contact
                    </a>
                </div>

                {/* Contact List */}
                <div className="bg-white rounded-2xl shadow-md p-6">
                    <ContactList contacts={contacts} />
                </div>
            </div>
        </div>
    );
};

export default Contactpage;