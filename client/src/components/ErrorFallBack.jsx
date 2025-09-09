function ErrorFallback({resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      {/* reset the error state so the component tree that crashed can try rendering again. */}
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;