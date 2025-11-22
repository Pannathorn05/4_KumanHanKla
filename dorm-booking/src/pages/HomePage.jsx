import React from "react";
import InfoCard from "../components/InfoCard";
import SectionCard from "../components/SectionCard";
import "./../styles/HomePage.css";

function HomePage() {
  return (
    <main className="home-wrapper">
      <div className="home-hero-bg">
        <div className="page-container">
          {/* ส่วนหัวชื่อหอพัก */}
          <section className="home-hero">
            <div className="home-hero-text">
              <h1>หอพักใจ</h1>
              <p className="home-hero-subtitle">
                หอพักสำหรับนิสิตนักศึกษา
              </p>
              <p className="home-hero-desc">
                หอพักใจตั้งอยู่ใกล้มหาวิทยาลัย เดินทางสะดวก บรรยากาศเงียบสงบ
                เหมาะสำหรับการพักผ่อนและการเรียนหนังสือ
              </p>
              <button className="btn-primary home-hero-btn">
                จองห้องพักตอนนี้
              </button>
            </div>
          </section>

          {/* การ์ดข้อมูลสรุปห้อง */}
          <section className="home-summary">
            <InfoCard
              title="2 อาคาร"
              subtitle="อาคาร A และ อาคาร B"
            />
            <InfoCard
              title="1–2 คน/ห้อง"
              subtitle="ขนาดห้อง 27 ตร.ม."
            />
            <InfoCard
              title="54,000 บาท/ปี"
              subtitle="เฉลี่ย 4,500 บาท/เดือน"
            />
          </section>

          {/* ข้อมูลเพิ่มเติม */}
          <section className="home-extra">
            <SectionCard title="ข้อมูลเพิ่มเติม">
              <div className="home-extra-grid">
                <div className="home-extra-box home-extra-blue">
                  <p>ค่าน้ำประปาเหมาจ่าย</p>
                  <p className="home-extra-amount">150 บาท/คน/เดือน</p>
                </div>
                <div className="home-extra-box home-extra-yellow">
                  <p>ค่าไฟฟ้าตามมิเตอร์</p>
                  <p className="home-extra-amount">7 บาท/หน่วย</p>
                </div>
                <div className="home-extra-box home-extra-pink">
                  <p>ค่าบำรุงหอพัก</p>
                  <p className="home-extra-amount">500 บาท/ปี</p>
                </div>
              </div>
            </SectionCard>
          </section>

          {/* สิ่งอำนวยความสะดวก + ความปลอดภัย */}
          <section className="home-two-columns">
            <SectionCard title="ภายในห้อง">
              <ul className="section-list">
                <li>เตียง + ที่นอน</li>
                <li>ตู้เสื้อผ้า</li>
                <li>โต๊ะอ่านหนังสือ + เก้าอี้</li>
                <li>แอร์</li>
                <li>ห้องน้ำในตัว</li>
              </ul>
            </SectionCard>

            <SectionCard title="ส่วนกลาง">
              <ul className="section-list">
                <li>เครื่องซักผ้าหยอดเหรียญ</li>
                <li>ตู้น้ำดื่มหยอดเหรียญ</li>
                <li>ที่จอดรถยนต์ / จักรยานยนต์</li>
                <li>อินเทอร์เน็ต Wi-Fi</li>
              </ul>
            </SectionCard>
          </section>

          <section className="home-two-columns">
            <SectionCard title="ความปลอดภัย">
              <ul className="section-list">
                <li>ระบบ CCTV 24 ชม.</li>
                <li>เจ้าหน้าที่รักษาความปลอดภัย</li>
                <li>เข้า–ออกด้วยคีย์การ์ด</li>
                <li>ประตูหน้า–หลังล็อคอัตโนมัติ</li>
              </ul>
            </SectionCard>
          </section>

          {/* ที่ตั้ง / การเดินทาง */}
          <section className="home-location">
            <SectionCard title="ที่อยู่ และการเดินทาง">
              <div className="home-location-body">
                <div className="home-location-text">
                  <p>เลขที่ 123 ถนนตัวอย่าง เขตตัวอย่าง กรุงเทพมหานคร</p>
                  <p className="home-location-small">
                    ห่างจากมหาวิทยาลัยประมาณ 800 เมตร ใกล้ 7-Eleven และป้ายรถเมล์
                  </p>
                  <ul className="section-list">
                    <li>รถเมล์สาย 8, 44, 510</li>
                    <li>วินมอเตอร์ไซค์หน้าปากซอย</li>
                  </ul>
                </div>
              </div>
            </SectionCard>
          </section>

          {/* แถบติดต่อ */}
          <section className="home-contact">
            <div className="home-contact-bar">
              <span>ติดต่อสอบถาม</span>
              <strong>02-232-2323</strong>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default HomePage;
