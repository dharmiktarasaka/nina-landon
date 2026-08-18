import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-cream px-4 py-20">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-wine">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-base text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-radiant px-6 py-3 text-sm font-medium text-white shadow-petal transition-transform hover:scale-105"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
}
