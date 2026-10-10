import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Terms and Conditions | Breeze Host",
  description:
    "The terms that apply when you use the hosting services Breeze Host provides through our Discord server.",
};

export default function TermsPage() {
  return (
    <LegalLayout title="Terms and Conditions" updated="10 October 2026">
      <p>
        These terms apply when you use the hosting services provided by Breeze Host through our
        Discord server. By using the service, you agree to them.
      </p>

      <h2>The service</h2>
      <p>
        Breeze Host provides hosting for bots, websites and game servers. We offer a free plan and
        paid plans. The features and limits of each plan are described on our plans page and in our
        Discord server.
      </p>

      <h2>Your account</h2>
      <p>
        You need a Discord account to use the service. You are responsible for what happens under
        your account and for keeping access to it secure.
      </p>

      <h2>Acceptable use</h2>
      <p>You agree not to use the service to:</p>
      <ul>
        <li>host or share content that is illegal, harmful, or infringes the rights of others;</li>
        <li>attack, overload or attempt to break the service or any other system;</li>
        <li>send spam or run scams;</li>
        <li>break the rules of the Discord servers we operate in.</li>
      </ul>
      <p>We may suspend or remove hosting that breaks these rules.</p>

      <h2>Payments and refunds</h2>
      <p>
        Paid plans are billed through third-party payment providers. Refunds are given where
        required by law and otherwise at our discretion.
      </p>

      <h2>Availability</h2>
      <p>
        We work to keep the service running smoothly, but we do not promise that it will be
        available without interruption. We may carry out maintenance or change the service when
        needed.
      </p>

      <h2>Your content</h2>
      <p>
        You keep ownership of the content you host. You give us the limited permission we need to
        store, run and back up that content so that we can provide the service.
      </p>

      <h2>Ending your use</h2>
      <p>
        You can stop using the service and remove your hosting at any time. We may suspend or end
        access if you break these terms.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        The service is provided as it is. To the extent allowed by law, Breeze Host is not liable
        for indirect or consequential losses, or for loss of data or profits, arising from your use
        of the service. You are responsible for keeping your own backups.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these terms. When we do, we will change the date at the top of this page.
        Continuing to use the service means you accept the updated terms.
      </p>

      <h2>Governing law</h2>
      <p>These terms are governed by the laws of India.</p>

      <h2>Contact</h2>
      <p>For any question about these terms, contact us in our Discord server.</p>
    </LegalLayout>
  );
}
