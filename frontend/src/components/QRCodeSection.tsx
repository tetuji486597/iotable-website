export function QRCodeSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Get the
                <span className="block bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  IoTable Mobile App
                </span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Monitor occupancy levels in real-time, receive instant
                notifications, and access detailed analytics right from your
                smartphone.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Real-time Dashboard
                  </h3>
                  <p className="text-gray-600">
                    View live occupancy data and trends for all your monitored
                    spaces in one place.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-5 5v-5zM3 3h12l4 4v9a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Smart Notifications
                  </h3>
                  <p className="text-gray-600">
                    Get alerts when spaces reach capacity limits or unusual
                    patterns are detected.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg
                    className="w-5 h-5 text-purple-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Detailed Analytics
                  </h3>
                  <p className="text-gray-600">
                    Access comprehensive reports and insights to optimize your
                    space utilization.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </a>

              <a
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors"
              >
                <svg
                  className="w-6 h-6 mr-3"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs">Get it on</div>
                  <div className="text-sm font-semibold">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* QR Code */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white p-8 rounded-3xl shadow-2xl max-w-sm">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Scan to Download
                </h3>
                <p className="text-gray-600">
                  Quick access to the IoTable mobile app
                </p>
              </div>

              {/* Template QR Code - Replace with actual QR code when app is ready */}
              <div className="bg-white p-4 rounded-2xl border-2 border-gray-100">
                <svg
                  className="w-64 h-64 mx-auto"
                  viewBox="0 0 200 200"
                  fill="none"
                >
                  {/* QR Code Pattern - This is a template pattern */}
                  <rect width="200" height="200" fill="white" />

                  {/* Corner markers */}
                  <rect x="0" y="0" width="60" height="60" fill="black" />
                  <rect x="10" y="10" width="40" height="40" fill="white" />
                  <rect x="20" y="20" width="20" height="20" fill="black" />

                  <rect x="140" y="0" width="60" height="60" fill="black" />
                  <rect x="150" y="10" width="40" height="40" fill="white" />
                  <rect x="160" y="20" width="20" height="20" fill="black" />

                  <rect x="0" y="140" width="60" height="60" fill="black" />
                  <rect x="10" y="150" width="40" height="40" fill="white" />
                  <rect x="20" y="160" width="20" height="20" fill="black" />

                  {/* Timing patterns */}
                  <g fill="black">
                    <rect x="80" y="0" width="10" height="10" />
                    <rect x="100" y="0" width="10" height="10" />
                    <rect x="120" y="0" width="10" height="10" />

                    <rect x="0" y="80" width="10" height="10" />
                    <rect x="0" y="100" width="10" height="10" />
                    <rect x="0" y="120" width="10" height="10" />
                  </g>

                  {/* Data modules - simplified pattern */}
                  <g fill="black">
                    <rect x="70" y="70" width="10" height="10" />
                    <rect x="90" y="70" width="10" height="10" />
                    <rect x="110" y="70" width="10" height="10" />
                    <rect x="130" y="70" width="10" height="10" />

                    <rect x="70" y="90" width="10" height="10" />
                    <rect x="110" y="90" width="10" height="10" />
                    <rect x="130" y="90" width="10" height="10" />

                    <rect x="70" y="110" width="10" height="10" />
                    <rect x="90" y="110" width="10" height="10" />
                    <rect x="130" y="110" width="10" height="10" />

                    <rect x="70" y="130" width="10" height="10" />
                    <rect x="110" y="130" width="10" height="10" />
                    <rect x="130" y="130" width="10" height="10" />

                    <rect x="70" y="150" width="10" height="10" />
                    <rect x="90" y="150" width="10" height="10" />
                    <rect x="110" y="150" width="10" height="10" />
                    <rect x="130" y="150" width="10" height="10" />

                    <rect x="70" y="170" width="10" height="10" />
                    <rect x="110" y="170" width="10" height="10" />
                    <rect x="130" y="170" width="10" height="10" />

                    <rect x="70" y="190" width="10" height="10" />
                    <rect x="90" y="190" width="10" height="10" />
                    <rect x="110" y="190" width="10" height="10" />
                    <rect x="130" y="190" width="10" height="10" />
                  </g>

                  {/* IoTable Logo in center */}
                  <rect
                    x="85"
                    y="85"
                    width="30"
                    height="30"
                    fill="white"
                    stroke="black"
                    strokeWidth="2"
                  />
                  <text
                    x="100"
                    y="95"
                    textAnchor="middle"
                    fontSize="8"
                    fill="black"
                    fontWeight="bold"
                  >
                    IO
                  </text>
                  <text
                    x="100"
                    y="105"
                    textAnchor="middle"
                    fontSize="6"
                    fill="black"
                  >
                    TABLE
                  </text>
                </svg>
              </div>

              <div className="text-center mt-6">
                <p className="text-sm text-gray-500">
                  Point your camera at the QR code to download the app
                </p>
                <div className="flex items-center justify-center space-x-4 mt-4 text-xs text-gray-400">
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                    </svg>
                    iOS
                  </span>
                  <span className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                    </svg>
                    Android
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
