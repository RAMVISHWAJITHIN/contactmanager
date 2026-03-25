# 📇 Contact Manager (Next.js App Router)

A full-stack Contact Manager built using **Next.js (App Router)**, **Server Actions**, and **json-server**.

---

## 🚀 Features

* User Login (mock auth)
* Create / Read / Update / Delete Contacts
* Session-based access
* Server Actions (Next.js)
* Tailwind CSS UI
* json-server as backend

---

## 🛠️ Tech Stack

* Next.js (App Router)
* React
* Tailwind CSS
* json-server
* Axios

---

## 📂 Project Structure

```
app/
 ├── _components/
 ├── actions/
 ├── api/
 ├── _lib/
 ├── _types/
 ├── (auth)/
 ├── contact/
```

---

## ⚙️ Setup Instructions

### 1. Install dependencies

```bash
npm install
```

---

### 2. Start json-server

```bash
npm run server
```

Make sure your `db.json` looks like:

```json
{
  "contacts": [
    {
      "id": "1",
      "name": "John",
      "email": "john@test.com",
      "userId": "1"
    }
  ],
  "users": [
    {
      "id": "1",
      "name": "user1",
      "email": "user1@gmail.com",
      "password": "123456"
    }
  ]
}
```

---

### 3. Start Next.js app

```bash
npm run dev
```

---

## 🔐 Authentication Logic

### Login

```ts
const user = response.data.find(
  (u) => u.email === email && u.password === password
);
```

> ⚠️ Using manual `.find()` instead of query filtering (more reliable with json-server)

---

## 📌 Important Concepts

### 1. Server Actions

Always add:

```ts
"use server";
```

---

### 2. Form with Server Action

```jsx
<form action={formAction}>
```

❌ DO NOT use:

```jsx
<form method="post" action={formAction}>
```

---

### 3. useActionState

```ts
const [state, formAction, pending] = useActionState(action, null);
```

---

### 4. Redirect after success

```ts
useEffect(() => {
  if (state?.success) {
    router.push("/contact");
    router.refresh();
  }
}, [state]);
```

---

## 📇 Contact CRUD

### Create Contact

```ts
const user = await getSession();

const newContact = {
  name: formData.get("name"),
  email: formData.get("email"),
  userId: String(user.id),
};
```

---

### Update Contact

```ts
const id = formData.get("id");

await updateContact(id, updatedContact);
```

---

### Delete Contact

```ts
const id = formData.get("id");

await deleteContact(id);
```

---

## ⚠️ Common Bugs & Fixes

### ❌ 1. getSession not awaited

```ts
const user = getSession(); ❌
```

✅ Fix:

```ts
const user = await getSession();
```

---

### ❌ 2. userId mismatch

```ts
"1" !== 1 ❌
```

✅ Fix:

```ts
userId: String(user.id)
```

---

### ❌ 3. json-server filtering issue

```ts
/contacts?userId=1 → []
```

✅ Fix:

```ts
const response = await axios.get("/contacts");

return response.data.filter(
  (c) => String(c.userId) === String(userId)
);
```

---

### ❌ 4. Form error (method issue)

```jsx
<form method="post" action={formAction}> ❌
```

✅ Fix:

```jsx
<form action={formAction}>
```

---

### ❌ 5. Duplicate hidden inputs

```jsx
<input name="id" />
<input name="id" /> ❌
```

✅ Fix: Keep only one

---

## 🎨 UI Features

* Tailwind modern UI
* Gradient backgrounds
* Card layouts
* Hover effects
* Loading states

---

## 🔄 Revalidation

```ts
revalidatePath("/contact");
```

Ensures UI updates after create/update/delete.

---

## 🧠 Key Learnings

* Server Actions simplify backend logic
* Always await async functions
* Type mismatches cause silent bugs
* json-server filtering can be unreliable
* Use `useActionState` for form handling

---

## 🔥 Future Improvements

* Add Toast Notifications
* Add Search & Filter
* Add Authentication (JWT)
* Add Protected Routes (Middleware)
* Add Animations (Framer Motion)

---

## ✅ Final Notes

* Keep types strict (avoid optional fields unless needed)
* Always validate form inputs
* Keep UI consistent

---

## 👨‍💻 Author

Ramvishwajithin

---
