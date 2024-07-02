import logoDark from "@/images/logo.png";
export const Logo = {
  dark: logoDark
};

export const NavLinksData = [
  {
    name: "Home",
    url: "/",
    subItems: [
      {
        name: "Home 01",
        url: "/"
      },
      {
        name: "Home 02",
        url: "/index-2"
      }
    ]
  },
  {
    name: "About",
    url: "/about"
  },
  {
    name: "Services",
    url: "/services",
    subItems: [
      {
        name: "Services",
        url: "/service"
      },
      {
        name: "Service Details",
        url: "/service-details"
      }
    ]
  },
  {
    name: "Blog",
    url: "/blog",
    subItems: [
      {
        name: "Blog Page",
        url: "/blog"
      },
      {
        name: "Blog Details",
        url: "/blog-details"
      }
    ]
  },
  {
    name: "Contact",
    url: "/contact"
  }
];

export const TopbarInfos = [
  {
    icon: "icon-placeholder",
    tagLine: "Address",
    text: "66 Broklyn Street, New York",
    url: "#"
  },
  {
    icon: "icon-phone-call",
    tagLine: "Call Now",
    text: "666 888 000",
    url: "tel:666-888-000"
  },
  {
    icon: "icon-clock",
    tagLine: "Open Hours",
    text: " Mon-Sat: 9am - 6pm",
    url: "#"
  }
];

import slideOneImage1 from "@/images/slider/slider-1.jpg";
import slideOneImage2 from "@/images/slider/slider-2.jpg";
import slideOneImage3 from "@/images/slider/slider-3.jpg";

export const SlideOneData = [
  {
    backgroundImage: slideOneImage1,
    title: "Heating and Air Conditioning Specialist",
    text: "Choose the Best Company",
    button: "GET A FREE QUOTE",
    url: "/contact"
  },
  {
    backgroundImage: slideOneImage2,
    title: "Installation Services & Repair",
    text: "Reliable Air Conditioning",
    button: "GET A FREE QUOTE",
    url: "/contact"
  },
  {
    backgroundImage: slideOneImage3,
    title: "Heating and Air Conditioning Specialist",
    text: "Choose the Best Company",
    button: "GET A FREE QUOTE",
    url: "/contact"
  }
];

import slideOneImage4 from "@/images/slider/slider-4.jpg";
import slideOneImage5 from "@/images/slider/slider-5.jpg";

export const SlideTwoData = [
  {
    backgroundImage: slideOneImage4,
    title: "Heating and Air Conditioning Specialis",
    button: "GET A FREE QUOTE",
    url: "/contact"
  },
  {
    backgroundImage: slideOneImage5,
    title: "Keep your family happy this winter, and warm.",
    button: "GET A FREE QUOTE",
    url: "/contact"
  },
  {
    backgroundImage: slideOneImage4,
    title: "Heating and Air Conditioning Specialist",
    button: "GET A FREE QUOTE",
    url: "/contact"
  }
];

export const FeatureOneData = [
  {
    icon: "icon-wallet",
    title: "No Upfront Payments"
  },
  {
    icon: "icon-diploma",
    title: "Satisfaction Guarantee"
  },
  {
    icon: "icon-big_clock",
    title: "Emergency Service"
  },
  {
    icon: "icon-handshake",
    title: "Fixed Right Promise"
  },
  {
    icon: "icon-mechanic",
    title: "8 Years Experience"
  }
];

export const AboutOneData = {
  title: "Heating and air conditioning repair and installation company",
  tagLine: "Welcome to loazzne",
  content:
    "There are many variations of passages of lorem ipsum available, but the majorify have suffered alteration in some form by injected humour, or randmised words which don't look even slightly believable.",
  button: {
    url: "/about",
    label: "LEARN MORE"
  }
};

import serviceImage1 from "@/images/services/service-1.jpg";
import serviceImage2 from "@/images/services/service-2.jpg";
import serviceImage3 from "@/images/services/service-3.jpg";

export const ServiceOneData = {
  title: "Our services",
  posts: [
    {
      image: serviceImage1,
      icon: "icon-snow",
      title: "Cooling Services",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
      button: {
        label: "LEARN MORE",
        url: "/service-details"
      }
    },
    {
      image: serviceImage2,
      icon: "icon-fire",
      title: "Heating Services",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
      button: {
        label: "LEARN MORE",
        url: "/service-details"
      }
    },
    {
      image: serviceImage3,
      icon: "icon-ac",
      title: "Other Services",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration.",
      button: {
        label: "LEARN MORE",
        url: "/service-details"
      }
    }
  ]
};

export const CallToActionOneData = {
  title: "No overtime charges, 7 days a week",
  button: {
    url: "/contact",
    label: "GET A FREE QUOTE"
  }
};

export const CallToActionTwoData = {
  left: {
    text: "Air Conditioning Services",
    title: "Cool it down"
  },
  right: {
    text: "Heating Services",
    title: "Heat it up"
  }
};

import funfactShape from "@/images/shape/about-shape.png";

export const FunfactOneData = {
  shapeImage: funfactShape,
  title: "Numbers Speakers.",
  posts: [
    {
      count: 8870,
      text: "Air Conditioning Repairs and Install"
    },
    {
      count: 4760,
      text: "Air Conditioning Repairs and Install"
    },
    {
      count: 9032,
      text: "Air Conditioning Repairs and Install"
    }
  ]
};

import galleryOne1 from "@/images/gallery/gallery-1.jpg";
import galleryOne2 from "@/images/gallery/gallery-2.jpg";
import galleryOne3 from "@/images/gallery/gallery-3.jpg";
import galleryOne4 from "@/images/gallery/gallery-4.jpg";
import galleryOne5 from "@/images/gallery/gallery-5.jpg";
import galleryOne6 from "@/images/gallery/gallery-6.jpg";

export const GalleryOneData = [
  {
    title: "Maintenance and Repair",
    image: galleryOne1,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne2,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne3,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne4,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne5,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne6,
    url: "#"
  }
];

import testimonial1 from "@/images/testimonial/testimonial-1.jpg";
import testimonial2 from "@/images/testimonial/testimonial-2.jpg";
import testimonial3 from "@/images/testimonial/testimonial-3.jpg";

export const TestimonialOneData = {
  title: "Testimonials",
  posts: [
    {
      image: testimonial1,
      content:
        "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
      name: "Della Barnett",
      designation: "CEO"
    },
    {
      image: testimonial2,
      content:
        "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
      name: "Max Dunn",
      designation: "Developer"
    },
    {
      image: testimonial3,
      content:
        "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
      name: "Alberta Potter",
      designation: "Director"
    },
    {
      image: testimonial1,
      content:
        "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
      name: "Della Barnett",
      designation: "CEO"
    },
    {
      image: testimonial2,
      content:
        "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
      name: "Max Dunn",
      designation: "Developer"
    },
    {
      image: testimonial3,
      content:
        "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
      name: "Alberta Potter",
      designation: "Director"
    }
  ]
};

export const FooterBottomData = {
  social: [
    {
      icon: "fa fa-twitter",
      url: "#"
    },
    {
      icon: "fa fa-facebook-f",
      url: "#"
    },
    {
      icon: "fa fa-linkedin",
      url: "#"
    },
    {
      icon: "fa fa-youtube-play",
      url: "#"
    }
  ]
};

export const FooterInfo = [
  {
    icon: "icon-placeholder",
    tagLine: "Address",
    text: "66 Broklyn Street, New York",
    url: "#"
  },
  {
    icon: "icon-contact",
    tagLine: "Email",
    text: "help@loazzne.com",
    url: "mailto:help@loazzne.com"
  },
  {
    icon: "icon-clock",
    tagLine: "Open Hours",
    text: " Mon-Sat: 9am - 6pm",
    url: "#"
  }
];

export const FooterWidgets = {
  about: {
    title: "About Loazzne",
    text: "At Lennom, We don’t just provide resi-dential and commercial heating and air conditioning services; we make people’s lives easier. Better.",
    tagLine: "Get a Quote",
    phone: "666 888 000"
  },
  linkOne: {
    title: "Quick Links",
    menu: [
      {
        lable: "Services",
        url: "#"
      },
      {
        lable: "Request Appointment",
        url: "#"
      },
      {
        lable: "Site Map",
        url: "#"
      },
      {
        lable: "About Us",
        url: "#"
      }
    ]
  },
  linkTwo: {
    menu: [
      {
        lable: "Careers",
        url: "#"
      },
      {
        lable: "Privacy Policy",
        url: "#"
      },
      {
        lable: "Change Location",
        url: "#"
      },
      {
        lable: "Expert Tips",
        url: "#"
      },
      {
        lable: "Terms & Conditions",
        url: "#"
      }
    ]
  }
};

import blog1 from "@/images/blog/blog-1.jpg";
import blog2 from "@/images/blog/blog-2.jpg";
import blog3 from "@/images/blog/blog-3.jpg";
import blog4 from "@/images/blog/blog-4.jpg";
import blog5 from "@/images/blog/blog-5.jpg";
import blog6 from "@/images/blog/blog-6.jpg";

export const BlogOneData = {
  title: "Our latest news",
  posts: [
    {
      image: blog1,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "How does a ductless heat pump work?",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog2,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Simple hack to improve A/C efficiency",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog3,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Preparing your home before vacation",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    }
  ]
};

export const BlogTwoData = {
  posts: [
    {
      image: blog1,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "How does a ductless heat pump work?",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog2,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Simple hack to improve A/C efficiency",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog3,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Preparing your home before vacation",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog4,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Heating and cooling safety issues",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog5,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Don’t neglect your outdoor unit",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog6,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Have your system professionally inspected",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    }
  ]
};

export const VideoOneData = {
  title: "Watch how we work",
  id: "8DP4NgupAhI"
};

export const AboutTwoData = {
  caption: " 20 <span>years experience</span> ",
  blockTitle: {
    title:
      "We are trusted source of ac and heating maintenance repairs company",
    tagline: "Why choose us"
  },
  lists: [
    {
      text: " Unmatched performance, satisfaction service guarantees"
    },
    {
      text: " Home protection through our shoe covers and mats"
    },
    {
      text: " Upfront, flat rate pricing—no overtime charges"
    },
    {
      text: " 24 / 7 availability for all emergency services"
    },
    {
      text: " Fixed right promise—done right or it’s free"
    },
    {
      text: " Clear communication and updates on service arrival"
    }
  ],
  offer: {
    tagline: "10% off",
    text: "on our all services for senior citizens."
  }
};

import team1 from "@/images/team/team-1.jpg";
import team2 from "@/images/team/team-2.jpg";
import team3 from "@/images/team/team-3.jpg";
import team4 from "@/images/team/team-4.jpg";

export const TeamOneData = {
  title: "Meet The Team",
  posts: [
    {
      image: team1,
      name: "Effie Green",
      designation: "Manager",
      social: [
        {
          icon: "fa-facebook",
          url: "#"
        },
        {
          icon: "fa-twitter",
          url: "#"
        },
        {
          icon: "fa-youtube-play",
          url: "#"
        }
      ]
    },
    {
      image: team2,
      name: "Catherine Lane",
      designation: "Worker",
      social: [
        {
          icon: "fa-facebook",
          url: "#"
        },
        {
          icon: "fa-twitter",
          url: "#"
        },
        {
          icon: "fa-youtube-play",
          url: "#"
        }
      ]
    },
    {
      image: team3,
      name: "Augusta Wells",
      designation: "Developer",
      social: [
        {
          icon: "fa-facebook",
          url: "#"
        },
        {
          icon: "fa-twitter",
          url: "#"
        },
        {
          icon: "fa-youtube-play",
          url: "#"
        }
      ]
    },
    {
      image: team4,
      name: "Kyle Fuller",
      designation: "Founder",
      social: [
        {
          icon: "fa-facebook",
          url: "#"
        },
        {
          icon: "fa-twitter",
          url: "#"
        },
        {
          icon: "fa-youtube-play",
          url: "#"
        }
      ]
    }
  ]
};

export const AboutThreeData = {
  blockTitle: {
    tagline: "Our success story",
    title: "Experience quality air conditioning service in broklyn new york"
  },
  summery:
    "There are many variations of passages of lorem ipsum available, but the majorify have suffered alteration in some form by injected humour, or randmised words which don't look even slightly believable.",
  button: {
    lable: "LEARN MORE",
    url: "/about"
  },
  box: [
    {
      icon: "icon-maintenance",
      title: "We make as cool again"
    },
    {
      icon: "icon-big-ac",
      title: "Keep your business cool"
    }
  ]
};

export const AboutFourData = {
  blockTitle: {
    title: "We are trusted by more than <span>8900</span> clients",
    text1:
      "Tincidunt elit magnis nulla facilisis sagittis is maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
    text2:
      "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many varia-tions of passages of available but the majarity have suffered."
  }
};

export const BenefitOneData = {
  title: "Our benefits",
  posts: [
    {
      icon: "icon-big_clock",
      title: "Emergency Service",
      text: "There are many passages of lorem ipsum available but the majority have alteration."
    },
    {
      icon: "icon-wallet",
      title: "No Upfront Payment",
      text: "There are many passages of lorem ipsum available but the majority have alteration."
    },
    {
      icon: "icon-diploma",
      title: "Satisfaction Guarantee",
      text: "There are many passages of lorem ipsum available but the majority have alteration."
    },
    {
      icon: "icon-mechanic",
      title: "8 Years Experience",
      text: "There are many passages of lorem ipsum available but the majority have alteration."
    }
  ]
};

export const ServiceSidebarListData = [
  {
    icon: "icon-snow",
    title: "Cooling Services",
    list: [
      {
        label: "Air Conditioner Maintenance",
        url: "#"
      },
      {
        label: "Air Conditioner Repair",
        url: "#"
      },
      {
        label: "Air Conditioner Replacement",
        url: "#"
      },
      {
        label: "Ductless Split AC Systems",
        url: "#"
      },
      {
        label: "Duct Cleaning & Installation",
        url: "#"
      }
    ]
  },
  {
    icon: "icon-fire",
    title: "Heating Services",
    list: [
      {
        label: "Air Conditioner Maintenance",
        url: "#"
      },
      {
        label: "Air Conditioner Repair",
        url: "#"
      },
      {
        label: "Air Conditioner Replacement",
        url: "#"
      },
      {
        label: "Ductless Split AC Systems",
        url: "#"
      },
      {
        label: "Duct Cleaning & Installation",
        url: "#"
      }
    ]
  }
];

export const ServiceSidebarOtherData = [
  {
    icon: "icon-ac",
    title: "Other Services",
    content: {
      icon: "icon-support",
      title: "<span>Contact with us </span>666 888 000"
    }
  },
  {
    icon: "icon-building",
    title: "Commercial Services",
    content: {
      icon: "icon-building",
      title: "<span>Contact with us </span>666 888 000"
    }
  }
];

import comment1 from "@/images/comment-1.jpg";
import comment2 from "@/images/comment-2.jpg";

export const CommentPostData = [
  {
    name: "David Martin",
    image: comment1,
    time: "10 Nov, 2018 - 4:00 pm",
    text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet."
  },
  {
    name: "Jessica Brown",
    image: comment2,
    time: "10 Nov, 2018 - 4:00 pm",
    text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet."
  }
];
