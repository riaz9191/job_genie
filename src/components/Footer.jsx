import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="bg-black text-white pt-10 pb-5">
        <div className="my-container flex gap-4 ">
          <div className="pl-20 pr-10 ">
            <h1 className="font-bold text-3xl">JobGenie</h1>
            <p className="text-gray-500 mt-3">
              There are many variations of passages <br /> of Lorem Ipsum , but
              the majority have <br /> suffered alteration in some form.
              <div className="flex gap-4 mt-4 ">
                <p>
                  <img
                    className="w-10"
                    src="https://i.ibb.co/9pXtKB1/facebook.png"
                    alt=""
                  />
                </p>
                <p>
                  <img
                    className="w-10"
                    src="https://i.ibb.co/Tqw7th9/instagram.png"
                    alt=""
                  />
                </p>
                <p>
                  <img
                    className="w-10"
                    src="https://i.ibb.co/k19WXcp/twitter.png"
                    alt=""
                  />
                </p>
              </div>
            </p>
          </div>
          <div  className=" pr-10">
            <h1 className="font-bold text-xl">Company</h1>
            <p className="text-gray-500 mt-3">About Us</p>
            <p className="text-gray-500 mt-3">Work</p>
            <p className="text-gray-500 mt-3">Latest News</p>
            <p className="text-gray-500 mt-3">Careers</p>
          </div>
          <div className=" pr-10">
            <h1 className="font-bold text-xl">Product</h1>
            <p className="text-gray-500 mt-3">Prototype</p>
            <p className="text-gray-500 mt-3">Plans & Pricing</p>
            <p className="text-gray-500 mt-3">Customers</p>
            <p className="text-gray-500 mt-3">Integrations</p>
          </div>
          <div className=" pr-10">
            <h1 className="font-bold text-xl">Support</h1>
            <p className="text-gray-500 mt-3">Help Desk</p>
            <p className="text-gray-500 mt-3">Sales</p>
            <p className="text-gray-500 mt-3">Become a Partner</p>
            <p className="text-gray-500 mt-3">Developers</p>
          </div>
          <div className=" pr-10">
            <h1 className="font-bold text-xl">Contact</h1>
            <p className="text-gray-500 mt-3">524 Broadway , NYC</p>
            <p className="text-gray-500 mt-3">+1 777 - 978 - 5570</p>
          </div>
        </div>
          <div className="divide ml-20 mr-20 pt-0">
          <hr className="border-gray-700" />
            <div className="flex justify-between">
            <h1 className="text-gray-500 mt-7">@2023 JobGenie. All Rights Reserved</h1>
            <h1 className="text-gray-500 mt-7">Powered by JobGenie</h1>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;
