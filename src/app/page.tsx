import Section from "../components/Section";

export default function Home() {
  return (
    <>
      <div className="snap-center">
        <Section
          title="Model 3"
          description="Leasing starting at $399/mo"
          backgroundImg="https://fuzionisuzu.co.za/wp-content/uploads/site/vehicles/header-1.webp"
          leftBtnText="Order Now"
          leftBtnLink="/order/model-3"
          rightBtnText="Demo Drive"
          rightBtnLink="/demo-drive/model-3"
        />
      </div>

      <div className="snap-center">
        <Section
          title="Model Y"
          description="Lease starting at $499/mo"
          backgroundImg="https://i0.wp.com/www.isuzu-uae.ae/wp-content/uploads/2021/09/f1.jpg?fit=1500%2C1000&ssl=1"
          leftBtnText="Order Now"
          leftBtnLink="/order/model-y"
          rightBtnText="Demo Drive"
          rightBtnLink="/demo-drive/model-y"
        />
      </div>

      <div className="snap-center">
        <Section
          title="Model S"
          description="From $74,990*"
          backgroundImg="https://fuzionisuzu.co.za/wp-content/uploads/site/images/X-RIDER-scaled.webp"
          leftBtnText="Order Now"
          leftBtnLink="/order/model-s"
          rightBtnText="Demo Drive"
          rightBtnLink="/demo-drive/model-s"
        />
      </div>

      <div className="snap-center">
        <Section
          title="Model X"
          description="From $79,990*"
          backgroundImg="https://media.sandhills.com/img.axd?id=8047612581&wid=&rwl=False&p=&ext=&w=0&h=0&t=&lp=10&c=True&wt=False&sz=Max&rt=0&checksum=q9PmoSvHofdQo6DAeHNubU1%2bzx2OYyPD"
          leftBtnText="Order Now"
          leftBtnLink="/order/model-x"
          rightBtnText="Demo Drive"
          rightBtnLink="/demo-drive/model-x"
        />
      </div>

      <div className="snap-center">
        <Section
          title="Solar Panels"
          description="Lowest Cost Solar Panels in America"
          backgroundImg="https://truckcdn.cardekho.com/in/isuzu/d-max-s-cab/isuzu-d-max-s-cab-77527.jpg"
          leftBtnText="Order Now"
          leftBtnLink="/order/solar-panels"
          rightBtnText="Learn More"
          rightBtnLink="/learn/solar-panels"
        />
      </div>

      <div className="snap-center">
        <Section
          title="Solar Roof"
          description="Produce Clean Energy From Your Roof"
          backgroundImg="https://truckcdn.cardekho.com/in/isuzu/hi-lander/isuzu-hi-lander.jpg"
          leftBtnText="Order Now"
          leftBtnLink="/order/solar-roof"
          rightBtnText="Learn More"
          rightBtnLink="/learn/solar-roof"
        />
      </div>

      <div className="snap-center">
        <Section
          title="Accessories"
          description=""
          backgroundImg="https://isuzu-vietnam.com/wp-content/uploads/2022/01/Line-up-2-1-1600x1067.jpg"
          leftBtnText="Shop Now"
          leftBtnLink="/shop"
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
