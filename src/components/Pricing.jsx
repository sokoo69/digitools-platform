import { Check } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      subtitle: 'Perfect for getting started',
      price: '0',
      period: 'Month',
      features: [
        'Access to 10 free tools',
        'Basic templates',
        'Community support',
        '1 project per month',
      ],
      highlighted: false,
      buttonLabel: 'Get Started Free',
    },
    {
      name: 'Pro',
      subtitle: 'Best for professionals',
      price: '29',
      period: 'Month',
      features: [
        'Access to all premium tools',
        'Unlimited templates',
        'Priority support',
        'Unlimited projects',
        'Cloud sync',
        'Advanced analytics',
      ],
      highlighted: true,
      buttonLabel: 'Start Pro Trial',
    },
    {
      name: 'Enterprise',
      subtitle: 'For teams and businesses',
      price: '99',
      period: 'Month',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom integrations',
        'Dedicated support',
        'SLA guarantee',
        'Custom branding',
      ],
      highlighted: false,
      buttonLabel: 'Contact Sales',
    },
  ];

  return (
    <section id="pricing" className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-7 border relative ${plan.highlighted
                  ? 'bg-purple-600 border-purple-600 shadow-2xl scale-105 text-white'
                  : 'bg-white border-gray-100 shadow-md text-gray-900'
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-orange-400 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-md">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className={`text-xl font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm mb-5 ${plan.highlighted ? 'text-purple-200' : 'text-gray-500'}`}>
                {plan.subtitle}
              </p>

              <div className="flex items-end gap-1 mb-6">
                <span className={`text-4xl font-extrabold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                  ${plan.price}
                </span>
                <span className={`text-sm mb-1.5 ${plan.highlighted ? 'text-purple-200' : 'text-gray-400'}`}>
                  /{plan.period}
                </span>
              </div>

              <ul className="space-y-2.5 mb-7">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-2.5">
                    <Check
                      size={16}
                      className={`shrink-0 ${plan.highlighted ? 'text-purple-200' : 'text-purple-600'}`}
                    />
                    <span className={`text-sm ${plan.highlighted ? 'text-purple-100' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${plan.highlighted
                    ? 'bg-white text-purple-600 hover:bg-purple-50'
                    : 'bg-purple-600 hover:bg-purple-700 text-white'
                  }`}
              >
                {plan.buttonLabel}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-linear-to-r from-purple-600 to-purple-700 rounded-3xl px-8 py-14 text-center shadow-xl">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready To Transform Your Workflow?
          </h3>
          <p className="text-purple-100 text-base mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already using DigiTools to work smarter.<br />
            Start your free trial today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-6">
            <button className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-xl">
              Explore Products
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold px-8 py-3.5 rounded-xl transition-all">
              View Pricing
            </button>
          </div>
          <p className="text-purple-200 text-sm">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
