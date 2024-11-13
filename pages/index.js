import Head from 'next/head'
import Image from 'next/image'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  useEffect(() => {
    // 计时器逻辑
    const updateTimer = () => {
      const timerElement = document.getElementById('timer');
      if (!timerElement) return;
      
      let [hours, minutes, seconds] = timerElement.textContent.split(':').map(Number);
      
      const interval = setInterval(() => {
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
          if (minutes < 0) {
            minutes = 59;
            hours--;
            if (hours < 0) {
              hours = 12;
            }
          }
        }
        timerElement.textContent = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
      }, 1000);

      return () => clearInterval(interval);
    };

    updateTimer();
  }, []);

  useEffect(() => {
    const videoElement = document.querySelector('video');
    
    if (videoElement) {
      videoElement.addEventListener('error', (e) => {
        console.error('Video error:', e);
        const loading = document.querySelector('.loading');
        if (loading) {
          loading.textContent = '视频加载失败，请刷新页面';
        }
      });
    }
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Cá Cược Thể Thao MK Sports 2024</title>
        <meta name="description" content="MK Sports 2024 nền tảng uy tín với nhiều lựa chọn cá cược và tỷ lệ hấp dẫn. Đăng ký ngay!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.videoBackground}>
          <div className={styles.videoWrapper}>
            <video 
              src="/videos/MK Sports_Empoli.mp4"
              autoPlay
              muted
              loop
              playsInline
              className={styles.video}
            />
          </div>
          <div className={styles.overlay} />
        </div>

        <div className={styles.content}>
          <div className={styles.promoSection}>
            <h1 style={{color: '#FFD700'}}>Ưu đãi có thời hạn! Thời gian còn lại!</h1>
            <div className={styles.timerContainer}>
              <div className={styles.timer} id="timer">00:59:59</div>
            </div>
            <div className={styles.bonusText}>Nhận ưu đãi mỗi ngày!</div>
            <a 
              href="https://www.gn3o3k.vip:8663/VI/entry/register22292?i_code=99079490" 
              className={styles.registerButton}
              target="_blank"
              rel="noopener noreferrer"
            >
              Đăng ký ngay
            </a>
          </div>

          <div className={styles.menuGrid}>
            <a 
              href="https://t.me/DoannganMK" 
              className={styles.menuItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={styles.menuIcon} viewBox="0 0 50 50">
                <path d="M25 2C12.318 2 2 12.318 2 25c0 3.96 1.023 7.854 2.963 11.29L2.037 46.73c-.147.42.087.88.497 1.027.147.053.3.08.45.08.28 0 .55-.147.707-.37l8.37-12.36C15.197 38.927 19.997 40 25 40c12.682 0 23-10.318 23-23S37.682 2 25 2zm0 44c-4.71 0-9.243-1.473-13.048-4.26-.184-.136-.41-.197-.637-.174-.226.023-.438.127-.593.293l-6.876 9.53 2.488-8.862c.086-.305.014-.633-.188-.874C4.137 38.175 3 31.695 3 25 3 12.87 12.87 3 25 3s22 9.87 22 22-9.87 22-22 22z"/>
              </svg>
              Liên hệ chăm sóc khách hàng để nhận ưu đãi
            </a>
            <a 
              href="https://t.me/khuyenmaimksports01" 
              className={styles.menuItem}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className={styles.menuIcon} viewBox="0 0 50 50">
                <path d="M46.137 6.552c-.75-.636-1.928-.727-3.146-.238l-36.76 14.921c-1.278.519-1.943 1.054-2.007 1.868-.078.978.864 1.875 2.063 2.5l8.973 4.123c1.063-.907 9.922-8.492 11.56-9.874.47-.394 1.227-.094 1.227.532 0 .625-5.046 5.562-6.866 7.39-.674.673-.42 1.814.53 2.187l13.115 5.175c1.084.428 2.304-.066 2.7-1.15l7.92-21.632c.388-1.056-.45-1.942-1.172-2.545z"/>
              </svg>
              Tham gia Telegram
            </a>
          </div>
        </div>
      </main>
    </div>
  );
} 