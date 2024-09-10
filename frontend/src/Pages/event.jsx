import React from 'react';
import Card from '../Components/Card';



const events = [
  {
    // {imageUrl: 'https://via.placeholder.com/400x300?text=Tech+Conference',}
    imageUrl: 'https://techindetail.com/wp-content/uploads/2023/02/top.jpg' ,
    description: 'Join us for an exciting tech conference where industry leaders share their insights and future trends in technology.',
    linkUrl: 'https://techconference.com',
    linkText: 'Learn More'
  },
  {
    // {imageUrl: 'https://via.placeholder.com/400x300?text=Developer+Workshop',}
    imageUrl:'https://www.creativefabrica.com/wp-content/uploads/2022/03/05/workshop-logo-Graphics-26471451-1.jpg',
    description: 'A hands-on workshop for developers to learn the latest programming languages and tools.',
    linkUrl: 'https://developerworkshop.com',
    linkText: 'Register Now'
  },
  {
    // imageUrl: 'https://via.placeholder.com/400x300?text=AI+Summit',
    imageUrl:'https://www.pdpconferences.com/images/ai_data_compliance_summit_2024.jpg',
    description: 'Explore the world of artificial intelligence with keynote speakers and panel discussions from top AI experts.',
    linkUrl: 'https://aisummit.com',
    linkText: 'Discover More'
  },
  {
    imageUrl: 'https://via.placeholder.com/400x300?text=Cybersecurity+Forum',
    description: 'A forum focused on the latest in cybersecurity strategies and innovations to protect your data.',
    linkUrl: 'https://cybersecurityforum.com',
    linkText: 'Get Details'
  }
];

const Event = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Tech Events</h1>
        <p className="text-lg text-gray-600">Check out these exciting tech events happening soon!</p>
      </div>

      {/* Card Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {events.map((event, index) => (
          <Card
            key={index}
            imageUrl={event.imageUrl}
            description={event.description}
            linkUrl={event.linkUrl}
            linkText={event.linkText}
          />
          
        ))}
      </div>
    </div>
  );
};

export default Event;
