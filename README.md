# todo-app-vaibhav
# 📝 To-Do List App (Node.js + Express)

A simple To-Do List application built with **Node.js**, **Express**, and **EJS templates**.  
This app allows users to add and delete tasks, styled with CSS, and can be containerized with Docker.

---

## 🚀 Features
- Add new tasks
- Delete tasks
- Simple UI with EJS templates
- Docker-ready for deployment
- CI/CD pipeline support with Jenkins

---

## 📂 Project Structure
```
todo-app/
├── index.js
├── package.json
├── views/
│   └── index.ejs
├── public/
│   └── styles.css
├── README.md
├── Dockerfile
├── Jenkinsfile
├── sonarjenkins/
│   └── sonar-project.properties
└── todo.png
```

---

## 🛠 Run Locally
```bash
# Install dependencies
npm install

# Start server
npm start
```
Visit: `http://localhost:3000`

---

## 🐳 Run with Docker
```bash
# Build image
docker build -t todo-app .

# Run container
docker run -p 3000:3000 todo-app
```
Visit: `http://localhost:3000`

---

## 📸 Demo
`[Looks like the result wasn't safe to show. Let's switch things up and try something else!]`

---

## ⚙️ CI/CD
- **Jenkinsfile** included for pipeline automation.
- **SonarQube** integration via `sonarjenkins/`.

---

## 📜 License
This project is licensed by vaibhav.
