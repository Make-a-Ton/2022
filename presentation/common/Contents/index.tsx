import { ReactNode } from "react";

export const FAQS: { ques: string; ans: string }[] = [
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
    amount: "TBD",
    byDevfolio: false,
  },
  {
    sponsor: "2nd Prize",
    amount: "TBD",
    byDevfolio: false,
  },
  {
    sponsor: "Hack for Cusat",
    amount: "TBD",
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
    timing: "5th October",
    location: "Devfolio",
    link: "https://makeaton-5.devfolio.co",
  },
  {
    title: "Registration Ends",
    timing: "15th October, 11:49PM",
    location: "Devfolio",
    link: "https://makeaton-5.devfolio.co",
  },
  {
    title: "Reporting at the venue",
    timing: "27th October, 8:30AM - 9:30AM",
  },
  {
    title: "Hackathon Ends",
    timing: "28th October, 2PM",
  },
];
