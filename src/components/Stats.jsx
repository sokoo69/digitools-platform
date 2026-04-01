const Stats = () => {
  const stats = [
    {
      number: '50K+',
      label: 'Active Users',
    },
    {
      number: '200+',
      label: 'Premium Tools',
    },
    {
      number: '4.9',
      label: 'Rating',
    },
  ];

  return (
    <section className="bg-purple-600 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-6 divide-x divide-purple-400">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center py-4">
              <span className="text-4xl md:text-5xl font-extrabold text-white mb-1">
                {stat.number}
              </span>
              <span className="text-purple-200 text-sm md:text-base font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
