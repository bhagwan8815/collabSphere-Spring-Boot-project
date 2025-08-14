# 🚀 CollabSphere

**CollabSphere** is a full-stack Project Management System that allows teams to **create projects**, **collaborate with members**, **assign tasks**, and **track progress** — all in one place.  
Built with **Spring Boot** (backend) and **React + Tailwind CSS** (frontend).

---

## 📌 Features

- **User Authentication** – Secure login & registration
- **Project Management** – Create, update, and delete projects
- **Task Management** – Assign, track, and update tasks
- **Collaboration** – Invite team members to collaborate
- **Real-time Updates** – Dynamic frontend with API integration


---

## 🛠️ Tech Stack

### **Backend**
- Java 17+
- Spring Boot
- Spring Data JPA
- MySQL
- Spring Security
- Maven

### **Frontend**
- React.js
- Tailwind CSS
- Axios
- React Router DOM

---

## 📂 Project Structure
collabSphere-Spring-Boot-project/
│
├
│── src/main/java/com/collabsphere # Java source files
│── src/main/resources # application.properties
│── pom.xml
│
├── frontend/ # React frontend
│ ├── src/ # React components
│ ├── public/
│ └── package.json
│
└── README.md



# Configure application.properties
- spring.datasource.url=jdbc:mysql://localhost:3306/collabsphere
- spring.datasource.username=your_username
- spring.datasource.password=your_password
- spring.datasource.driver-class-name=com.mysql.cj.jdbc.Driver

# Hibernate JPA Configuration
- spring.jpa.database-platform=org.hibernate.dialect.MySQL8Dialect
- spring.jpa.hibernate.ddl-auto=update
- spring.jpa.show-sql=true

 # email configuration
- spring.mail.host=smtp.gmail.com
- spring.mail.port=587
- spring.mail.username=ADD_YOUR_EMAIL
- spring.mail.properties.mail.smtp.auth=true
- spring.mail.properties.mail.smtp.starttls.enable=true

