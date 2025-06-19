import React from 'react';
import Navbar from '../../Components/user/Navbar';
import Footer from '../../Components/user/Footer';
import '../../styles/user/Authors.css';

const authors = [
  {
    name: 'स्वामी विवेक',
    image: 'https://via.placeholder.com/150?text=स्वामी+विवेक',
    bio: 'स्वामी विवेक is a renowned author known for their contribution to fantasy books.',
    books: ['विदुर नीति', 'रामायण', 'आत्मा का विज्ञान'],
    socials: { website: '#', twitter: '#' }
  },
  {
    name: 'Cal Newport',
    image: 'https://via.placeholder.com/150?text=Cal+Newport',
    bio: 'Cal Newport is a renowned author known for their contribution to fantasy books.',
    books: ['Rich Dad Poor Dad', 'Wings of Fire', 'Ikigai'],
    socials: { website: '#', twitter: '#' }
  },
  {
    name: 'डॉ. नरेंद्र',
    image: 'https://via.placeholder.com/150?text=डॉ.+नरेंद्र',
    bio: 'डॉ. नरेंद्र is a renowned author known for their contribution to comics books.',
    books: ['सपनों की उड़ान', 'विदुर नीति', 'आत्मा का विज्ञान'],
    socials: { website: '#', twitter: '#' }
  },
  {
    name: 'Jay Shetty',
    image: 'https://via.placeholder.com/150?text=Jay+Shetty',
    bio: 'Jay Shetty is a renowned author known for their contribution to mythology books.',
    books: ['Wings of Fire', 'Rich Dad Poor Dad', 'Ikigai'],
    socials: { website: '#', twitter: '#' }
  },
  {
    name: 'चाणक्य',
    image: 'https://via.placeholder.com/150?text=चाणक्य',
    bio: 'चाणक्य is a renowned author known for their contribution to romance books.',
    books: ['चाणक्य नीति', 'श्रीमद भगवद गीता', 'आत्मा का विज्ञान'],
    socials: { website: '#', twitter: '#' }
  },
  {
    name: 'A.P.J. Abdul Kalam',
    image: 'https://via.placeholder.com/150?text=A.P.J.+Abdul+Kalam',
    bio: 'A.P.J. Abdul Kalam is a renowned author known for their contribution to mythology books.',
    books: ['The Alchemist', 'Think Like a Monk', 'Rich Dad Poor Dad'],
    socials: { website: '#', twitter: '#' }
  },
  {
    name: 'David Goggins',
    image: 'https://via.placeholder.com/150?text=David+Goggins',
    bio: 'David Goggins is a renowned author known for their contribution to biography books.',
    books: ['Rich Dad Poor Dad', 'Deep Work', "Can't Hurt Me"],
    socials: { website: '#', twitter: '#' }
  },
  {
    name: 'डॉ. कलाम',
    image: 'https://via.placeholder.com/150?text=डॉ.+कलाम',
    bio: 'डॉ. कलाम is a renowned author known for their contribution to comics books.',
    books: ['आत्मा का विज्ञान'],
    socials: { website: '#', twitter: '#' }
  },
  {
    name: 'Alex Michaelides',
    image: 'https://via.placeholder.com/150?text=Alex+Michaelides',
    bio: 'Alex Michaelides is a renowned author known for their contribution to romance books.',
    books: ["Can't Hurt Me", 'The Silent Patient', 'Rich Dad Poor Dad'],
    socials: { website: '#', twitter: '#' }
  },
  {
    name: 'वाल्मीकि',
    image: 'https://via.placeholder.com/150?text=वाल्मीकि',
    bio: 'वाल्मीकि is a renowned author known for their contribution to biography books.',
    books: ['श्रीमद भगवद गीता', 'विदुर नीति', 'आपका भविष्य'],
    socials: { website: '#', twitter: '#' }
  },
  // ✂️ Add remaining authors from my last output as needed...
];


const Authors = () => {
  return (
    <>
      <Navbar />
      <div className="authors-page">
        <h1>📚 Meet the Authors</h1>
        <div className="author-list">
          {authors.map((author, index) => (
            <div key={index} className="author-card">
              <img src={author.image} alt={author.name} className="author-img" />
              <h2>{author.name}</h2>
              <p>{author.bio}</p>
              <strong>Famous Books:</strong>
              <ul>
                {author.books.map((book, i) => <li key={i}>{book}</li>)}
              </ul>
              <div className="author-links">
                <a href={author.socials.website} target="_blank" rel="noopener noreferrer">🌐 Website</a>
                <a href={author.socials.twitter} target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Authors;
