
import { Brain, Flame, Heart } from 'lucide-react';
import { Navbar1 } from "@/components/ui/navbar1";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navbarData = {
    logo: {
      url: "/",
      alt: "Holland-Pearse",
      title: "Holland-Pearse",
    },
    menu: [
      { title: 'Home', url: '/' },
      { title: 'About & FAQs', url: '/about' },
      {
        title: 'Expertise',
        url: '/expertise',
        items: [
          {
            title: "Low Self Esteem",
            url: "/expertise#low-self-esteem",
          },
          {
            title: "Lack of Confidence",
            url: "/expertise#lack-of-confidence",
          },
          {
            title: "Social Anxiety",
            url: "/expertise#social-anxiety",
          },
          {
            title: "Generalised Anxiety Disorder",
            url: "/expertise#generalised-anxiety",
          },
          {
            title: "Health Anxiety",
            url: "/expertise#health-anxiety",
          },
          {
            title: "Depression",
            url: "/expertise#depression",
          },
          {
            title: "OCD",
            url: "/expertise#ocd",
          },
        ],
      },
      { title: 'Fees', url: '/fees' },
      { title: 'Blog', url: '/blog' },
      { title: 'Contact', url: '/contact' }
    ],
    auth: {
      login: { text: "SCHEDULE A CALL", url: "/contact" },
      signup: { text: "SCHEDULE A CALL", url: "/contact" },
    },
  };

  return <Navbar1 {...navbarData} />;
};

export default Navbar;
