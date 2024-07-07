import React from 'react'
import {Link} from 'react-router-dom'
export default function Footer() {
  return (
    <div>
    <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
      <li class="nav-item"><p class="nav-link px-2 text-body-secondary">Features</p></li>
      <li class="nav-item"><p class="nav-link px-2 text-body-secondary">Pricing</p></li>
      <li class="nav-item"><p class="nav-link px-2 text-body-secondary">FAQs</p></li>
      <li class="nav-item"><p class="nav-link px-2 text-body-secondary">About</p></li>
    </ul>
    <p class="text-center text-body-secondary">© 2024 QuickEats, Inc</p>
    
  </footer>
    </div>
  )
}
