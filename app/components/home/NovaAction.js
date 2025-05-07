'use client'
import React, { useState, useRef } from 'react';
import styles from '../../../styles/home/NovaAction.module.css';
import { Clock, TrendingUp, Users } from 'lucide-react';

const NovaAction = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  const handleSeekChange = (e) => {
    const newTime = e.target.value;
    if (videoRef.current) {
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section className={styles.novaActionSection}>
      <div className={styles.container}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>See Nova in Action</h2>
          <p className={styles.sectionSubtitle}>
            Watch how Nova helps gaming teams turn week-long releases into hour-long pushes
          </p>
        </div>

        <div className={styles.videoContainer}>
          <div className={styles.video}>
            <video
              ref={videoRef}
              src="/assets/videos/XGaming_UseCaseZ.mp4"
              poster="/video-poster.png"
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onClick={togglePlay}
            />
            
            <div className={styles.centerPlayButton} onClick={togglePlay}>
              {!isPlaying && (
                <button className={styles.playButton}>
                  <svg viewBox="0 0 24 24" fill="white" width="48" height="48">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              )}
            </div>

            <div className={styles.videoControls}>
              <button className={styles.controlButton} onClick={togglePlay}>
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                    <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                )}
              </button>
              
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeekChange}
                className={styles.seekBar}
              />
              
              <div className={styles.timeDisplay}>
                {formatTime(currentTime)} / {formatTime(duration)}
              </div>
              
              <div className={styles.volumeControl}>
                <button className={styles.controlButton}>
                  <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                  </svg>
                </button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={handleVolumeChange}
                  className={styles.volumeSlider}
                />
              </div>
              
              <button className={styles.controlButton} onClick={toggleFullScreen}>
                <svg viewBox="0 0 24 24" fill="white" width="24" height="24">
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={styles.benefitsContainer}>
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <Clock size={24} color="#43A673" />
            </div>
            <h3 className={styles.benefitTitle}>10x Faster Releases</h3>
            <p className={styles.benefitDescription}>
              Automate repetitive tasks and accelerate your game update cycles
            </p>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <TrendingUp size={24} color="#43A673" />
            </div>
            <h3 className={styles.benefitTitle}>22% Revenue Lift</h3>
            <p className={styles.benefitDescription}>
              Optimize player offers and balance game economies in real-time
            </p>
          </div>
          
          <div className={styles.benefitCard}>
            <div className={styles.benefitIcon}>
              <Users size={24} color="#43A673" />
            </div>
            <h3 className={styles.benefitTitle}>30% Less Churn</h3>
            <p className={styles.benefitDescription}>
              Identify player frustration before it happens and react proactively
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NovaAction;