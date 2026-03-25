"use client";

import { FiTrash2 } from "react-icons/fi";
import { ContactType } from "../_types/contact";
import { useActionState } from "react";

type DeleteButtonProps = {
    action: (prevState: any, formData: FormData) => Promise<any>;
    contact?: ContactType;
};

const DeleteButton = ({ action, contact }: DeleteButtonProps) => {
    const [state, formAction] = useActionState(action, null);

    return (
        <form action={formAction}>
            <input type="hidden" name="id" value={contact?.id} />

            <button
                type="submit"
                onClick={(e) => {
                    if (
                        !confirm("Are you sure you want to delete this contact?")
                    ) {
                        e.preventDefault();
                    }
                }}
                className="flex items-center gap-2 bg-red-50 text-red-600 px-4 py-2 rounded-xl border border-red-200 hover:bg-red-100 hover:text-red-700 transition font-medium"
            >
                <FiTrash2 size={18} />
                Delete
            </button>
        </form>
    );
};

export default DeleteButton;