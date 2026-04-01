import { User, Package, Rocket } from 'lucide-react';

const Steps = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Account',
      description: 'Sign up for free in seconds. No credit card required to get started.',
      icon: User,
    },
    {
      number: '02',
      title: 'Choose Products',
      description: 'Browse our catalog and select the tools that fit your needs.',
      icon: Package,
    },
    {
      number: '03',
      title: 'Start Creating',
      description: 'Download and start using your premium tools immediately.',
      icon: Rocket,
    },
  ];

  return (
    <section className="bg-[#F5F7FA] py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get Started In 3 Steps
          </h2>
          <p className="text-gray-500 text-lg">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 relative"
              >
                <span className="absolute top-6 right-6 bg-purple-600 text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center">
                  {step.number}
                </span>

                <div className="mb-6">
                  <div className="w-24 h-24 bg-purple-50 rounded-full flex items-center justify-center mx-auto md:mx-0">
                    <IconComponent className="w-12 h-12 text-purple-600" strokeWidth={2} />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Steps;
