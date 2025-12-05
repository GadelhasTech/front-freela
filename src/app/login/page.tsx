import LoginForm from "@/src/components/form/LoginForm";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white shadow-md rounded-xl p-10 w-full max-w-lg border">
        <h2 className="text-center text-xl font-semibold mb-6">Login</h2>

        <LoginForm />
      </div>
    </div>
  );
}
