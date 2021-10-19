export default function Error({ children: errorMessage }) {
  return (
    <span className="p-2">
      {errorMessage}
    </span>
  );
}
