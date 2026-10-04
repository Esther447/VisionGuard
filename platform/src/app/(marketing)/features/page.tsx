import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Features',
  description:
    'Explore VisionGuard features: real-time computer vision monitoring, AI threat detection, and automated security analytics.',
};

export default function FeaturesPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-4">VisionGuard Platform Features</h1>
      <p className="text-lg mb-10 text-gray-600">
        <Link href="https://visionguard.digital">VisionGuard AI Security Platform</Link> delivers
        enterprise-grade computer vision capabilities for modern security operations.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Real-Time Computer Vision Monitoring</h2>
        <p className="text-gray-600">
          VisionGuard processes live video streams using deep learning models to detect anomalies,
          unauthorized access, and suspicious behaviour the moment they occur.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">AI-Powered Threat Detection</h2>
        <p className="text-gray-600">
          Our models are trained on diverse security scenarios, enabling accurate identification of
          threats across retail, industrial, and enterprise environments with minimal false positives.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Automated Security Analytics</h2>
        <p className="text-gray-600">
          VisionGuard automatically generates incident reports, heatmaps, and trend analytics,
          giving security teams actionable intelligence without manual review.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-2">Real-Time Alerts</h2>
        <p className="text-gray-600">
          Instant notifications via email, SMS, or webhook integrations ensure your team responds
          to threats within seconds of detection.
        </p>
      </section>
    </main>
  );
}
