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
          height: '80vh',
          flexDirection: 'column',
          textAlign: 'center',
          padding: '20px',
        }}>
        <h1>🗺️ Peta Masalah (Alpha Ver.)</h1>
        
        <div style={{margin: '20px 0', maxWidth: '600px'}}>
          <p>
            Saya sedang membangun sistem <strong>GIS (Geographic Information System)</strong> sederhana. 
            Nantinya, halaman ini akan memuat peta interaktif Bali.
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
                to="/">
                Kembali ke Beranda
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