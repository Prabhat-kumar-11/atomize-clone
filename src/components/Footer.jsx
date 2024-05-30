import React from 'react'

export const Footer = () => {
  return (
    <footer class="w-full px-[368px] justify-between items-center mt-32">
        <div class="flex gap-[120px] ">
          <div>
            <ul>
              <li class="font-bold mb-2">Docs</li>
              <li>
                <a href="#">Installation</a>
              </li>
              <li>
                <a href="#">Theme Setup</a>
              </li>
              <li>
                <a href="#">Grid</a>
              </li>
              <li>
                <a href="#">Atoms</a>
              </li>
              <li>
                <a href="#">Molecules</a>
              </li>
              <li>
                <a href="#">Functions</a>
              </li>
            </ul>
          </div>
          <div className="flex gap-[60px]">
            <div>
              <ul>
                <li class="font-bold mb-2">Atomize</li>
                <li>
                  <a href="#">Features</a>
                </li>
                <li>
                  <a href="#">Design</a>
                </li>
                <li>
                  <a href="#">Development</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li class="font-bold mb-2">Resources</li>
                <li>
                  <a href="#">Sketch File</a>
                </li>
                <li>
                  <a href="#">Github</a>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li class="font-bold mb-2">About</li>
                <li>
                  <a href="#">Showcase</a>
                </li>
                <li>
                  <a href="#">Contribute</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <ul>
              <li class="font-bold mb-2">Extras</li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Need Help?</a>
              </li>
              <li>
                <a href="#">Give Feedback</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-8 text-center">
          <p>Designed & Developed by Proksh Luthra</p>
          <div class="flex justify-center space-x-4 mt-2">
            <a href="#" class="text-gray-600 hover:text-black">
              <i class="fab fa-github"></i>
            </a>
            <a href="#" class="text-gray-600 hover:text-black">
              <i class="fab fa-behance"></i>
            </a>
            <a href="#" class="text-gray-600 hover:text-black">
              <i class="fab fa-dribbble"></i>
            </a>
            <a href="#" class="text-gray-600 hover:text-black">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="#" class="text-gray-600 hover:text-black">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </footer>
  )
}
