export default async function SushiPage() {
  //   redirect("/");

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-8">Welcome to Sushi Order Page</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Sushi Palace</h2>
          <p className="text-gray-600">Visit restaurant page</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
          <h2 className="text-2xl font-semibold mb-2">Sushi Express</h2>
          <p className="text-gray-600">Visit restaurant page</p>
        </div>
      </div>
      <div className="mt-8">
        <a
          href="/auth/login"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go to Login
        </a>
      </div>
    </div>
  );
}
