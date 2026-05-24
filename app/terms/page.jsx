import Link from "next/link";

export const metadata = {
  title: "Finbit Terms and Conditions",
  description: "Read the Finbit Terms and Conditions for using the finance management app.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mx-auto max-w-4xl rounded-3xl border border-border bg-white p-10 shadow-sm">
        <h1 className="text-4xl font-bold text-blue-700 mb-6">Terms and Conditions</h1>
        <p className="mb-6 text-gray-700">Welcome to Finbit. Please read these terms and conditions carefully before using our service. By accessing or using Finbit, you agree to be bound by these terms.</p>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">1. Use of the Service</h2>
          <p className="text-gray-700">You may use Finbit for personal financial management only. You agree not to use the service for any unlawful, fraudulent, or abusive purposes. We may suspend or terminate access if these terms are violated.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">2. Account Security</h2>
          <p className="text-gray-700">You are responsible for keeping your account credentials secure. Notify us immediately if you suspect unauthorized access. We are not liable for losses due to compromised login information.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">3. Privacy and Data</h2>
          <p className="text-gray-700">We collect and process your financial data to provide the service. Your data is handled according to our privacy policy. We strive to protect your information, but we cannot guarantee absolute security.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">4. Limitations of Liability</h2>
          <p className="text-gray-700">Finbit is provided "as is" and we are not liable for any direct or indirect damages arising from use of the app. You are responsible for verifying all financial decisions made with the help of Finbit.</p>
        </section>

        <section className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">5. Changes</h2>
          <p className="text-gray-700">We may update these terms at any time. Continued use of Finbit after changes means you accept the revised terms. We recommend reviewing this page periodically.</p>
        </section>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/" className="text-sm font-medium text-blue-700 hover:underline">
            Back to Home
          </Link>
          <a href="mailto:finbitfs@gmail.com" className="text-sm font-medium text-blue-700 hover:underline">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}
