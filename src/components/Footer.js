import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <div>
    <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-info">Home</a></li>
      <li class="nav-item"><p class="nav-link px-2 text-info">About</p></li>
    </ul>
    <h6 class="text-center text-body-secondary">© 2024 QuickEats, Inc</h6>
    
  </footer>
    </div>
  )
}
