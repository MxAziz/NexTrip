
const about = () => {
    return (
      <div>
        <div className="relative w-full h-screen overflow-hidden">
          {/* ব্যাকগ্রাউন্ড ভিডিও */}
          <video
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
            autoPlay
            muted
            loop
            playsInline
          >
            <source src="https://v1.pinimg.com/videos/mc/expMp4/b2/ec/1f/b2ec1f2c0e3436e2091a75553c01dfe2_t1.mp4" type="video/mp4" />
            আপনার ব্রাউজার ভিডিও সাপোর্ট করে না।
          </video>

          {/* কনটেন্ট */}
          <div className="flex flex-col items-center justify-center h-full text-white text-center">
            <h1 className="text-5xl font-bold drop-shadow-lg">
              Welcome to My Website
            </h1>
            <p className="mt-4 text-lg drop-shadow-md">
              This is a background video without controls.
            </p>
          </div>
        </div>
      </div>
    );
};

export default about;