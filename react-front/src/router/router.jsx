import {
  HomePage,
  RegisterPage,
  LoginPage,
  RecordsPage,
  CreateRecordPage,
} from 'pages'
import Modal from 'components/Modal'
import { Routes, Route } from 'react-router-dom'

function MyRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/records" element={<RecordsPage />} />
      <Route path="/records/create" element={<CreateRecordPage />} />
      <Route path="/modal" element={<Modal />} />
    </Routes>
  )
}

export default MyRouter
