const Footer = () => {
  return (
    <footer className="bg-[#00152D] py-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-y-2 lg:gap-y-0 lg:flex-row lg:justify-between text-blue-600">
        <p className=" text-sm">
          <span className="font-bold">
            &copy; {new Date().getFullYear()} All rights reserved.
          </span>
          Any Technology Pte Ltd.
        </p>
        <p>Privacy Policy</p>
      </div>
    </footer>
  );
};

export default Footer;
