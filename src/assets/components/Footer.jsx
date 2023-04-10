import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900 p-12">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
        <div>
          <h3 className="text-white text-2xl mb-4 font-bold">
            Opportunity point
          </h3>
          <p className="text-slate-500">
            This is the only point for all of your opportunities to see. you can
            find all of your paths that you want. So make the best use of it.
          </p>
          <div className="flex gap-4 mt-2 cursor-pointer">
            <img src="/public/Icons/FB.png" alt="" />
            <img src="/public/Icons/Twitter.png" alt="" />
            <img src="/public/Icons/IG.png" alt="" />
          </div>
        </div>
        <div>
          <h4 className="text-white text-xl mb-4 font-semibold">Company</h4>
          <p className="text-slate-500 mt-4 cursor-pointer">About us</p>
          <p className="text-slate-500 mt-4 cursor-pointer">Work</p>
          <p className="text-slate-500 mt-4 cursor-pointer">Latest News</p>
          <p className="text-slate-500 mt-4 cursor-pointer">Careers</p>
        </div>
        <div>
          <h4 className="text-white text-xl mb-4 font-semibold">Product</h4>
          <p className="text-slate-500 mt-4 cursor-pointer">Prototype</p>
          <p className="text-slate-500 mt-4 cursor-pointer">Plans & Pricing</p>
          <p className="text-slate-500 mt-4 cursor-pointer">Customers</p>
          <p className="text-slate-500 mt-4 cursor-pointer">Integrations</p>
        </div>
        <div>
          <h4 className="text-white text-xl mb-4 font-semibold">Support</h4>
          <p className="text-slate-500 mt-4 cursor-pointer">Help Desk</p>
          <p className="text-slate-500 mt-4 cursor-pointer">Sales</p>
          <p className="text-slate-500 mt-4 cursor-pointer">Become a Partner</p>
          <p className="text-slate-500 mt-4 cursor-pointer">Developers</p>
        </div>
        <div>
          <h4 className="text-white text-xl mb-4 font-semibold">Contact</h4>
          <p className="text-slate-500 mt-4">524 Broadway, NYC</p>
          <p className="text-slate-500 mt-4">+1 777 - 978 - 5570</p>
        </div>
      </div>
      <hr className="mt-8" />
      <div className="flex justify-between text-slate-500 mt-4">
        <p>@2023 Opportunity Point. All Rights Reserved</p>
        <p>Powered by Opportunity Point</p>
      </div>
    </div>
  );
};

export default Footer;
