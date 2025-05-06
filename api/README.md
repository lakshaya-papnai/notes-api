
# 📝 Notes REST API

A simple CRUD Notes API built using Node.js and Express.js.

## 🔗 Base URL

```
http://localhost:5000/api/notes
```

## 📦 Endpoints

### ➕ Create a Note

**POST** `/api/notes`

**Body:**

json:
{
  "title": "Sample Note",
  "content": "This is a test note."
}


---

### 📄 Get All Notes

**GET** `/api/notes`

No body is required. This endpoint returns a list of all notes.

---

### 📄 Get Single Note

**GET** `/api/notes/:id`

Replace `:id` with the note ID you want to retrieve. No body is required.

---

### ✏️ Update Note

**PUT** `/api/notes/:id`

**Body:**

json:
{
  "title": "Updated Title",
  "message": "Updated message"
}


Replace `:id` with the note ID you want to update.

---

### ❌ Delete Note

**DELETE** `/api/notes/:id`

Replace `:id` with the note ID you want to delete. No body is required.

---

## 🧪 API Testing

Use Postman to test the API. You can download the Postman collection from: `notes-api.postman_collection.json`
```
