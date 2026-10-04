export default function SchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'VisionGuard',
    url: 'https://visionguard.digital',
    applicationCategory: 'SecurityApplication',
    operatingSystem: 'Web',
    description:
      'AI-powered computer vision security platform for real-time threat detection and analytics.',
    author: {
      '@type': 'Organization',
      name: 'VisionGuard',
      url: 'https://visionguard.digital',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
