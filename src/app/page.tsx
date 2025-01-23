"use client";

import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <div className="snap-center" id="N-series">
        <Section
          title="NPR"
          description="4×2 GVW 6.5 – 7.5t Best of the Best No.1 Selling"
          backgroundImg="https://4b6637542a3a5e37ddcf-d1157ffdfccf8761b2b3e3f4698f8a9e.ssl.cf1.rackcdn.com/npr3.jpg"
          leftBtnText="Order Now"
          leftBtnLink="/order/NPR"
        />
      </div>

      <div className="snap-center">
        <Section
          title="NMR"
          description="4×2 GVW 5.5t King of Narrow body"
          backgroundImg="https://www.content.isuzu.com.au/media/fffbiemn/200723_isuzu_nmr_60-150_01-1023x682-c4709dde-0237-4257-9536-e0aead9cdb27-1.jpg"
          leftBtnText="Order Now"
          leftBtnLink="/order/NMR"
        />
      </div>

      <div className="snap-center">
        <Section
          title="NQR"
          description="From $74,990*"
          backgroundImg="https://editorial.pxcrush.net/trucksales/general/editorial/180301_isuzu_nqr_80-190_40.jpg?width=1024&height=920"
          leftBtnText="Order Now"
          leftBtnLink="/order/NQR"
        />
      </div>

      <div className="snap-center">
        <Section
          title="NPR Crewcab"
          description="4×2 GVW 5.5 – 6.5t Perfect for every Application"
          backgroundImg="https://marvel-b1-cdn.bc0a.com/f00000000295579/www.tecequipment.com/app/uploads/2019/07/Isuzu_NPR-HD-CrewCab-2400x1600.jpg"
          leftBtnText="Order Now"
          leftBtnLink="/order/NPR-Crewcab"
        />
      </div>

      <div className="snap-center">
        <Section
          title="Completed Trucks"
          description="With Rear body Everything You need"
          backgroundImg="https://www.canberratimes.com.au/images/transform/v1/crop/frm/silverstone-feed-data/1fc9353d-5229-4ded-a899-47065b6aeaaf.jpg/r0_0_4321_2431_w1200_h678_fmax.webp"
          leftBtnText="Order Now"
          leftBtnLink="/order/completed-trucks"
        />
      </div>

      <div className="snap-center" id="F-series">
        <Section
          title="FRR"
          description="4×2 GVW 11.0 t Built to last"
          backgroundImg="https://www.aboudcar.com/wp-content/uploads/2022/01/611A1265-1024x683.jpg"
          leftBtnText="Order Now"
          leftBtnLink="/order/FRR"
        />
      </div>

      <div className="snap-center">
        <Section
          title="Accessories"
          description=""
          backgroundImg="https://isuzu-intl.com/wp-content/uploads/2024/06/Isuzu-Trucks-Banner.jpg"
          leftBtnText="Shop Now"
          leftBtnLink="/shop"
        />
      </div>
    </>
  );
}
