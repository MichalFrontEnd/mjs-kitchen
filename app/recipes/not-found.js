import { BackButton } from '@/components/molecules/back-button';

export function NotFound() {
  return (
    <main className="error container centered">
      <h1>Recipe not found</h1>
      <p>Unfortunately, we could not provide details for this recipe</p>
    <BackButton />
    </main>
  );
}

export default NotFound;