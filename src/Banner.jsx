

const Banner = () => {
    return (
        <div
  className="hero md:h-[500px]"
  style={{
    backgroundImage: "url(https://i.ibb.co.com/6WS7TRV/premium-photo-1664194584291-cfc411d05998-q-80-w-3270-auto-format-fit-crop-ixlib-rb-4-0.jpg)",
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold text-yellow-50">Welcome to our Page</h1>
      <p className="mb-5">
        You can buy best products in lowest price guranteed!
      </p>
      <div><button className="btn ring-red-100 ring-2 bg-purple-400">Get Started</button></div>
    </div>
  </div>
</div>
    );
};

export default Banner;