import React from 'react';
import { CheckCircle, Circle, XCircle } from 'lucide-react';

const PricingTable = () => {
  const plans = [
    {
      title: 'Standard subscription',
      price: '$10',
      period: 'Monthly / per Editor, billed yearly',
      subPrice: 'Or $12 monthly / per Editor, billed monthly',
      features: [
        'Native Mac app',
        'Design, prototype and illustrate',
        'Work privately, offline',
        'Collaborate in real-time',
        'Web app for any browser',
        'Unlimited free viewers',
        'Export designs, prototypes and handoff to developers',
        'Comment and discuss on the Canvas',
        'Preview on your iPhone or iPad',
        'View documents and play prototypes',
        'Mirror designs from your Mac'
      ],
      ctaText: 'Start free 30-day trial',
      ctaSubtext: 'No credit card required for trial',
      forAudience: 'SOLO DESIGNERS / SMALL TEAMS'
    },
    {
      title: 'Mac-only license',
      price: '$120',
      period: 'Per Seat',
      subPrice: 'Includes 1 year of updates',
      features: [
        'Native mac app',
        'Design, prototype and illustrate',
        'Work privately, offline',
        'Store documents locally',
        "Your's to keep, forever"
      ],
      excluded: [
        'Collaborative features',
        'Access to the web app',
        'Sharing and saving documents online',
        'Unlimited free viewers',
        'Free trial'
      ],
      ctaText: 'Buy now',
      ctaSubtext: 'Activated with a license key',
      forAudience: 'SOLO DESIGNERS'
    },
    {
      title: 'Business subscription',
      price: '$20',
      period: 'Monthly / per Editor, billed yearly',
      subPrice: 'Available with yearly billing only',
      features: [
        'Single Sign-On (SSO)',
        'Unlimited versions and online storage',
        'Invoice-based billing',
        'Powerful permissions directory'
      ],
      ctaText: 'Get in touch',
      ctaSubtext: 'Have over 25 Editors in your team? Well get back to you with priority support, a dedicated customer success manager, as well as customized renewals and terms.',
      forAudience: 'MEDIUM-SIZED TEAMS / LARGE ORGANIZATIONS',
      includesStandard: true
    }
  ];

  return (
    <div className="bg-gray-100 p-8 font-sans">
      <div className="max-w-6xl mx-auto">
        <div className="bg-red-100 text-red-600 p-2 rounded-t-lg inline-block font-semibold text-sm">
          Save $24 with yearly billing
        </div>
        <div className="flex flex-col md:flex-row gap-6">
          {plans.map((plan, index) => (
            <div key={index} className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <div className="text-xs text-gray-500 mb-2">{plan.forAudience}</div>
                <h2 className="text-xl font-bold mb-4">{plan.title}</h2>
                <div className="text-3xl font-bold mb-2">{plan.price}</div>
                <div className="text-sm text-gray-600 mb-1">{plan.period}</div>
                <div className="text-xs text-gray-500 mb-4">{plan.subPrice}</div>
                {plan.includesStandard && (
                  <div className="text-sm mb-4">
                    Includes all features from the Standard subscription, plus extras for larger teams:
                  </div>
                )}
                <ul className="mb-6 space-y-2">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-sm">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.excluded && (
                  <>
                    <div className="font-semibold mb-2 text-sm">License excludes:</div>
                    <ul className="mb-6 space-y-2">
                      {plan.excluded.map((item, i) => (
                        <li key={i} className="flex items-center text-sm">
                          <Circle className="text-gray-300 mr-2 flex-shrink-0" size={16} />
                          <span className="text-gray-500">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
              <div className="px-6 pb-6">
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg mb-2 font-semibold">
                  {plan.ctaText}
                </button>
                <div className="text-xs text-center text-gray-500">{plan.ctaSubtext}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center text-gray-500 text-sm mt-6">
          You'll need macOS to create and edit documents.
        </div>
      </div>
    </div>
  );
};

export default PricingTable;