🚀 React-Mini

A modern, minimal React app with authentication, custom UI animations, and social profile integration.
📸 Preview
![NeonRetroStarsMarketingMockupWebsiteInstagramPost-ezgif com-video-to-gif-converter](https://github.com/user-attachments/assets/209fc2f4-4a50-47be-9a21-407c2a5ab6bf)


✨ Features

    🔐 Authentication using Clerk.dev

    🎨 Custom animated background (<Squares />)

    🧑 Profile Avatar with Logout menu

    🌐 Social Media Links (LinkedIn, GitHub, Twitter, Instagram)

    ⚡ Deployed on Vercel

    💡 Responsive design & clean layout

🛠️ Tech Stack

    React 18+

    Vite or Create React App (depending on setup)

    Tailwind CSS

    Clerk Auth

    Vercel (for deployment)

🔧 Installation

# Clone the repository
git clone [https://github.com/Nsanjayboruds/REACT-MINI.git]
cd react-min

# Install dependencies
npm install
# or
yarn

🚀 Running Locally

npm run dev
# or
yarn dev





🧑‍💻 Auth Guard Component

import { useUser, RedirectToSignIn } from '@clerk/clerk-react';

export default function AuthGuard({ children }) {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return null;
  if (!isSignedIn) return <RedirectToSignIn />;
  return children;
}


📦 Deployment on Vercel

    Push your code to GitHub

    Import your repo into Vercel

    Use the following settings:

Build Command: npm run build
Output Directory: dist or build (based on your setup)
Install Command: npm install

📝 License

MIT License 
