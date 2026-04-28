import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold font-heading mb-8 text-primary">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">1. Introduction</h2>
            <p>
              Welcome to Mumbai Ghar (mumbaighar.com). We value your privacy and are committed to protecting your personal data. This privacy policy informs you about how we handle your personal data when you visit our website.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">2. Data We Collect</h2>
            <p>
              We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Identity Data includes first name, last name, username or similar identifier.</li>
              <li>Contact Data includes email address and telephone numbers.</li>
              <li>Technical Data includes internet protocol (IP) address, login data, browser type and version.</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">3. How We Use Your Data</h2>
            <p>
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To provide you with information about real estate properties.</li>
              <li>To connect you with verified builders and agents.</li>
              <li>To improve our website services and user experience.</li>
            </ul>
          </section>

          <section className="space-y-4 pt-8 border-t border-border">
            <p className="text-sm italic">Last updated: October 2023. For any queries, contact us at privacy@mumbaighar.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
