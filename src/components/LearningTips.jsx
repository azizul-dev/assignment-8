import React from 'react';

const LearningTips = () => {
  const tips = [
    {
      id: 1,
      icon: "⏱️",
      title: "Pomodoro Technique",
      description: "২৫ মিনিট পড়ো, ৫ মিনিট বিশ্রাম নাও। মনোযোগ ও productivity বাড়ে।",
      color: "bg-blue-50 border-blue-200",
    },
    {
      id: 2,
      icon: "🧠",
      title: "Active Recall",
      description: "পড়া শেষে নিজেকে প্রশ্ন করো। এটা সবচেয়ে effective study technique।",
      color: "bg-green-50 border-green-200",
    },
    {
      id: 3,
      icon: "📅",
      title: "Consistent Schedule",
      description: "প্রতিদিন একই সময়ে পড়ার অভ্যাস করো। Habit তৈরি হলে পড়া সহজ হয়।",
      color: "bg-yellow-50 border-yellow-200",
    },
    {
      id: 4,
      icon: "✍️",
      title: "Take Notes",
      description: "পড়তে পড়তে নোট নাও। নিজের ভাষায় লেখা memory তে বেশিক্ষণ থাকে।",
      color: "bg-purple-50 border-purple-200",
    },
    {
      id: 5,
      icon: "🎯",
      title: "Set Small Goals",
      description: "বড় লক্ষ্যকে ছোট ছোট ভাগে ভাগ করো। প্রতিটা সম্পন্ন করলে motivation বাড়ে।",
      color: "bg-red-50 border-red-200",
    },
    {
      id: 6,
      icon: "😴",
      title: "Sleep Well",
      description: "ঘুম brain-এর জন্য সবচেয়ে জরুরি। ভালো ঘুম = ভালো memory।",
      color: "bg-indigo-50 border-indigo-200",
    },
  ];
    return (
       <section className="py-16 bg-base-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">
          📌 Learning <span className="bg-gradient-to-r from-emerald-400 to-green-600 bg-clip-text text-transparent">Tips</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {tips.map(tip => (
            <div key={tip.id} className={`p-5 rounded-xl border ${tip.color} hover:scale-105 transition-transform`}>
              <span className="text-3xl">{tip.icon}</span>
              <h3 className="font-semibold text-lg mt-3 mb-2">{tip.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
};

export default LearningTips;

