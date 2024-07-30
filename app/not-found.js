import { BackButton } from '@/components/molecules/back-button';

export function NotFound() {
  return (
    <main className="error container centered">
      <h1>Page not found</h1>
      <p>How did you get here?</p>
      <BackButton /> 
    </main>
  );
}

export default NotFound;