import React, { useState } from "react";
import { agendaData, AgendaItem } from "../../../constants/AgendaData";
import { MdAccessTime, MdPerson, MdCategory, MdFilterList } from "react-icons/md";

const Agenda: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Tech' | 'Non Tech' | 'Workshop'>('All');

  // Gradient colors (same as team section)
  const gradients = [
    "linear-gradient(135deg,#fbbc04,#ff902a,#ea4335)", // Yellow to orange to red
    "linear-gradient(135deg,#34a853,#2daeb8,#4285f4)", // Green to teal to blue
    "linear-gradient(135deg,#ff6b6b,#ee5a52,#ff4757)", // Red variants
    "linear-gradient(135deg,#7b68ee,#9c88ff,#3742fa)", // Purple to blue
  ];

  // Session type colors
  const getSessionTypeColor = (sessionType: string) => {
    const colors = {
      'General': 'bg-blue-100 text-blue-800',
      'Keynote': 'bg-purple-100 text-purple-800',
      'AI': 'bg-green-100 text-green-800',
      'Flutter': 'bg-cyan-100 text-cyan-800',
      'Panel': 'bg-orange-100 text-orange-800',
      'Cloud': 'bg-indigo-100 text-indigo-800',
      'Web': 'bg-pink-100 text-pink-800',
      'Activity': 'bg-gray-100 text-gray-800',
      'Fireside chat': 'bg-yellow-100 text-yellow-800',
      'Workshop': 'bg-teal-100 text-teal-800'
    };
    return colors[sessionType as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  // Filter data
  const filteredData = filter === 'All' ? agendaData : agendaData.filter(item => item.category === filter);

  // Special session component
  const SpecialSession: React.FC<{ item: AgendaItem; gradient: string }> = ({ item, gradient }) => (
    <div 
      className="rounded-xl shadow-lg p-1 col-span-full"
      style={{ background: gradient }}
    >
      <div className="bg-white rounded-lg p-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MdAccessTime size={20} className="text-gray-600" />
          <span className="text-lg font-semibold text-gray-800">
            {item.startTime} - {item.endTime}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">
          {item.title}
        </h3>
        <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-sm font-medium">
          <MdCategory size={16} />
          {item.duration} minutes
        </div>
      </div>
    </div>
  );

  // Regular session component
  const RegularSession: React.FC<{ item: AgendaItem; gradient: string }> = ({ item, gradient }) => (
    <div 
      className="rounded-xl shadow-lg p-1 transform transition-all duration-300 hover:scale-105"
      style={{ background: gradient }}
    >
      <div className="bg-white rounded-lg p-6 h-full">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2 text-gray-600">
            <MdAccessTime size={18} />
            <span className="font-medium">{item.startTime} - {item.endTime}</span>
          </div>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSessionTypeColor(item.sessionType)}`}>
            {item.sessionType}
          </span>
        </div>
        
        <h3 className="text-lg font-bold text-gray-800 mb-3 leading-tight">
          {item.title}
        </h3>
        
        {item.speaker && (
          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <MdPerson size={18} />
            <span className="text-sm">{item.speaker}</span>
          </div>
        )}
        
        {item.room && (
          <div className="flex items-center gap-2 text-gray-600 mb-3">
            <MdCategory size={18} />
            <span className="text-sm font-medium">{item.room}</span>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            item.category === 'Tech' ? 'bg-green-100 text-green-800' : 
            item.category === 'Workshop' ? 'bg-teal-100 text-teal-800' : 'bg-blue-100 text-blue-800'
          }`}>
            {item.category}
          </span>
          <span className="text-xs text-gray-500">{item.duration} min</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center px-4 pt-32 pb-16">
      <div className="max-w-7xl w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-6xl font-bold text-black mb-4">
            Event Agenda
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Join us for a full day of learning, networking, and innovation. Explore cutting-edge technologies, 
            hear from industry experts, and connect with fellow developers.
          </p>
        </div>

        {/* Filter Section */}
        <div className="flex justify-center mb-8">
          <div 
            className="rounded-xl shadow-lg p-1"
            style={{ background: gradients[0] }}
          >
            <div className="bg-white rounded-lg p-2 flex items-center gap-2">
              <MdFilterList size={20} className="text-gray-600 ml-2" />
              <div className="flex gap-1">
                {['All', 'Tech', 'Non Tech', 'Workshop'].map((filterOption) => (
                  <button
                    key={filterOption}
                    onClick={() => setFilter(filterOption as 'All' | 'Tech' | 'Non Tech' | 'Workshop')}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      filter === filterOption
                        ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {filterOption}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Agenda Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredData.map((item, index) => {
            const gradient = gradients[index % gradients.length];
            
            if (item.isSpecial) {
              return <SpecialSession key={item.id} item={item} gradient={gradient} />;
            }
            
            return <RegularSession key={item.id} item={item} gradient={gradient} />;
          })}
        </div>

        {/* Event Info Footer */}
        <div className="mt-12 text-center">
          <div 
            className="rounded-xl shadow-lg p-1 inline-block"
            style={{ background: gradients[1] }}
          >
            <div className="bg-white rounded-lg px-8 py-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                July 12, 2025 | NASTP, Karachi
              </h3>
              <p className="text-gray-600">
                Don't miss this amazing opportunity to learn, network, and grow with the tech community!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Agenda;
