import { FiEdit } from "react-icons/fi";
import { ContactType } from "../_types/contact";
import DeleteButton from "./DeleteButton";
import Link from "next/link";
import { deleteContactAction } from "../actions/contact";

const ContactList = ({ contacts }: { contacts: ContactType[] }) => {
    return (
        <div className="grid gap-4">
            {contacts.map((contact) => (
                <div
                    key={contact.id}
                    className="flex items-center justify-between bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition"
                >
                    {/* Contact Info */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                            {contact.name}
                        </h2>
                        <p className="text-gray-500 text-sm">{contact.email}</p>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-4">
                        <Link
                            href={`/contact/edit/${contact.id}`}
                            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 font-medium transition"
                        >
                            <FiEdit size={18} />
                            Edit
                        </Link>

                        <DeleteButton
                            action={deleteContactAction}
                            contact={contact}
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ContactList;