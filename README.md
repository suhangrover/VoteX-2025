# VoteX - Blockchain Based Voting System
Overview
This application securely collects and encrypts Aadhaar and PAN card details, saving them as hashed values in the cloud. Our system ensures the confidentiality and integrity of the voting process using modern web technologies and advanced security measures.

⚠ Caution
This project aims to enhance voting transparency by restricting database access to authorized admins with specific credentials. It ensures secure and reliable voting for organizations like corporations, NGOs, schools, and administrative bodies. The project is currently in the prototype/experimental phase. Currently, I have used three dummy Aadhaar cards (123456789012 , 987654321098 and 987654321099) and a few dummy PAN card numbers (ABC1234567 , XYZ9876543 and "XYZ9876546) for demonstration purposes only. In a production environment, this setup will be replaced by a secure database designed to handle credentials from multiple organizations.The program collect and encrypt crucial credentials, which are only decrypted in the backend. This process ensures the identities of users are matched with their hashed votes after registration.

Voters use these credentials to cast their votes for various parties. The votes are hashed with SHA-256 and stored on Firebase, ensuring anonymity and preventing any disclosure of individual voting preferences. Our goal is to develop a system where only the application can use these tamper-proof hashes to count votes for each party accurately.

Inspired by the Lok Sabha elections in India, the project features a voting theme that covers different political parties.

📝 Note
I have been actively enhancing the project with plans to transition to a blockchain-based system for greater security and transparency. Additionally, I aim to introduce a custom voting page builder, allowing organizations to tailor their voting interfaces to their specific needs.

Screenshots
![image](https://github.com/user-attachments/assets/f01edb45-4b0a-4715-8382-ba97a6f81762)
![image](https://github.com/user-attachments/assets/72fd856b-706c-4544-913b-05eb31eecc43)
![image](https://github.com/user-attachments/assets/eb6f5b38-db87-4476-85e3-ece014da4789)
![image](https://github.com/user-attachments/assets/6aa94edd-2c2c-4de4-bd1a-e35572029ebd)

