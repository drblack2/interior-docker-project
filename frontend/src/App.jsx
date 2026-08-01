import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Consultation from './pages/Consultation';
import Admin from './pages/Admin';
import { fetchProjects } from './api/api';
import './styles.css';

const services = [
  {
    title: 'Residential Styling',
    description: 'Thoughtful layouts and curated palettes for homes that feel elevated and lived-in.',
    icon: '⌂'
  },
  {
    title: 'Commercial Interiors',
    description: 'Functional, brand-forward spaces created to impress clients and support teams.',
    icon: '◼'
  },
  {
    title: 'Turnkey Renovation',
    description: 'From planning to final styling, we coordinate every detail with calm precision.',
    icon: '✦'
  }
];

const testimonials = [
  {
    quote: 'Every element felt considered, personal, and beautifully executed.',
    author: 'Maya & Daniel',
    role: 'Homeowners'
  },
  {
    quote: 'The team transformed our office into a space that feels both modern and welcoming.',
    author: 'Lina Ortiz',
    role: 'Creative Director'
  }
];

const defaultProjects = [
  {
    id: 1,
    title: 'Luminous Penthouse',
    description: 'Soft marble, sculptural lighting, and quiet luxury in every corner.',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 2,
    title: 'Harbor House Retreat',
    description: 'An airy coastal residence designed for calm mornings and effortless hosting.',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80'
  },
  {
    id: 3,
    title: 'Studio Atelier',
    description: 'A thoughtful creative workplace rooted in warmth and precision.',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=900&q=80'
  }
];

function App() {
  const getInitialPage = () => {
    const path = window.location.pathname.replace(/\//g, '');
    const validPages = ['Home', 'Services', 'Portfolio', 'About', 'Contact', 'Consultation', 'Admin'];
    return validPages.includes(path) ? path : 'Home';
  };

  const [activePage, setActivePage] = useState(getInitialPage);
  const [projects, setProjects] = useState(defaultProjects);

  useEffect(() => {
    window.history.replaceState(null, '', `/${activePage === 'Home' ? '' : activePage.toLowerCase()}`);
  }, [activePage]);

  useEffect(() => {
    fetchProjects()
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data);
        } else {
          setProjects(defaultProjects);
        }
      })
      .catch(() => setProjects(defaultProjects));
  }, []);

  const renderPage = () => {
    switch (activePage) {
      case 'Services':
        return <Services services={services} />;
      case 'Portfolio':
        return <Portfolio projects={projects} />;
      case 'About':
        return <About />;
      case 'Contact':
        return <Contact />;
      case 'Consultation':
        return <Consultation />;
      case 'Admin':
        return <Admin />;
      default:
        return <Home services={services} testimonials={testimonials} projects={projects} onNavigate={setActivePage} />;
    }
  };

  return (
    <div className="app-shell">
      <Navbar activePage={activePage} onNavigate={setActivePage} />
      <main>{renderPage()}</main>
      <Footer />
    </div>
  );
}

export default App;
