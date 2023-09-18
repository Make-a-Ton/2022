import { ReactNode } from "react";

export const FAQS: { ques: string; ans: string }[] = [
  {
    ques: "What is the prize money",
    ans: "First Prize - 30K, Second Prize: 20K. Track prices to be announced soon"
  },
  {
    ques: "What all tracks are available",
    ans: "Seperate track for Software and Hardware"
  },
  {
    ques: "Is registration free?",
    ans: "Yes, registration is  free of charge.",
  },
  {
    ques: "Is this hackathon only for CUSAT students?",
    ans: "No. One category is exclusively for cusat students. The rest of the event is equally open to all.",
  },
  {
    ques: "What is the theme of the hackathon?",
    ans: "Make-a-ton is an open hackathon. Unlike other hackathons, we don't stress too much on the marketing side of things. We believe in creating technology that can positively impact the world.",
  },
  {
    ques: "Are premade products allowed?",
    ans: "No, we all start coding at the same time. It’s cool to work on designs beforehand, digital mockups, open source frameworks, and anything else available to everyone, but keep things within fair limits.",
  },
  {
    ques: "Will I get certificates?",
    ans: "Yes, certificates will be provided to all participants on completion.",
  },
  {
    ques: "When will prizes and other details be announced?",
    ans: "Currently the cash prize alone stands worth 50K. More details regarding the schedule, sponsors, main prizes and other category awards will be informed in a mail to the registered candidates.",
  },
  {
    ques: "Do we get any complementary?",
    ans: "Yes, of course. T-shirts and other amazing swags are awaiting all the registered participants.",
  },
  {
    ques: "I'm a newbie, is there any point in registering?",
    ans: "Hackathons are a great way to learn about new technology and make new friends. We want a diverse audience and beginners are welcome.",
  },
  {
    ques: "I don't know how to code, is this event for me?",
    ans: "Designers, marketers and all sorts of skills are required for a successful company. We believe there is something for everyone.",
  },
];

export const Prizes: {
  sponsor: string;
  amount: string;
  byDevfolio: boolean;
}[] = [
  {
    sponsor: "1st Prize",
    amount: "₹30K",
    byDevfolio: false,
  },
  {
    sponsor: "2nd Prize",
    amount: "₹20K",
    byDevfolio: false,
  },
  {
    sponsor: "Hack for Cusat",
    amount: "₹20K",
    byDevfolio: false,
  },
  {
    sponsor: "Polygon",
    amount: "₹10K",
    byDevfolio: true,
  },
  {
    sponsor: "Filecoin",
    amount: "₹20K",
    byDevfolio: true,
  },
  {
    sponsor: "Solana",
    amount: "$100",
    byDevfolio: true,
  },
  {
    sponsor: "Replit",
    amount: "₹5000",
    byDevfolio: true,
  },
];

export const ReasonsContent: string[] = [
  "Get mentored from industry experts to help you build better.",

  "Meet students from all over India and be exposed to a wide range of ideas.",

  "Opportunity to take home prizes and swags worth 400K.",

  "Opportunity to get internships.",
];

export const ScheduleData: {
  title: string;
  location?: string;
  timing: string;
  link?: string;
}[] = [
  {
    title: "Registration Starts",
    timing: "18th September",
    location: "Online",
    link: "https://forms.eventsradar.in/makeaton/",
  },
  {
    title: "Registration Ends",
    timing: "5th October, 11:49PM",
    location: "Online",
    link: "https://forms.eventsradar.in/makeaton/",
  },
  {
    title: "Reporting at the venue",
    timing: "4th November, 8:30AM - 9:30AM",
  },
  {
    title: "Hackathon Ends",
    timing: "5th November, 2PM",
  },
];

export const TeamDetails: {
  name: string;
  twitter?: string;
  linkedin?: string;
  github?: string;
  photo: string;
}[] = [
  {
    name: "Abhinav T B",
    twitter: "https://twitter.com/abhigamez",
    linkedin: "https://www.linkedin.com/in/abhinav-t-b-226172190/",
    github: "https://github.com/abhinav-TB",
    photo: "/assets/team/tb.jpeg",
  },
  {
    name: "Abhinav Rajesh",
    twitter: "https://twitter.com/_AbhinavRajesh_",
    linkedin: "https://linkedin.com/in/abhinavrajesh",
    github: "https://github.com/AbhinavRajesh",
    photo: "https://github.com/AbhinavRajesh.png",
  },
  {
    name: "Ajal P",
    twitter: "https://twitter.com/ajal_333",
    linkedin: "https://www.linkedin.com/in/ajal/",
    github: "https://github.com/ajal333",
    photo: "/assets/team/ajal.jpg",
  },
  {
    name: "Sunith vs",
    // twitter: "https://twitter.com/ajal_333",
    linkedin: "https://www.linkedin.com/in/sunithvs",
    github: "https://github.com/sunithvs",
    photo: "/assets/team/sunith.jpg",
  },
  {
    name: "Rohit T P",
    twitter: "https://twitter.com/tprohit",
    linkedin: "https://www.linkedin.com/in/rohit-tp",
    github: "https://github.com/rohittp0",
    photo: "/assets/team/rohit.jpeg",
  },
  {
    name: "Abdul Hakkeem P A",
    twitter: "https://twitter.com/abdulhakkeempa",
    linkedin: "https://in.linkedin.com/in/abdul-hakkeem-pa",
    github: "https://github.com/abdulhakkeempa",
    photo: "/assets/team/hakkeem.jpg",
  },
  {
    name: "Anito Anto",
    twitter: "https://twitter.com/anito_anto",
    linkedin: "https://in.linkedin.com/in/anitoanto",
    github: "https://github.com/anitoanto",
    photo: "/assets/team/anito.jpg",
  },
  {
    name: "Varsha Shaheen",
    // twitter: "https://twitter.com/ajal_333",
    linkedin: "https://www.linkedin.com/in/varsha-shaheen-a10295231",
    github: "https://github.com/varshashaheen",
    photo: "/assets/team/varsha.jpg",
  },
  {
    name: "Aswin Pradeep C",
    twitter: "https://twitter.com/_h_a_rr_y_",
    linkedin: "https://www.linkedin.com/in/aswin-pradeep-73b832224",
    github: "https://github.com/H-a-rr-y",
    photo: "/assets/team/aswin.jpg",
  },
  {
    name: "Sidharth S Mohan",
    // twitter: "https://twitter.com/ajal_333",
    linkedin: "https://www.linkedin.com/in/sidharth-s-mohan-47125a21b",
    // github: "https://github.com/ajal333",
    photo: "/assets/team/sidharth.jpg",
  },
];
