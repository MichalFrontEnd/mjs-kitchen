'use client'
import { useRouter } from 'next/navigation';


export function NotFound() {
  const router = useRouter()
  return (
    <main className="error container centered">
      <h1>Page not found</h1>
      <p>How did you get here?</p>

      <button type="link" className="back-button" onClick={() => router.back()}> Back
    </button>
    </main>
  );
}

export default NotFound;