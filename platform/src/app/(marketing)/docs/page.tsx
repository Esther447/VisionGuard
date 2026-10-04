import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Technical integration guides for the VisionGuard AI security platform — APIs, SDKs, and deployment instructions.',
};

export default function DocsPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">VisionGuard Documentation</h1>
      <p className="text-lg mb-10 text-gray-600">
        Everything you need to integrate the{' '}
        <Link href="https://visionguard.digital">VisionGuard AI Security Platform</Link> into your
        infrastructure.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Quick Start</h2>
        <p className="text-gray-600">
          Connect your camera feeds to the VisionGuard API in minutes. Our REST API accepts RTSP,
          HLS, and direct video upload streams.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">API Reference</h2>
        <p className="text-gray-600">
          Full endpoint documentation for threat detection, analytics retrieval, alert configuration,
          and user management is available to registered platform users.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Deployment</h2>
        <p className="text-gray-600">
          VisionGuard supports cloud, on-premise, and hybrid deployments. Docker images and
          Kubernetes Helm charts are provided for enterprise installations.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Webhooks &amp; Integrations</h2>
        <p className="text-gray-600">
          Configure outbound webhooks to connect VisionGuard alerts with Slack, PagerDuty, Microsoft
          Teams, or any custom endpoint.
        </p>
      </section>
    </main>
  );
}
