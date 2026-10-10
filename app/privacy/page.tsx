import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Privacy Policy | Breeze Host",
  description:
    "How Breeze Host collects, uses and protects the information you share when you use our hosting service and Discord server.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="10 October 2026">
      <p>
        This policy explains what information Breeze Host collects when you use our hosting service
        and our Discord server, why we collect it, and what we do with it.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>
          Your Discord account details, such as your user ID, username and, where relevant, your
          email address, when you join our server or request hosting.
        </li>
        <li>
          The content you host with us, such as the files, code, configuration and data behind your
          bots, websites and game servers.
        </li>
        <li>
          Technical information needed to run the service, such as IP addresses, timestamps and
          error logs.
        </li>
        <li>Messages and support requests you send to our team.</li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To provide and maintain the hosting you request.</li>
        <li>To identify you through Discord and manage your account.</li>
        <li>To answer support requests and keep you informed about the service.</li>
        <li>To keep the service secure and to prevent abuse.</li>
      </ul>

      <h2>Payments</h2>
      <p>
        Paid plans are handled by third-party payment providers. We do not store your full card
        details on our systems.
      </p>

      <h2>Sharing</h2>
      <p>
        We do not sell your information. We share it only with the providers we rely on to run the
        service, such as our hosting infrastructure and payment processors, or where we are required
        to do so by law.
      </p>

      <h2>Retention</h2>
      <p>
        We keep your information for as long as your account is active. You can ask us to delete it
        at any time, and we will remove it unless we are required to keep it by law.
      </p>

      <h2>Your rights</h2>
      <p>
        You can ask to see, correct or delete the information we hold about you. To make a request,
        contact us through our Discord server.
      </p>

      <h2>Children</h2>
      <p>
        Our service is not intended for children under the age of 13. If we learn that we hold
        information about a child under 13, we will delete it.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. When we do, we will change the date at the top
        of this page.
      </p>

      <h2>Contact</h2>
      <p>For any question about this policy, contact us in our Discord server.</p>
    </LegalLayout>
  );
}
