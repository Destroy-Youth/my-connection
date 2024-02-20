import { initializeApp } from 'firebase/app'
import { getMessaging, getToken } from 'firebase/messaging'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FB_API_KEY,
  authDomain: process.env.REACT_APP_FB_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FB_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FB_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FB_SENDER_ID,
  appId: process.env.REACT_APP_FB_APP_ID,
}

const app = initializeApp(firebaseConfig)
export const messaging = getMessaging(app)

export const generateToken = async () => {
  const permission = await Notification.requestPermission()
  console.log(permission)
  if (permission == 'granted') {
    const token = await getToken(messaging, process.env.REACT_APP_FB_VAPID_KEY)
    console.log(token)
  }
}
