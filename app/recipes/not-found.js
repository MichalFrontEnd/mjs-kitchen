'use client'
import { useRouter } from 'next/navigation';


export function NotFound() {
  const router = useRouter()
  return (
    <main className="error container centered">
      <h1>Recipe not found</h1>
      <p>Unfortunately, we could not provide details for this recipe</p>

      <button type="link" className="back-button" onClick={() => router.back()}> Back
    </button>
    </main>
  );
}

export default NotFound;