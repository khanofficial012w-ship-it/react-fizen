import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-base-200 text-base-content">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="space-y-4 lg:col-span-2">
            <h2 className="text-2xl font-bold">Finanza</h2>
            <p className="text-sm text-gray-500 max-w-sm">
              Smart financial management platform designed to help you control,
              track, and grow your money effortlessly.
            </p>

            {/* Newsletter */}
            <div className="pt-4">
              <h6 className="font-semibold mb-2">
                Subscribe to our newsletter
              </h6>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
                <button className="btn btn-primary px-6">Subscribe</button>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h6 className="footer-title">Services</h6>
            <ul className="space-y-2">
              <li>
                <a className="link link-hover">Budget Planning</a>
              </li>
              <li>
                <a className="link link-hover">Investment Tracking</a>
              </li>
              <li>
                <a className="link link-hover">Expense Reports</a>
              </li>
              <li>
                <a className="link link-hover">Analytics</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h6 className="footer-title">Company</h6>
            <ul className="space-y-2">
              <li>
                <a className="link link-hover">About Us</a>
              </li>
              <li>
                <a className="link link-hover">Careers</a>
              </li>
              <li>
                <a className="link link-hover">Blog</a>
              </li>
              <li>
                <a className="link link-hover">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="footer-title">Legal</h6>
            <ul className="space-y-2">
              <li>
                <a className="link link-hover">Terms of Service</a>
              </li>
              <li>
                <a className="link link-hover">Privacy Policy</a>
              </li>
              <li>
                <a className="link link-hover">Cookie Policy</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Finanza. All rights reserved.</p>
          <div className="flex gap-6">
            <a className="link link-hover">Twitter</a>
            <a className="link link-hover">LinkedIn</a>
            <a className="link link-hover">Facebook</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
