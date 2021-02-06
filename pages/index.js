import { Container } from "@material-ui/core";
import Head from "next/head";
import Business from "../components/Business";
import Comedy from "../components/Comedy";
import Education from "../components/Education";
import Health from "../components/Health";
import News from "../components/News";
import SideNav from "../components/Sidenav";
import Society from "../components/Society";
import Subscriptions from "../components/Subscriptions";
import Top from "../components/Top";
import Trending from "../components/Trending";
import styles from "../styles/Home.module.css";

export default function Home() {
  const subscriptions = [
    {
      author: "John Sonmez",
      title: "Simple Programmer",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaNbSxmQw7q9fTK1UbGB9d0lXq4X1G1rPP9oDjCj_40Hw1UUCC",
    },
  ];

  const top = [
    {
      author: "The New York Times",
      title: "The Daily",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZt805JMihjChbsRmtabBwt86kFvGcdEdzg2Fg-rP_hPUo6We",
    },
    {
      title: "Stuff You should Know",
      author: "IHeartRadio",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGRJf8KoRq8gfy_jpVgqDgtE-eKyXpHOpFEHlAmVqW1L2uOqo",
    },
    {
      author: "TED Talks Daily",
      title: "TED",
      cover:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvWRhYcJbWw4w6a9CFskUnb0-McmhM1QTyfq0omvEuVZyrA6Y",
    },
    {
      author: "Clyde Lee Denis",
      title: "7 Good Minutes",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT9wuGi5f8aUnktGKqPbGdpoft9Bp64Z03Mp51UHkFLfK4Ubn",
    },
    {
      author: "NPR",
      title: "Planet Money",
      cover:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeQypKxL8Qzjf0n28K0uUD-iVMtxcHx-G_NspdBSTCJcZv-YWh",
    },
    {
      author: "NPR",
      title: "Wait Wait Don't tell Me!",
      cover:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkmRFEVhn8F_uE_ukJcvSu3SBctAK07ZKXEn00clPmtfC3KxoJ",
    },
  ];

  const trending = [
    {
      author: "NPR",
      title: "Fresh Air",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6xuULLVWOHniPL2pBfT3NuN1LElVkuqez6yxfbn1DRvFyqUw",
    },
    {
      author: "Talking Politics",
      title: "",
      cover:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvWRhYcJbWw4w6a9CFskUnb0-McmhM1QTyfq0omvEuVZyrA6Y",
    },
    {
      author: "Wondery",
      title: "The Aplogy Line",
      cover:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQSoNyns3RBUyy3G0EhNIeTyvhi-fU0Fi57YztvRvo2f985d8c",
    },
    {
      author: "discovery+",
      title: "Unraveled:Long Island Serial",
      cover:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfRq-8E3-Vnt3-wCzTkj2je0b-YPioSKVEYs90me0ZMvxBNSY",
    },
    {
      author: "Vox",
      title: "The Ezra Klein Show",
      cover:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSqTGrg_JPenr_edYkuK6Al9DzpyyFAMoiyd1jsp0pNHhQCNjk",
    },
  ];
  const culture = [
    {
      author: "TED Talks Daily",
      title: "TED",
      cover:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvWRhYcJbWw4w6a9CFskUnb0-McmhM1QTyfq0omvEuVZyrA6Y",
    },
    {
      title: "Stuff You should Know",
      author: "IHeartRadio",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGRJf8KoRq8gfy_jpVgqDgtE-eKyXpHOpFEHlAmVqW1L2uOqo",
    },
    {
      author: "Clyde Lee Denis",
      title: "7 Good Minutes",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT9wuGi5f8aUnktGKqPbGdpoft9Bp64Z03Mp51UHkFLfK4Ubn",
    },
    {
      author: "Joe Rogan",
      title: "The Joe Rogan Experience",
      cover:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtGZTG2sfgKgC6CaZlVkepJkHLlTAFsuvc1df7uztSp0JSpmiw",
    },
    {
      author: "Freakonomics Radio + Stitcher",
      title: "Freakonomic Radio",
      cover:
        "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSZjUqEeWy3uxifXhfyI4zLCpvbxU5ZLllhjyE_sThNAwHT40I",
    },
    {
      author: "Gimlet",
      title: "Reply All",
      cover:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgqslFcpgTF4CeqTZe6OkHyP_2ckezsIviYY9SM_HzorC2lKok",
    },

    {
      author: "NPR",
      title: "TED Radio Hour",
      cover:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQTPj2qVxqA9KZP94CE-0RglzYmHc-9edPOGqbpjlltlHqMaok",
    },
  ];

  const news = [
    {
      author: "The New York Times",
      title: "The Daily",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjZt805JMihjChbsRmtabBwt86kFvGcdEdzg2Fg-rP_hPUo6We",
    },
    {
      author: "NPR",
      title: "Planet Money",
      cover:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSeQypKxL8Qzjf0n28K0uUD-iVMtxcHx-G_NspdBSTCJcZv-YWh",
    },
  ];

  const comedy = [
    {
      author: "Joe Rogan",
      title: "The Joe Rogan Experience",
      cover:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQtGZTG2sfgKgC6CaZlVkepJkHLlTAFsuvc1df7uztSp0JSpmiw",
    },
    {
      author: "NPR",
      title: "Wait Wait Don't tell Me!",
      cover:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRkmRFEVhn8F_uE_ukJcvSu3SBctAK07ZKXEn00clPmtfC3KxoJ",
    },
    {
      author: "Team Coco & Earwolf",
      title: "Conon O'Brien Needs a Friend",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSfHG4Hb0Cbz4cZSb_syTrBqwXltb3i-La779QE549yMC81vI",
    },
  ];
  const education = [
    {
      author: "TED Talks Daily",
      title: "TED",
      cover:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQvWRhYcJbWw4w6a9CFskUnb0-McmhM1QTyfq0omvEuVZyrA6Y",
    },
    {
      author: "Clyde Lee Denis",
      title: "7 Good Minutes",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoT9wuGi5f8aUnktGKqPbGdpoft9Bp64Z03Mp51UHkFLfK4Ubn",
    },
    {
      author: "Rob Dial and Kast Media",
      title: "The Mindset Mentor",
      cover:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS15_HV7kHZp4BI9I2BGQPZN0nVraBBLKwDjXXYHiOWaJNtsyE",
    },
    {
      author: "Gimlet",
      title: "Science VS",
      cover:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQQQ0VqAkq8JoEfeVtGCERdnlUYiB8_u316Dvd4u1rdNBZBwws",
    },
    {
      author: "NPR",
      title: "Life KIT",
      cover:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSG6uKndESrJEjxlaXLItlsusxeA7-rAueRKjJlypmFMCYMsXiP",
    },
  ];
  return (
    <div>
      <Head title="Google Podcasts Clone">
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="container">
        <Subscriptions subscriptions={subscriptions} />
        <Top top={top} />
        <Trending trending={trending} />
        <Society culture={culture} />
        <News news={news} />
        <Comedy comedy={comedy} />
        <Education education={education} />
        <Business />
        <Health />
      </div>
    </div>
  );
}
