import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class HomeScreen extends Component {
  render() {
    return (
        <div className="wrapper">
            <div className="header">
                <div className="meta">
                    <h1>
                        <Link to="./">built by meh.</Link>
                    </h1>
                    <p>a creative designer, developer based in london.</p>
                    <p className="sub">i am mehedi hassan. i craft beautiful, robust, and effortless web-based experiences.</p>
                </div>
            
                <div className="art">
                    <svg id="face" xmlns="http://www.w3.org/2000/svg" width="256" height="333"><path d="M 155.427 1.394 C 150.732 2.823 144.405 9.458 138.18 19.667 C 135.323 24.465 131.547 29.671 129.914 31.304 C 125.118 35.796 121.954 34.673 109.402 23.648 C 97.768 13.44 89.502 8.846 85.012 9.969 C 77.154 11.908 74.603 16.808 67.969 42.023 C 62.765 62.235 60.724 66.115 55.825 65.196 C 50.008 63.971 41.844 58.05 28.578 45.494 C 21.332 38.552 14.188 32.631 12.76 32.325 C 9.392 31.406 6.433 34.265 5.208 39.675 C 4.698 41.819 4.188 51.721 4.188 61.725 C 4.188 81.631 5.718 92.758 9.596 100.312 L 11.943 104.804 L 8.167 114.094 C 2.351 128.181 0.616 137.879 0.718 156.458 C 0.718 170.75 1.024 173.098 3.473 180.448 C 13.372 210.358 46.947 238.635 83.277 247.823 C 105.83 253.54 132.976 253.54 152.569 247.823 C 199.411 234.144 228.801 189.431 226.352 135.531 C 225.025 106.029 215.229 83.367 195.533 64.073 C 180.735 49.475 164.101 42.431 142.16 41.41 C 133.078 40.9 129.302 41.206 124.097 42.635 C 115.117 44.983 114.913 46.106 123.689 44.575 C 139.099 42.023 160.223 47.127 176.143 57.233 C 194.104 68.667 209.412 91.023 215.535 114.604 C 221.964 139.615 217.474 173.098 204.513 196.271 C 197.982 207.806 182.572 223.425 171.347 229.754 C 154.712 239.146 138.078 242.821 116.443 241.8 C 81.236 240.269 55.723 229.04 33.068 205.05 C 19.801 191.065 14.393 178.202 14.393 160.235 C 14.393 137.369 23.169 114.808 37.762 100.312 C 50.008 88.165 63.275 83.162 85.828 82.244 C 97.87 81.733 100.625 81.937 107.667 83.877 C 112.055 85.102 115.933 85.919 116.137 85.715 C 116.852 84.898 106.646 77.956 101.544 75.608 C 93.38 72.035 86.951 70.708 75.317 69.994 C 65.418 69.483 64.5 69.177 65.826 67.748 C 68.786 64.379 70.623 59.173 74.5 43.146 C 79.093 24.567 82.052 17.319 85.522 16.808 C 88.89 16.298 95.217 19.973 103.891 27.629 C 115.219 37.531 117.26 38.96 121.75 40.185 C 125.118 41.104 126.444 40.9 130.22 39.063 C 135.221 36.613 137.16 34.265 145.426 20.994 C 152.161 9.969 154.508 7.927 161.754 6.396 C 171.041 4.456 175.735 4.865 181.756 8.029 C 184.817 9.663 187.879 11.194 188.389 11.398 C 190.634 12.215 184.103 6.09 179.817 3.231 C 175.735 0.577 174.51 0.271 167.061 0.373 C 162.468 0.373 157.264 0.883 155.427 1.394 Z M 19.495 46.821 C 28.578 56.008 40.211 65.298 46.743 68.462 C 51.947 71.015 53.58 72.75 50.825 72.75 C 50.11 72.75 46.334 74.281 42.457 76.119 C 33.884 80.202 24.496 87.858 18.985 95.106 C 16.025 98.985 14.801 99.904 14.188 98.883 C 12.045 95.004 10.106 40.083 12.147 40.083 C 12.556 40.083 15.923 43.146 19.495 46.821 Z" fill="rgb(255,255,255)"></path><path d="M 166.448 123.281 C 163.795 126.548 167.775 131.55 171.347 129.304 C 174.816 127.058 173.592 121.75 169.51 121.75 C 168.489 121.75 167.163 122.465 166.448 123.281 Z" fill="rgb(255,255,255)"></path><path d="M 62.765 152.477 C 61.438 154.008 61.132 154.927 61.948 156.152 C 63.989 159.419 66.132 160.031 68.377 158.092 C 71.031 155.744 71.031 154.212 68.684 152.069 C 66.234 149.823 65.112 149.925 62.765 152.477 Z M 155.631 185.348 C 146.14 195.148 135.731 203.315 127.873 207.194 C 122.771 209.644 121.852 209.848 112.055 209.235 C 102.564 208.623 101.85 208.725 103.687 210.154 C 112.974 217.3 124.812 219.137 134.098 214.952 C 143.487 210.562 155.733 196.373 161.856 182.592 C 163.285 179.427 164.305 176.875 164.101 176.875 C 163.999 176.875 160.121 180.754 155.631 185.348 Z M 216.045 215.565 C 216.555 215.973 220.433 218.933 224.617 221.996 C 236.761 230.775 241.558 237.512 245.64 250.885 C 247.17 255.683 247.579 260.277 247.477 272.323 C 247.375 291.719 245.64 298.762 235.945 318.26 C 231.965 326.019 228.903 332.654 229.107 332.756 C 229.209 332.96 232.373 328.979 236.047 323.977 C 250.232 304.99 254.314 294.373 255.028 274.263 C 255.947 247.619 250.232 232.817 235.026 223.119 C 228.495 218.933 212.779 212.706 216.045 215.565 Z M 55.009 243.433 C 49.396 250.783 46.13 261.604 46.028 272.323 C 46.028 291.004 60.315 314.177 76.95 322.344 C 81.338 324.487 86.542 326.121 89.91 326.427 L 95.523 327.04 L 89.91 324.794 C 76.542 319.485 67.867 311.012 59.907 295.19 C 53.988 283.45 52.458 274.977 54.09 262.217 C 54.805 257.112 56.233 250.885 57.458 248.333 L 59.499 243.74 L 60.826 247.823 L 62.152 251.906 L 62.254 246.7 C 62.356 242.719 61.948 241.29 60.724 240.779 C 58.07 239.758 57.662 239.962 55.009 243.433 Z M 165.53 258.848 C 156.345 261.196 152.569 262.727 151.549 264.156 C 149.916 266.81 151.141 279.265 154.712 294.067 C 156.141 299.885 157.264 307.337 157.264 310.604 C 157.264 319.077 161.244 322.65 164.815 317.546 C 166.856 314.688 166.856 310.094 164.917 300.906 C 164.101 297.027 163.693 293.556 163.999 293.352 C 164.305 293.046 167.163 292.229 170.428 291.617 C 176.551 290.29 189.716 285.492 191.451 283.858 C 194.206 281.306 174.102 285.696 165.326 289.575 C 163.897 290.188 163.489 289.269 162.774 282.837 L 162.06 275.385 L 160.835 279.469 L 159.611 283.552 L 158.182 275.385 L 156.651 267.219 L 168.489 261.4 C 174.918 258.235 179.817 255.683 179.205 255.683 C 178.694 255.683 172.469 257.112 165.53 258.848 Z M 131.343 276.508 C 130.118 286.104 130.73 301.927 132.874 313.463 C 134.506 322.242 135.323 324.692 136.343 323.875 C 136.956 323.365 137.772 323.058 137.976 323.262 C 138.18 323.569 138.384 320.915 138.384 317.444 C 138.384 313.973 138.997 304.479 139.711 296.313 C 140.425 287.84 140.629 279.571 140.119 276.917 L 139.303 272.323 L 137.466 278.958 L 135.527 285.594 L 134.2 279.06 C 133.486 275.488 132.669 272.425 132.465 272.119 C 132.261 271.915 131.751 273.854 131.343 276.508 Z" fill="rgb(255,255,255)"></path><path d="M 178.082 302.131 C 172.571 307.337 165.836 316.525 166.856 317.444 C 167.673 318.26 180.837 304.581 183.083 300.6 C 185.634 296.006 184.001 296.517 178.082 302.131 Z" fill="rgb(255,255,255)"></path></svg>
                    <svg id="blobs" xmlns="http://www.w3.org/2000/svg" width="135" height="145"><path d="M 105.736 0.203 C 99.971 0.932 94.594 3.614 90.716 7.651 L 89.294 9.136 L 91.569 7.391 C 94.258 5.333 98.291 3.302 101.315 2.495 C 103.15 2 104.133 1.896 107.39 1.896 C 110.776 1.922 111.578 2 113.775 2.599 C 119.643 4.24 124.736 7.964 128.898 13.667 C 130.785 16.22 131.328 17.34 132.207 20.387 C 133.577 25.075 133.293 31.091 131.483 35.57 C 128.795 42.29 123.133 47.733 116.567 49.921 C 114.551 50.572 111.164 51.249 111.035 51.015 C 111.009 50.936 110.932 48.332 110.906 45.259 C 110.854 39.451 110.544 33.93 110.079 30.804 C 109.717 28.408 108.786 24.345 108.631 24.502 C 108.372 24.788 107.545 28.591 107.132 31.247 C 106.718 34.112 106.227 43.201 106.227 48.176 C 106.227 50.989 106.227 50.989 105.606 50.989 C 104.753 50.989 102.065 50.337 100.281 49.738 C 93.094 47.238 87.175 40.805 84.667 32.81 C 83.866 30.257 83.142 26.221 83.4 25.96 C 83.685 25.7 103.357 24.424 107.106 24.424 C 107.674 24.424 108.062 24.372 108.01 24.319 C 107.933 24.241 105.451 24.059 102.478 23.929 C 95.473 23.564 84.538 22.861 83.814 22.705 C 83.426 22.627 83.219 22.366 83.168 21.871 L 83.064 21.168 L 82.754 21.897 L 82.444 22.627 L 79.29 22.418 C 77.532 22.314 70.889 22.21 64.478 22.236 C 52.198 22.262 49.277 22.444 43.823 23.642 C 42.53 23.929 41.005 24.163 40.41 24.163 L 39.351 24.163 L 39.17 27.731 C 39.092 29.711 38.885 35.961 38.73 41.613 C 38.549 47.264 38.42 51.926 38.394 51.926 C 38.394 51.952 35.809 51.848 32.681 51.718 C 18.67 51.093 2.048 52.161 0.755 53.723 C 0.497 54.036 0.523 54.478 0.859 55.807 C 1.195 57.161 1.272 58.88 1.272 64.714 C 1.246 74.402 0.859 89.117 0.367 97.738 C -0.253 108.937 -0.098 115.552 0.91 121.568 C 1.143 122.922 1.35 124.068 1.376 124.094 C 1.376 124.12 5.719 124.302 10.966 124.537 C 16.24 124.771 24.9 125.24 30.225 125.605 C 35.55 125.969 43.409 126.386 47.675 126.568 C 51.94 126.725 55.456 126.881 55.481 126.881 C 55.507 126.907 55.662 128.443 55.818 130.293 C 56.231 135.371 56.852 139.33 57.55 141.101 C 57.911 142.091 59.049 136.048 59.463 130.683 C 59.824 126.308 59.669 126.516 62.28 126.516 C 63.702 126.516 67.683 125.995 70.242 125.448 C 72.078 125.084 72.233 124.693 71.69 122.115 C 71.276 120.135 71.276 119.797 71.948 111.515 C 72.31 106.801 72.75 101.384 72.879 99.456 C 73.008 97.529 73.163 95.941 73.189 95.914 C 73.241 95.862 76.059 95.967 79.471 96.097 C 90.38 96.514 100.72 95.914 107.442 94.482 L 108.734 94.196 L 109.019 90.107 C 109.2 87.867 109.458 83.465 109.639 80.366 L 109.923 74.715 L 110.983 74.584 C 111.578 74.506 115.249 74.194 119.152 73.907 C 123.056 73.621 126.287 73.334 126.313 73.282 C 126.442 73.152 124.09 72.918 116.722 72.345 C 113.181 72.058 110.234 71.772 110.156 71.694 C 110.079 71.615 110.156 69.167 110.311 66.276 C 110.492 63.385 110.699 59.531 110.802 57.708 L 110.957 54.426 L 112.405 54.244 C 114.215 54.036 117.834 52.838 119.979 51.744 C 124.245 49.582 128.795 45.363 131.147 41.404 C 133.861 36.795 134.999 32.575 134.999 26.898 C 135.025 22.184 134.663 20.465 132.801 15.725 C 130.759 10.62 129.053 8.25 125.279 5.385 C 119.85 1.244 112.664 -0.657 105.736 0.203 Z M 44.779 25.049 C 46.511 25.413 49.381 25.856 51.164 26.038 C 54.784 26.403 72.362 26.507 78.049 26.169 L 81.539 25.986 L 81.565 29.554 C 81.591 32.315 81.72 33.617 82.134 35.154 C 84.771 44.998 93.792 52.89 104.107 54.374 C 105.942 54.661 106.253 54.765 106.33 55.26 C 106.382 55.546 106.563 58.619 106.744 62.057 C 106.899 65.495 107.106 69.063 107.183 69.975 L 107.338 71.641 L 104.908 71.459 C 98.084 70.964 91.724 70.782 82.832 70.782 L 73.008 70.808 L 72.802 67.865 C 72.414 62.187 70.992 53.879 70.527 54.661 C 69.932 55.755 68.821 63.203 68.355 69.245 L 68.2 71.225 L 65.693 71.537 C 62.952 71.85 57.86 72.839 57.601 73.1 C 57.498 73.178 57.188 77.189 56.877 81.981 C 56.567 86.773 56.257 91.253 56.179 91.904 L 56.05 93.076 L 48.502 93.414 C 44.366 93.597 40.746 93.857 40.462 93.961 C 40.049 94.143 40.255 94.196 41.212 94.222 C 44.779 94.326 55.818 94.899 55.921 95.003 C 55.973 95.081 55.921 96.774 55.818 98.779 C 55.688 100.785 55.585 106.619 55.559 111.723 L 55.559 121.047 L 54.861 121.047 C 51.914 121.073 39.17 121.698 28.933 122.349 C 17.015 123.104 6.029 123.651 3.056 123.651 L 1.608 123.651 L 1.944 121.646 C 2.901 116.125 3.03 105.368 2.306 94.091 C 2.177 92.086 1.944 83.023 1.789 73.933 C 1.505 55.494 1.505 55.234 2.927 55.546 C 8.562 56.692 17.946 57.161 29.217 56.796 C 34.103 56.64 38.161 56.562 38.213 56.614 C 38.265 56.666 38.161 59.14 37.955 62.109 C 37.748 65.104 37.593 71.329 37.593 75.991 C 37.593 84.846 37.851 87.945 38.989 92.268 L 39.454 94.091 L 39.997 91.747 C 41.393 85.809 41.755 76.668 41.057 65.183 C 40.85 62.031 40.695 58.75 40.695 57.89 L 40.695 56.328 L 41.987 56.249 C 45.813 56.041 69.906 54.322 69.984 54.27 C 70.113 54.114 67.14 53.879 54.913 53.072 C 39.945 52.082 40.591 52.161 40.462 51.431 C 40.385 51.119 40.204 45.65 40.049 39.269 C 39.893 32.888 39.712 26.95 39.661 26.038 L 39.506 24.424 L 40.566 24.424 C 41.134 24.424 43.047 24.71 44.779 25.049 Z M 60.755 74.142 C 62.099 74.428 64.297 74.793 65.641 74.949 L 68.097 75.262 L 68.019 83.752 C 67.967 88.44 67.89 92.294 67.864 92.346 C 67.761 92.451 59.385 92.945 59.282 92.841 C 59.204 92.789 57.886 74.741 57.886 73.855 C 57.886 73.569 57.989 73.569 60.755 74.142 Z M 107.364 75.366 C 107.442 75.6 107.519 76.512 107.519 77.397 C 107.519 79.298 108.217 90.654 108.45 92.503 C 108.605 93.727 108.605 93.779 108.01 93.623 C 106.253 93.18 102.272 92.607 98.471 92.242 C 95.163 91.904 91.88 91.852 83.711 91.93 L 73.241 92.008 L 73.189 83.804 L 73.163 75.6 L 85.624 75.548 C 92.474 75.548 99.48 75.418 101.186 75.262 C 106.175 74.871 107.183 74.897 107.364 75.366 Z M 64.633 95.42 L 68.148 95.576 L 68.329 98.337 C 68.433 99.873 68.795 104.822 69.157 109.327 C 69.906 118.469 69.984 120.604 69.725 121.594 L 69.519 122.271 L 67.45 121.906 C 66.313 121.724 64.142 121.464 62.642 121.36 L 59.902 121.177 L 59.824 112.452 C 59.773 107.66 59.643 101.748 59.566 99.352 L 59.359 94.977 L 60.238 95.107 C 60.729 95.185 62.694 95.315 64.633 95.42 Z M 126.158 76.017 C 124.503 84.117 123.728 97.685 124.296 109.327 C 124.865 120.891 125.615 132.897 126.003 136.153 C 126.209 137.95 126.442 140.085 126.546 140.945 C 126.752 142.716 127.011 142.429 127.269 140.189 C 127.967 133.939 128.278 130.188 128.846 120.005 C 129.777 103.233 129.699 91.305 128.562 82.241 C 128.148 78.908 127.269 74.324 126.933 73.673 C 126.804 73.465 126.494 74.428 126.158 76.017 Z M 88.26 141.023 C 87.123 141.075 79.962 141.465 72.362 141.908 C 64.762 142.325 58.351 142.637 58.092 142.585 C 57.808 142.507 57.627 142.585 57.627 142.82 C 57.627 143.028 57.834 143.184 58.092 143.184 C 58.325 143.184 64.297 143.549 71.328 143.992 C 86.451 144.929 104.521 145.268 112.379 144.773 C 119.359 144.33 126.675 143.341 126.209 142.924 C 125.692 142.403 118.377 141.492 111.785 141.101 C 107.829 140.866 93.586 140.814 88.26 141.023 Z" transform="rotate(-26 67.5 72.5)" fill="rgb(255,255,255)"></path></svg>
                    <svg id="phone" xmlns="http://www.w3.org/2000/svg" width="89" height="136"><path d="M 28.461 0.645 C 28.088 1.203 22.253 20.596 18.777 32.74 C 11.39 58.576 5.244 88.564 4.126 104.302 C 3.877 108.205 3.07 112.108 1.828 115.95 C 0.835 119.11 0.152 122.084 0.276 122.579 C 0.959 124.252 22.619 130.509 35.839 132.8 C 43.41 134.101 59.733 135.587 61.036 135.091 C 62.96 134.41 45.831 128.091 33.791 125.056 C 27.46 123.445 9.276 120.41 6.173 120.41 C 4.559 120.411 4.435 120.225 4.497 117.746 C 4.559 113.719 5.366 110.188 8.16 102.443 C 14.678 84.289 20.637 56.655 26.163 18.551 C 27.529 9.009 28.771 1.141 28.895 0.955 C 29.019 0.831 31.067 1.574 33.426 2.627 C 46.273 8.265 63.154 11.795 81.711 12.909 L 87.917 13.219 L 85.124 11.918 C 76.498 7.953 58.251 2.812 47.204 1.201 C 40.315 0.149 28.895 -0.161 28.461 0.645 Z" fill="rgb(255,255,255)"></path><path d="M 0.835 0.836 C 0.349 1.323 0.001 2.644 0 3.826 C -0.001 5.007 0.345 6.328 0.831 6.814 C 1.316 7.3 2.634 7.647 3.814 7.646 C 4.994 7.645 6.312 7.296 6.799 6.809 C 7.285 6.323 7.633 5.002 7.634 3.82 C 7.635 2.638 7.289 1.318 6.803 0.832 C 6.318 0.346 4.999 -0.001 3.82 0 C 2.64 0.001 1.321 0.349 0.835 0.836 Z" transform="translate(31.139 105.18) rotate(-24 3.817 3.823)" fill="rgb(255, 255, 255)"></path><path d="M 85.558 19.665 C 82.579 27.471 79.351 38.066 76.371 50.086 C 73.577 61.363 65.755 100.211 64.389 109.566 C 63.023 118.798 61.408 133.482 61.719 133.792 C 61.843 133.978 62.898 131.623 63.953 128.649 C 70.782 109.938 82.701 60.619 86.364 35.835 C 87.668 27.037 88.662 13.84 88.103 13.84 C 87.917 13.84 86.737 16.443 85.558 19.665 Z" fill="rgb(255, 255, 255)"></path></svg>
                    <svg id="code" xmlns="http://www.w3.org/2000/svg" width="65.722" height="58.899"><g><path d="M 25.505 2.474 C 24.382 7.884 25.607 19.42 27.954 25.545 C 29.995 30.853 36.526 40.653 42.751 47.493 L 46.425 51.576 L 43.772 45.451 C 42.343 42.082 38.976 34.528 36.424 28.607 C 33.873 22.686 30.505 13.499 28.975 8.191 C 26.321 -1.405 26.219 -1.507 25.505 2.474 Z" fill="rgb(255, 255, 255)"></path><path d="M 49.487 2.372 C 42.956 3.189 42.139 3.495 44.18 4.414 L 46.527 5.536 L 43.67 6.761 C 41.119 7.884 41.833 7.986 50.303 8.089 C 58.875 8.191 59.794 8.395 59.284 9.926 C 57.141 16.97 52.446 45.451 52.65 49.841 C 52.854 55.455 64.488 21.564 65.407 12.376 C 66.019 6.761 65.917 6.149 63.468 3.699 C 60.61 0.841 60.712 0.841 49.487 2.372 Z" fill="rgb(255, 255, 255)"></path><path d="M 9.483 28.607 C 2.748 44.328 -0.62 53.822 0.094 55.455 C 1.319 58.722 6.217 59.641 14.79 58.314 C 21.525 57.293 35.2 53.516 35.2 52.699 C 35.2 52.495 29.281 52.495 22.035 52.495 C 14.79 52.597 8.564 52.291 8.258 51.984 C 7.85 51.678 8.258 49.636 9.075 47.391 C 10.912 42.184 14.075 24.32 13.565 21.87 C 13.361 20.645 11.83 23.197 9.483 28.607 Z" fill="rgb(255, 255, 255)"></path></g></svg>
                </div>
            </div>
            
            <div className="links">
                <div className="container">
                    <Link to="./projects" className="card work">
                        <h1>My Work</h1>

                        <div className="art-container">
                            <svg id="device" xmlns="http://www.w3.org/2000/svg" width="280.395" height="195.538"><path d="M 104.624 113.245 C 102.872 115.403 105.5 118.708 107.859 117.224 C 110.15 115.741 109.341 112.233 106.646 112.233 C 105.972 112.233 105.096 112.705 104.624 113.245 Z M 27.538 141.168 C 27.269 141.506 27.404 141.978 27.741 142.18 C 28.077 142.45 28.549 142.315 28.751 141.978 C 29.021 141.641 28.886 141.168 28.549 140.966 C 28.212 140.696 27.741 140.831 27.538 141.168 Z M 116.753 154.186 C 106.376 164.64 100.649 171.453 94.854 180.018 C 92.361 183.728 88.789 188.719 86.97 191.012 C 85.151 193.373 83.736 195.397 83.87 195.532 C 84.005 195.666 86.97 193.576 90.474 190.878 C 98.493 184.672 111.295 171.52 115.945 164.64 C 119.651 159.312 125.917 146.834 125.311 146.16 C 125.109 145.957 121.268 149.599 116.753 154.186 Z M 276.383 154.321 C 269.241 159.919 263.85 165.45 258.864 172.329 C 256.101 176.174 251.519 182.379 248.621 186.224 C 242.759 194.115 243.163 194.25 252.597 187.235 C 259.403 182.177 265.737 175.297 271.262 167.001 C 275.372 160.863 280.898 151.353 280.359 151.353 C 280.291 151.353 278.472 152.702 276.383 154.321 Z M 30.503 0.27 C 23.698 1.012 22.485 2.63 23.698 9.443 C 24.102 11.601 24.439 20.234 24.439 28.733 L 24.439 44.111 L 13.455 44.111 C 5.706 44.111 2.135 44.381 1.326 44.92 C 0.316 45.73 0.181 49.439 0.046 87.278 C -0.089 119.855 0.046 130.444 0.787 136.515 C 1.933 145.755 2.337 144.946 3.55 131.119 C 4.157 124.441 4.291 112.638 4.089 91.459 C 3.887 74.867 3.887 58.815 4.089 55.712 L 4.426 50.181 L 23.563 50.181 L 23.563 75.609 C 23.495 96.046 23.765 102.993 24.641 110.412 C 26.258 122.958 26.73 123.969 27.741 117.292 C 29.493 105.623 29.829 97.462 29.762 74.125 L 29.695 49.844 L 43.441 49.642 L 57.254 49.507 L 57.659 66.166 C 57.928 75.407 58.13 93.55 58.13 106.568 L 58.13 130.242 L 45.193 130.714 C 27.943 131.389 24.641 132.13 36.231 132.738 C 41.082 132.94 47.821 133.345 51.325 133.547 L 57.659 133.952 L 57.322 139.954 C 57.119 143.327 56.783 146.227 56.513 146.429 C 56.311 146.632 50.449 147.104 43.508 147.374 C 30.571 147.846 8.739 149.33 8.402 149.667 C 7.728 150.274 30.099 151.825 48.09 152.432 L 61.365 152.904 L 62.51 151.083 C 63.588 149.465 63.656 148.318 63.251 141.506 L 62.78 133.682 L 78.48 134.086 C 87.105 134.289 104.355 134.693 116.753 134.896 C 129.152 135.098 153.746 135.84 171.333 136.447 C 188.92 137.054 204.553 137.391 206.035 137.122 C 210.415 136.312 211.224 134.693 210.618 127.814 C 209.944 120.462 209.876 44.381 210.55 43.706 C 210.82 43.436 225.307 43.099 242.624 42.897 L 274.227 42.56 L 274.631 55.307 C 275.507 78.914 276.046 143.732 275.372 144.069 C 274.496 144.608 210.685 145.89 165.808 146.227 L 127.602 146.564 L 127.332 144.743 C 127.13 143.664 127.063 144.069 127.13 145.62 L 127.198 148.318 L 139.326 148.723 C 145.997 148.992 164.056 149.195 179.419 149.262 C 194.783 149.262 223.285 149.667 242.692 150.139 C 275.238 150.814 278.068 150.814 278.809 149.802 C 279.752 148.52 280.763 41.48 279.887 40.536 C 279.55 40.199 263.85 39.997 244.848 40.064 L 210.415 40.132 L 210.415 34.196 C 210.415 30.959 210.752 23.135 211.089 16.929 C 211.898 2.563 211.359 0.944 205.362 0.944 C 204.149 0.944 202.801 1.416 202.329 1.956 C 201.588 2.833 197.141 2.968 169.716 2.968 C 131.443 2.968 65.475 1.484 38.252 0.067 C 36.029 -0.067 32.525 -0 30.503 0.27 Z M 200.577 14.569 C 200.78 18.009 201.117 25.158 201.319 30.419 L 201.723 39.997 L 186.023 39.659 C 177.398 39.457 161.091 39.052 149.771 38.715 C 133.262 38.31 128.882 38.378 127.467 39.12 L 125.715 39.997 L 125.243 75.609 C 124.772 108.321 125.176 122.958 126.591 127.814 C 126.861 128.758 124.974 128.96 109.611 129.298 C 100.042 129.567 85.69 129.77 77.671 129.77 L 63.049 129.77 L 62.577 119.45 C 62.308 113.852 62.443 95.102 62.847 77.902 C 63.521 50.518 63.453 46.472 62.577 45.595 C 61.769 44.785 58.939 44.651 45.395 44.718 L 29.156 44.853 L 29.156 11.061 L 36.029 11.061 C 39.869 11.061 50.853 10.724 60.489 10.32 C 91.485 9.038 116.821 8.566 159.002 8.498 L 200.173 8.364 Z M 201.993 69.741 C 202.262 84.175 202.262 102.791 201.993 111.154 L 201.521 126.262 L 191.952 126.667 C 177.6 127.342 127.939 129.028 127.804 128.893 C 127.737 128.826 128.006 126.802 128.478 124.374 C 128.95 121.339 129.152 108.254 129.017 82.354 L 128.815 44.785 L 137.103 44.718 C 141.685 44.651 152.668 44.381 161.563 44.178 C 170.457 43.909 183.058 43.639 189.594 43.571 L 201.453 43.436 Z" fill="rgb(255,255,255)"></path></svg>
                            <svg id="code" xmlns="http://www.w3.org/2000/svg" width="91" height="73"><path d="M 0 0.31 C 0 3.143 2.83 18.858 4.515 25.266 C 8.221 39.632 14.083 51.436 22.506 61.62 C 25.403 65.195 29.446 67.421 32.681 67.353 L 34.702 67.286 L 32.344 66.274 C 31.063 65.734 29.446 64.79 28.705 64.183 C 26.347 62.025 23.382 54.943 19.541 41.858 C 18.396 38.081 16.307 32.011 14.824 28.301 C 10.107 16.363 0 -2.658 0 0.31 Z" transform="translate(27.361 2.582) rotate(10 17.351 33.677)" fill="rgb(255, 255, 255)"></path><path d="M 22.099 0.919 C 20.28 1.391 17.045 2.47 15.024 3.28 C 10.105 5.236 -0.946 11.576 0.065 11.913 C 0.739 12.116 17.584 9.957 23.649 8.945 C 26.546 8.406 26.479 8.945 22.503 18.928 C 19.202 27.291 16.169 36.329 16.574 36.734 C 17.113 37.274 31.667 16.5 33.015 13.262 C 35.508 7.394 34.767 2.808 31.128 0.852 C 28.837 -0.295 26.546 -0.295 22.099 0.919 Z" transform="translate(52.767 7.369) rotate(10 17.238 18.372)" fill="rgb(255, 255, 255)"></path><path d="M 4.837 2.92 C 1.467 8.788 -1.161 23.964 0.524 27.606 C 2.343 31.383 8.34 32.125 17.572 29.697 C 26.871 27.269 26.803 26.797 17.033 26.257 C 12.249 26.055 7.936 25.65 7.33 25.448 C 6.386 25.043 6.319 23.559 6.588 13.712 C 6.791 7.507 7.195 1.909 7.464 1.234 C 8.408 -1.126 6.454 0.155 4.837 2.92 Z" transform="translate(2.714 36.866) rotate(10 12.228 15.55)" fill="rgb(255, 255, 255)"></path></svg>
                            <svg id="dots" xmlns="http://www.w3.org/2000/svg" width="45.578" height="40.023"><g transform="rotate(18 22.789 20.012)"><path d="M 0.809 0.809 C 0.337 1.282 0 2.428 0 3.372 C 0 4.317 0.337 5.463 0.809 5.935 C 1.28 6.408 2.426 6.745 3.369 6.745 C 4.313 6.745 5.458 6.408 5.93 5.935 C 6.401 5.463 6.738 4.317 6.738 3.372 C 6.738 2.428 6.401 1.282 5.93 0.809 C 5.458 0.337 4.313 0 3.369 0 C 2.426 0 1.28 0.337 0.809 0.809 Z" transform="translate(38.724 0.114) rotate(23 3.369 3.372)" fill="rgb(255, 255, 255)"></path><path d="M 1.348 1.349 C 0.606 2.091 0 3.17 0 3.71 C 0 4.249 0.606 5.328 1.348 6.07 C 2.089 6.812 3.167 7.419 3.706 7.419 C 4.245 7.419 5.323 6.812 6.064 6.07 C 6.806 5.328 7.412 4.249 7.412 3.71 C 7.412 3.17 6.806 2.091 6.064 1.349 C 5.323 0.607 4.245 0 3.706 0 C 3.167 0 2.089 0.607 1.348 1.349 Z" transform="translate(20.531 16.976) rotate(23 3.706 3.71)" fill="rgb(255, 255, 255)"></path><path d="M 0.513 1.169 C 0.109 1.979 -0.093 2.788 0.042 2.991 C 0.244 3.125 0.783 2.653 1.187 1.844 C 1.591 1.035 1.794 0.225 1.659 0.023 C 1.457 -0.112 0.918 0.36 0.513 1.169 Z" transform="translate(0.477 29.297) rotate(23 0.85 1.507)" fill="rgb(255, 255, 255)"></path><path d="M 0.809 0.809 C 0.337 1.282 0 2.428 0 3.372 C 0 4.317 0.337 5.463 0.809 5.935 C 1.28 6.408 2.426 6.745 3.369 6.745 C 4.313 6.745 5.458 6.408 5.93 5.935 C 6.401 5.463 6.738 4.317 6.738 3.372 C 6.738 2.428 6.401 1.282 5.93 0.809 C 5.458 0.337 4.313 0 3.369 0 C 2.426 0 1.28 0.337 0.809 0.809 Z" transform="translate(2.338 33.164) rotate(23 3.369 3.372)" fill="rgb(255, 255, 255)"></path></g></svg>
                        </div>
                    </Link>
                    <Link to="./services" className="card services">
                        <h1>What I Do</h1>
                        
                        <div className="art-container">
                            <svg xmlns="http://www.w3.org/2000/svg" width="270" height="288"><path d="M 211.471 0.403 C 199.942 1.851 189.188 7.179 181.432 15.197 L 178.589 18.146 L 183.139 14.68 C 188.516 10.593 196.581 6.558 202.63 4.955 C 206.301 3.972 208.266 3.765 214.78 3.765 C 221.553 3.817 223.156 3.972 227.55 5.162 C 239.287 8.421 249.472 15.818 257.796 27.146 C 261.57 32.216 262.656 34.44 264.414 40.492 C 267.154 49.804 266.585 61.753 262.966 70.65 C 257.589 83.996 246.266 94.808 233.134 99.153 C 229.101 100.446 222.328 101.791 222.07 101.326 C 222.018 101.17 221.863 95.997 221.811 89.893 C 221.708 78.358 221.088 67.391 220.157 61.184 C 219.433 56.425 217.572 48.355 217.262 48.666 C 216.745 49.235 215.09 56.787 214.263 62.063 C 213.436 67.754 212.453 85.807 212.453 95.687 C 212.453 101.274 212.453 101.274 211.213 101.274 C 209.506 101.274 204.129 99.981 200.562 98.791 C 186.189 93.825 174.349 81.048 169.334 65.167 C 167.731 60.098 166.284 52.08 166.801 51.562 C 167.37 51.045 206.715 48.51 214.211 48.51 C 215.349 48.51 216.124 48.407 216.021 48.303 C 215.866 48.148 210.902 47.786 204.957 47.528 C 190.946 46.803 169.076 45.407 167.628 45.096 C 166.853 44.941 166.439 44.424 166.336 43.441 L 166.129 42.044 L 165.508 43.493 L 164.888 44.941 L 158.58 44.527 C 155.065 44.32 141.777 44.113 128.955 44.165 C 104.397 44.217 98.555 44.579 87.645 46.959 C 85.06 47.528 82.01 47.993 80.821 47.993 L 78.701 47.993 L 78.339 55.08 C 78.184 59.011 77.77 71.426 77.46 82.651 C 77.098 93.877 76.84 103.136 76.788 103.136 C 76.788 103.188 71.618 102.981 65.362 102.722 C 37.34 101.481 4.095 103.602 1.51 106.705 C 0.993 107.326 1.045 108.205 1.717 110.844 C 2.389 113.534 2.544 116.948 2.544 128.535 C 2.493 147.778 1.717 177.005 0.735 194.127 C -0.506 216.37 -0.196 229.51 1.821 241.459 C 2.286 244.149 2.7 246.425 2.751 246.477 C 2.751 246.528 11.437 246.89 21.933 247.356 C 32.48 247.822 49.8 248.753 60.45 249.477 C 71.101 250.201 86.818 251.029 95.349 251.391 C 103.88 251.701 110.911 252.012 110.963 252.012 C 111.015 252.063 111.325 255.115 111.635 258.788 C 112.462 268.875 113.703 276.738 115.099 280.256 C 115.823 282.221 118.098 270.22 118.925 259.564 C 119.649 250.874 119.339 251.287 124.561 251.287 C 127.404 251.287 135.366 250.253 140.485 249.167 C 144.155 248.442 144.466 247.666 143.38 242.545 C 142.553 238.614 142.553 237.941 143.897 221.492 C 144.621 212.129 145.5 201.369 145.758 197.541 C 146.017 193.713 146.327 190.558 146.379 190.506 C 146.482 190.403 152.118 190.609 158.942 190.868 C 180.76 191.696 201.441 190.506 214.883 187.661 L 217.469 187.092 L 218.037 178.97 C 218.399 174.522 218.916 165.78 219.278 159.624 L 219.847 148.399 L 221.967 148.14 C 223.156 147.985 230.497 147.364 238.304 146.795 C 246.111 146.226 252.574 145.657 252.626 145.554 C 252.884 145.295 248.179 144.829 233.444 143.691 C 226.361 143.122 220.467 142.553 220.312 142.398 C 220.157 142.243 220.312 137.381 220.622 131.639 C 220.984 125.897 221.398 118.241 221.605 114.62 L 221.915 108.102 L 224.81 107.74 C 228.429 107.326 235.668 104.947 239.959 102.774 C 248.49 98.48 257.589 90.1 262.294 82.238 C 267.723 73.082 269.997 64.702 269.997 53.425 C 270.049 44.062 269.325 40.648 265.603 31.233 C 261.518 21.094 258.106 16.387 250.558 10.697 C 239.7 2.472 225.327 -1.304 211.471 0.403 Z M 89.558 49.752 C 93.022 50.476 98.761 51.355 102.329 51.718 C 109.567 52.442 144.724 52.649 156.099 51.976 L 163.078 51.614 L 163.13 58.701 C 163.182 64.184 163.44 66.771 164.267 69.823 C 169.541 89.376 187.585 105.05 208.214 107.999 C 211.885 108.568 212.505 108.774 212.66 109.757 C 212.764 110.326 213.126 116.43 213.487 123.259 C 213.798 130.087 214.211 137.174 214.366 138.984 L 214.677 142.295 L 209.817 141.933 C 196.167 140.95 183.449 140.588 165.663 140.588 L 146.017 140.639 L 145.603 134.794 C 144.828 123.517 141.984 107.016 141.053 108.568 C 139.864 110.74 137.641 125.535 136.71 137.536 L 136.4 141.467 L 131.385 142.088 C 125.905 142.709 115.72 144.674 115.203 145.192 C 114.996 145.347 114.375 153.313 113.755 162.831 C 113.134 172.349 112.514 181.247 112.359 182.54 L 112.1 184.868 L 97.003 185.54 C 88.731 185.902 81.493 186.419 80.924 186.626 C 80.097 186.988 80.511 187.092 82.424 187.144 C 89.558 187.351 111.635 188.489 111.842 188.696 C 111.945 188.851 111.842 192.213 111.635 196.196 C 111.377 200.179 111.17 211.767 111.118 221.905 L 111.118 240.424 L 109.722 240.424 C 103.828 240.476 78.339 241.718 57.865 243.011 C 34.031 244.511 12.058 245.597 6.112 245.597 L 3.217 245.597 L 3.889 241.614 C 5.802 230.648 6.06 209.284 4.612 186.885 C 4.354 182.902 3.889 164.9 3.578 146.847 C 3.01 110.223 3.01 109.706 5.853 110.326 C 17.124 112.602 35.892 113.534 58.434 112.809 C 68.206 112.499 76.323 112.344 76.426 112.447 C 76.53 112.551 76.323 117.465 75.909 123.362 C 75.496 129.311 75.185 141.674 75.185 150.933 C 75.185 168.521 75.702 174.677 77.977 183.264 L 78.908 186.885 L 79.994 182.229 C 82.786 170.435 83.509 152.278 82.113 129.466 C 81.7 123.207 81.39 116.689 81.39 114.982 L 81.39 111.878 L 83.975 111.723 C 91.627 111.309 139.813 107.895 139.968 107.792 C 140.226 107.481 134.28 107.016 109.826 105.412 C 79.89 103.446 81.183 103.602 80.924 102.153 C 80.769 101.532 80.407 90.669 80.097 77.996 C 79.787 65.322 79.425 53.528 79.321 51.718 L 79.011 48.51 L 81.131 48.51 C 82.268 48.51 86.094 49.079 89.558 49.752 Z M 121.51 147.261 C 124.199 147.83 128.593 148.554 131.282 148.864 L 136.193 149.485 L 136.038 166.349 C 135.935 175.66 135.78 183.316 135.728 183.419 C 135.521 183.626 118.77 184.609 118.563 184.402 C 118.408 184.299 115.771 148.45 115.771 146.692 C 115.771 146.123 115.978 146.123 121.51 147.261 Z M 214.728 149.692 C 214.883 150.158 215.039 151.968 215.039 153.727 C 215.039 157.503 216.434 180.057 216.9 183.73 C 217.21 186.161 217.21 186.264 216.021 185.954 C 212.505 185.074 204.543 183.936 196.943 183.212 C 190.325 182.54 183.759 182.436 167.421 182.592 L 146.482 182.747 L 146.379 166.452 L 146.327 150.158 L 171.247 150.054 C 184.948 150.054 198.959 149.795 202.372 149.485 C 212.35 148.709 214.366 148.761 214.728 149.692 Z M 129.265 189.523 L 136.297 189.834 L 136.659 195.317 C 136.866 198.369 137.589 208.197 138.313 217.146 C 139.813 235.303 139.968 239.545 139.451 241.511 L 139.037 242.856 L 134.901 242.131 C 132.626 241.769 128.283 241.252 125.284 241.045 L 119.804 240.683 L 119.649 223.354 C 119.545 213.836 119.287 202.093 119.132 197.334 L 118.718 188.644 L 120.476 188.902 C 121.458 189.058 125.388 189.316 129.265 189.523 Z M 252.315 150.985 C 249.007 167.073 247.456 194.024 248.593 217.146 C 249.73 240.114 251.23 263.961 252.005 270.427 C 252.419 273.996 252.884 278.238 253.091 279.945 C 253.505 283.463 254.022 282.894 254.539 278.445 C 255.935 266.03 256.555 258.581 257.692 238.355 C 259.554 205.042 259.399 181.35 257.124 163.348 C 256.297 156.727 254.539 147.623 253.867 146.33 C 253.608 145.916 252.988 147.83 252.315 150.985 Z M 176.521 280.1 C 174.246 280.204 159.925 280.98 144.724 281.859 C 129.524 282.687 116.702 283.308 116.185 283.204 C 115.616 283.049 115.254 283.204 115.254 283.67 C 115.254 284.083 115.668 284.394 116.185 284.394 C 116.65 284.394 128.593 285.118 142.656 285.997 C 172.902 287.86 209.041 288.532 224.758 287.549 C 238.718 286.67 253.35 284.704 252.419 283.877 C 251.385 282.842 236.753 281.031 223.569 280.256 C 215.659 279.79 187.171 279.687 176.521 280.1 Z" fill="rgb(255,255,255)"></path></svg>
                        </div>
                    </Link>
                    <Link to="./contact" className="card contact">
                        <h1>contact me</h1>
                        
                        <div className="art-container">
                            <svg id="email" xmlns="http://www.w3.org/2000/svg" width="306" height="198"><path d="M 52.244 0.983 C 38.923 1.512 25.895 2.863 17.737 4.509 C 14.451 5.155 11.693 5.802 11.575 5.919 C 10.871 6.625 25.249 8.976 37.514 10.151 C 46.728 11.091 52.773 11.15 82.761 10.915 C 122.374 10.621 182.762 10.621 219.206 10.915 C 237.985 11.091 247.786 10.856 258.936 10.151 C 271.965 9.27 290.333 7.448 295.967 6.448 C 296.965 6.213 297.845 6.155 297.845 6.272 C 297.845 6.39 297.317 9.152 296.73 12.384 C 295.322 19.496 294.206 29.311 292.446 48.824 C 291.331 61.636 291.155 67.455 291.096 94.373 C 291.096 114.179 291.39 128.696 291.859 134.926 C 293.385 154.909 294.383 165.547 295.85 177.419 C 296.671 184.178 297.258 189.82 297.023 189.996 C 296.847 190.172 293.209 189.879 288.925 189.35 C 267.563 186.764 242.035 186.587 194.969 188.703 C 167.797 189.937 150.954 190.29 90.097 190.819 C 50.249 191.172 15.096 191.642 12.045 191.877 L 6.469 192.229 L 11.164 192.641 C 19.674 193.464 40.39 193.816 107.116 194.287 C 161.987 194.698 177.245 195.051 197.492 196.108 C 237.692 198.166 269.852 197.872 290.509 195.109 C 299.43 193.934 299.84 193.699 299.371 190.701 C 299.195 189.408 299.547 184.354 300.192 179.417 C 303.948 150.442 305.181 130.107 305.122 94.667 C 305.122 62.341 304.711 54.348 301.601 26.49 C 300.603 17.498 298.725 6.86 298.021 6.155 C 297.493 5.684 281.237 3.569 271.143 2.746 C 254.007 1.276 237.692 0.747 218.619 0.924 C 187.163 1.335 113.454 1.276 87.163 0.865 C 74.076 0.63 58.407 0.689 52.244 0.983 Z" fill="rgb(255,255,255)"></path><path d="M 5.297 6.625 C 5.238 6.977 4.827 10.798 4.358 15.147 C 2.597 31.427 2.186 39.714 1.717 69.394 C 1.423 86.203 1.012 109.889 0.778 121.996 C 0.484 136.865 0.602 147.915 1.071 156.084 C 2.01 171.6 4.651 189.879 5.825 188.586 C 6.059 188.35 6.705 185.882 7.233 183.12 C 10.109 168.015 11.4 141.979 10.52 115.531 C 10.226 106.01 9.933 91.023 9.933 82.324 C 9.933 61.225 8.994 37.598 7.585 22.082 C 6.588 11.444 5.473 3.98 5.297 6.625 Z M 6.998 11.444 C 6.998 12.267 16.623 20.201 26.013 27.195 C 37.163 35.482 46.318 41.653 67.738 55.112 C 77.774 61.401 91.565 70.217 98.49 74.625 C 112.692 83.794 136.577 98.193 143.326 101.719 C 145.791 103.012 147.845 104.188 147.845 104.364 C 147.845 104.54 145.673 106.186 142.974 108.008 C 140.333 109.889 137.222 112.181 136.107 113.18 L 134.053 115.002 L 136.107 114.003 C 137.222 113.474 140.92 111.299 144.265 109.242 C 149.84 105.775 150.544 105.481 151.894 106.127 C 153.302 106.774 153.361 106.774 152.422 105.716 C 151.483 104.717 152.129 104.246 165.333 95.842 C 173.021 91.023 187.986 81.384 198.608 74.449 C 209.289 67.513 225.486 57.111 234.7 51.292 C 255.181 38.303 268.385 29.487 275.897 23.728 C 282.353 18.791 290.627 11.503 290.275 11.091 C 289.806 10.621 278.832 16.087 271.496 20.378 C 263.045 25.373 249.43 34.424 233.526 45.591 C 227.247 49.999 214.16 58.991 204.477 65.574 C 187.986 76.741 154.77 99.603 151.248 102.189 L 149.664 103.365 L 142.739 98.075 C 131.237 89.377 122.727 83.5 84.757 58.051 C 46.788 32.602 33.759 24.374 19.733 17.086 C 10.05 12.032 6.998 10.68 6.998 11.444 Z M 38.395 136.807 C 35.696 139.687 33.818 142.331 32.527 145.152 C 30.649 149.267 29.006 154.791 29.475 155.32 C 29.827 155.614 33.818 149.09 39.158 139.745 C 41.447 135.808 43.09 132.575 42.797 132.575 C 42.562 132.575 40.567 134.456 38.395 136.807 Z M 54.827 134.985 C 49.311 138.217 46.259 140.744 42.503 145.446 C 39.276 149.502 32.233 160.551 32.233 161.609 C 32.233 162.667 41.506 153.146 46.201 147.268 C 48.607 144.212 52.656 139.628 55.062 137.101 C 57.527 134.632 59.346 132.575 59.229 132.575 C 59.053 132.575 57.058 133.633 54.827 134.985 Z" fill="rgb(255,255,255)"></path></svg>
                            <svg id="send" xmlns="http://www.w3.org/2000/svg" width="61.64" height="55.939"><path d="M 11.331 19.447 C 4.993 20.211 -0.172 20.975 0.004 21.093 C 0.591 21.681 13.561 22.739 23.948 23.091 L 35.979 23.444 L 35.979 27.558 C 35.92 29.791 35.451 34.787 34.922 38.607 C 33.807 46.189 33.573 59.824 34.629 54.887 C 34.922 53.418 36.448 46.835 38.092 40.194 C 39.676 33.553 40.967 27.264 40.967 26.206 C 40.967 23.326 39.5 20.27 37.739 19.624 C 36.331 19.095 15.439 18.918 11.331 19.447 Z M 14.558 0.052 C 9.101 0.464 6.342 0.934 6.636 1.463 C 6.871 1.757 7.868 1.992 8.983 1.992 C 10.04 1.992 14.441 2.521 18.784 3.226 C 24.652 4.166 30.286 4.519 41.495 4.695 C 49.711 4.813 56.519 5.048 56.695 5.165 C 57.282 5.753 56.754 17.625 55.697 29.909 C 53.937 49.598 53.761 52.536 54.289 52.536 C 54.817 52.536 58.162 38.078 59.805 28.616 C 61.155 21.034 61.977 10.396 61.507 6.223 C 60.92 1.286 60.392 0.993 49.653 0.581 C 38.972 0.17 17.493 -0.124 14.558 0.052 Z" fill="rgb(255,255,255)"></path></svg>
                        </div>
                    </Link>    
                </div>
            </div>
        </div>
    )
  }
}
