// Home.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import HeroBanner from '../../assets/hero_banner.png';
import HeroBanner2 from '../../assets/hero_banner2.png';
import HeroBanner3 from '../../assets/hero_banner3.png';
import './Home.css';
import play from '../../assets/play_icon.png';
import info from '../../assets/info_icon.png';
import TitleCard from '../../components/TitleCard/TitleCard';
import cards_data from '../../assets/cards/Cards_data';
import TitleCard2 from '../../components/TitleCard/TitleCard2';
import Modal from '../../components/Modal/Modal';
import Player from '../Player/Player';


const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isPlayerOpen, setPlayerOpen] = useState(false); // State to control video player visibility
  const [modalContent, setModalContent] = useState({ title: '', content: '', image: '', description: '', modalImages: '' });
  const [currentImage, setCurrentImage] = useState(HeroBanner);

  const images = [HeroBanner, HeroBanner2, HeroBanner3];
  let imageIndex = 0;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(() => {
        imageIndex = (imageIndex + 1) % images.length;
        return images[imageIndex];
      });
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  const openModal = (name, content, image, description, modalImages) => {
    setModalContent({ title: name, content, image, description, modalImages });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  // Fungsi untuk menampilkan Player
  const playVideo = () => {
    setPlayerOpen(true); // Show the video player
  };

  // Fungsi untuk menutup Player
  const closePlayer = () => {
    setPlayerOpen(false); // Hide the video player
  };

  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={currentImage} alt="Hero Banner" className="banner-img" />
        <div className="hero-caption">
          <h1>HOW TO SAY HAPPY BIRTHDAY TO YOUR FAVORITE PERSON</h1>
          <p>Hi Dya, happy birthday to youu. I really happy to be able to celebrate your birthday together for the 4th time. I hope u doing well and we can achieve our dreams</p>
          <div className="hero-btns">
            <button className="btn" onClick={playVideo}>
              <img src={play} alt="" /> Play
            </button>
            <button className="btn dark-btn">
              <img src={info} alt="" openModal={openModal}/> Information
            </button>
          </div>
          <TitleCard2 openModal={openModal} />
        </div>
      </div>

      {/* Conditional rendering for the Player */}
      {isPlayerOpen && (
        <div className="player-overlay">
          <Player videoId="ZZDMP7Te8bY" />
          <button className="close-btn" onClick={closePlayer}>Close</button>
        </div>
      )}

      <div className="more-cards">
        {cards_data.map((item, index) => (
          <TitleCard
            key={index}
            title={item.title}
            contents={item.contents}
            description={item.description}
            modalImages={item.modalImages}
            onClick={openModal}
          />
        ))}
      </div>
      <Modal
        title={modalContent.title}
        content={modalContent.content}
        description={modalContent.description}
        image={modalContent.image}
        modalImages={modalContent.modalImages}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Home;
