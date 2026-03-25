import ContactForm from '@/app/_components/ContactForm'
import { updateContactAction } from '@/app/actions/contact'
import { getContactById } from '@/app/api/contact'
import React, { use } from 'react'

const EditContactPage = ({
    params,
}: {
    params: Promise<{ id: string }>
}) => {
    const { id } = use(params)
    const contact = use(getContactById(id));



    return (
        <div>
            <h1>Edit ContactPage</h1>
            <ContactForm action={updateContactAction} contact={contact} />
        </div>
    )
}

export default EditContactPage