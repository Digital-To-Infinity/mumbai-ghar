import React from "react";

export default function TermsPage() {
  return (
    <div className="pt-32 pb-20 min-h-screen bg-white">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold font-heading mb-8 text-primary">Terms & Conditions</h1>
        <div className="prose prose-slate max-w-none space-y-8 text-muted-foreground leading-relaxed">
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">1. Agreement to Terms</h2>
            <p>
              By accessing our website at mumbaighar.com, you agree to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
            </p>
          </section>
          
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">2. Use License</h2>
            <p>
              Permission is granted to temporarily download one copy of the materials (information or software) on Mumbai Ghar's website for personal, non-commercial transitory viewing only.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-primary">3. Disclaimer</h2>
            <p>
              The materials on Mumbai Ghar's website are provided on an 'as is' basis. Mumbai Ghar makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability.
            </p>
          </section>

          <section className="space-y-4 pt-8 border-t border-border">
            <p className="text-sm italic">Last updated: October 2023. For any queries, contact us at legal@mumbaighar.com.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
