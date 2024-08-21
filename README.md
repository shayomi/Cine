**Cine**
# Cine is a video conferencing app that offers a seamless experience similar to Zoom, designed to enable real-time communication and collaboration. Built with cutting-edge technologies, Cine ensures high performance, security, and a user-friendly interface.

**Features**
1. Real-Time Video Conferencing: Connect with multiple participants in real-time.
2. Screen Sharing: Share your screen with others during meetings.
3. Chat Functionality: Send messages and share files in real-time.
4. User Authentication: Secure user authentication and management using Clerk.js.
5. Scheduling and Invites: Schedule meetings and send invites to participants.
6. Recording: Record meetings for future reference.
7. Customizable Layouts: Adjust the layout of the video grid as per user preference.
   
**Tech Stack**
- Frontend:
  - Next.js
  - React
- Backend:
  - Node.js
  - Stream.io
  - MongoDB
- Authentication:
  - Clerk.js
    
**Installation**
**Clone the repository:**

- bash
- Copy code
- git clone https://github.com/your-username/cine.git

**Navigate to the project directory:**

- bash
- Copy code
- cd cine

**Install dependencies:**

- bash
- Copy code
- npm install
  
**Set up environment variables:**

**Create a .env.local file in the root directory.**

**Add your environment variables for MongoDB, Stream.io, and Clerk.js.
bash**

**Copy code**
- NEXT_PUBLIC_MONGODB_URI=your_mongodb_uri
- NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
- NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_frontend_api
  
**Run the application:**

- bash
- Copy code
- npm run dev
- Open your browser and go to http://localhost:3000.

**Usage**
1. Sign Up/Login: Use Clerk.js for user authentication.
2. Create/Join a Meeting: Start or join meetings via the home screen.
3. Invite Participants: Share meeting links to invite others.
4. Chat and Share Screen: Utilize the chat and screen sharing options during the meeting.
   
**Contributing**
- Contributions are welcome! Please fork the repository and submit a pull request.

**License**
- This project is licensed under the MIT License. See the LICENSE file for details.

**Contact**
- For any inquiries or feedback, please contact steve.legion94@gmail.com.
