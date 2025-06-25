import { CollapseProps } from "antd";
import { BsTwitterX } from "react-icons/bs";
import {
  FaUsers,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

export const CardData = [
  {
    name: "Conference",
    count: 0,
    icon: <FaUsers size={30} />,
  },
  {
    name: "Workshop",
    count: 0,
    icon: <FaUsers size={30} />,
  },
  {
    name: "Hackathon",
    count: 0,
    icon: <FaUsers size={30} />,
  },
];

export const FooterNav = [
  {
    link: "https://www.facebook.com/GDGKolachi/",
    icon: <FaFacebook size={30} color="#1877F2" />,
  },
  {
    link: "https://youtube.com/@gdgkolachi?si=eqnDAFwuLnsyginp",
    icon: <FaYoutube size={30} color="#FF0000" />,
  },
  {
    link: "https://www.linkedin.com/company/gdgkolachi",
    icon: <FaLinkedin size={30} color="#0077B5" />,
  },
  {
    link: "https://www.instagram.com/GDGKolachi",
    icon: <FaInstagram size={30} color="#833AB4" />,
  },
  {
    link: "https://www.twitter.com/gdgkolachi",
    icon: <BsTwitterX size={30} color="#1DA1F2" />,
  },
];

export const FAQItems: CollapseProps["items"] = [
  {
    key: "1",
    label: "What is Google I/O Extended Karachi?",
    children: (
      <div>
        {
          "I/O Extended is a series of community-led events that mirror the annual Google I/O developer conference, bringing the latest Google developer news, products, and technologies to a local level around the world."
        }
      </div>
    ),
  },
  {
    key: "2",
    label: "What are GDGs?",
    children: (
      <div>
        {
          "GDGs are focused on community building and learning about Google’s technologies."
        }
      </div>
    ),
  },
  {
    key: "3",
    label: "Who can register for Google I/O Extended Karachi?",
    children: (
      <div>
        {
          "Beginners, emerging professionals, experts, literally everyone. Anyone with the passion of learning, who’s fond of technology, passionate programmers , everybody can register and attend."
        }
      </div>
    ),
  },
  {
    key: "4",
    label: "Is it mandatory to register to participate in the event?",
    children: (
      <div>
        {
          "Yes. Each individual may register for only one ticket. You may not register on behalf of anyone else."
        }
      </div>
    ),
  },
  {
    key: "5",
    label: "I'm a beginner in programming. Can I still register?",
    children: (
      <div>
        {
          "Yes. Anybody with the zeal in technology can register. We have special tracks especially for beginners."
        }
      </div>
    ),
  },
  {
    key: "6",
    label: "What will attendees get by participating in the event?",
    children: (
      <div>
        {
          "Attendees of the Google I/O Extended Karachi will get a chance to network with like minded individuals and professionals. Also exciting swags from GDG Kolachi."
        }
      </div>
    ),
  },
  {
    key: "7",
    label: "Is the event open to everyone or only shortlisted participants?",
    children: (
      <div>
        {
          "Only shortlisted participants are allowed to attend the event."
        }
      </div>
    ),
  },
  {
    key: "8",
    label: "How can I communicate my queries?",
    children: (
        <div>
            <p>Reach out to us at <a href="mailto:hellogdgkolachi@gmail.com" className="text-blue-700 font-semibold"> hellogdgkolachi@gmail.com</a></p>
        </div>
    )
  },
  
];
