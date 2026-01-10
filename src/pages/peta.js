import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Peta() {
  return (
    <Layout title="Peta Masalah" description="Sistem Pemetaan Partisipatif Kopeka Bali">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          // height: '100vh',
          flexDirection: 'column',
          textAlign: 'center',
          padding: '20px',
        }}>
        <h1>🗺️ Peta Masalah (Alpha Ver.)</h1>
        <img src="/img/kopeka_gis.png" alt="Peta Masalah Screenshot" style={{height: '100%', height: '200px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'}} />
        
        <div style={{margin: '20px 0', maxWidth: '600px'}}>
          <p>
            Kami sedang membangun sistem <strong>GIS (Geographic Information System)</strong> sederhana. 
            Nantinya, halaman ini akan memuat peta interaktif Kota Denpasar.
          </p>
          <div className="alert alert--info" role="alert">
            <strong>Fitur yang sedang didevelop:</strong><br/>
            - Ruas jalan di Denpasar.<br/>
            - Input lokasi kerusakan trotoar.<br/>
            - Input lokasi fasilitas publik (toilet, tempat sampah, halte, taman, plaza, dll).<br/>
            - Jalur aman bersepeda & wilayah pedestrian friendly.<br/>
            - (planned) Heatmap kepadatan pejalan kaki.<br/>
            - (planned) Jalur commuting pejalan kaki.<br/>

          </div>
        </div>

        <p>Anda developer? Mau bantu kontribusi kode?</p>
        
        
        <div className={styles.buttons}>
             <Link
                className="button button--primary button--lg"
                to="https://zeneight.github.io/kopekabali-gis">
                Akses Peta (Alpha Ver/Prototype)
            </Link>
            <Link
                className="button button--secondary button--lg"
                href="https://github.com/zeneight/kopekabali-gis">
                Lihat di GitHub
            </Link>
        </div>
      </div>
    </Layout>
  );
}