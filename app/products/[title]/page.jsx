export default function Page({ params }) {
  return (
    <div>
      <h1>Product Page</h1>
      <h1>{params.title}</h1>
    </div>
  );
}
