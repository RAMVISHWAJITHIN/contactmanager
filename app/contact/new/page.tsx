import ContactForm from '@/app/_components/ContactForm'
import { createContactAction } from '@/app/actions/contact'


const NewContactPage = () => {
    return (
        <div>
            <h1>NewContactPage</h1>
            <ContactForm action={createContactAction} />
        </div>
    )
}

export default NewContactPage