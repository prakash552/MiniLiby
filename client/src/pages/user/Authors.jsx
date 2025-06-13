import React from 'react';
import Navbar from '../../Components/user/Navbar';
import Footer from '../../Components/user/Footer';
import '../../styles/user/Authors.css';

const authors = [
  {
    name: 'Chetan Bhagat',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Chetan_Bhagat.jpg/440px-Chetan_Bhagat.jpg',
    bio: 'Chetan Bhagat is a popular Indian author known for his novels on modern-day youth and culture.',
    books: ['Five Point Someone', '2 States', 'Half Girlfriend'],
    socials: {
      website: 'https://www.chetanbhagat.com/',
      twitter: 'https://twitter.com/chetan_bhagat',
    }
  },
  {
    name: 'J.K. Rowling',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5d/J._K._Rowling_2010.jpg',
    bio: 'British author best known for writing the Harry Potter fantasy series, one of the best-selling book series in history.',
    books: ['Harry Potter Series', 'The Casual Vacancy'],
    socials: {
      website: 'https://www.jkrowling.com/',
      twitter: 'https://twitter.com/jk_rowling',
    }
  }
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
