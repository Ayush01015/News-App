import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "Yahoo Entertainment" },
      author: "Krysten Peek",
      title:
        "Top-five picks Paolo Banchero and Keegan Murray shine in double-OT Summer League thriller as Magic squeak by - Yahoo Sports",
      description:
        "The rare sudden-death overtime in NBA Summer League saw two top-five draft picks shine.",
      url: "https://sports.yahoo.com/top-five-picks-paolo-banchero-and-keegan-murray-shine-in-double-ot-summer-league-thriller-as-magic-squeak-by-000947613.html",
      urlToImage:
        "https://s.yimg.com/ny/api/res/1.2/sHyUlrnzWoG8yrQqb5Y9Pg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD05MDM-/https://s.yimg.com/os/creatr-uploaded-images/2022-07/5cdc75d0-ffdd-11ec-bdff-366c090de366",
      publishedAt: "2022-07-10T01:09:00Z",
      content:
        "LAS VEGAS The third day of of the Las Vegas Summer League started out with a bang as two top-five draft picks squared off. It was the Paolo Banchero (No. 1 pick) and Keegan Murray (No. 4 pick) show, … [+3534 chars]",
    },
    {
      source: { id: null, name: "CNET" },
      author: "Sean Keane",
      title:
        "'Thor: Love and Thunder': Post-Credits Scenes and Marvel Cameos, Explained - CNET",
      description:
        "The 29th Marvel Cinematic Universe movie's extra scenes introduce a potential future adversary and reunite us with an old friend.",
      url: "https://www.cnet.com/culture/entertainment/thor-love-and-thunder-post-credits-scenes-and-marvel-cameos-explained/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/1e11c67a17fa0b7f379ad601b1c2770439a03bd9/2022/07/08/57d4b9da-9295-44bc-98d7-824f92af98d9/tbs-07802-r4.jpg?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2022-07-10T01:00:02Z",
      content:
        "Thor: Love and Thunder is in theaters around the world now, bringing us on the Asgardian Avenger's fourth solo adventure and claiming its place as the 29th Marvel Cinematic Universe movie. It sees di… [+6229 chars]",
    },
    {
      source: { id: null, name: "Silver Screen and Roll " },
      author: "Harrison Faigen",
      title:
        "Lakers and Nets GMs seen talking as Kyrie Irving trade rumors swirl - Silver Screen and Roll ",
      description:
        "Sean Marks and Rob Pelinka appeared to have plenty to talk about in Las Vegas as the Lakers and Nets continue to negotiate a potential blockbuster Kyrie Irving trade.",
      url: "https://www.silverscreenandroll.com/2022/7/9/23202213/lakers-nets-kyrie-irving-trade-rumors-rob-pelinka-sean-marks-talking-nba-summer-league",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/wTXwNX40tD2aPOLn5RyAchwwOiQ=/0x11:199x115/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23757236/Screen_Shot_2022_07_09_at_6.11.59_PM.png",
      publishedAt: "2022-07-10T00:46:41Z",
      content:
        "The last week-plus has seen all kinds of Kyrie Irving trade rumors, most of which have connected him, general manager Sean Marks and the Brooklyn Nets to the one and only team that appears to have in… [+2341 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Peter Baker",
      title:
        "At 79, Biden Is Testing the Boundaries of Age and the Presidency - The New York Times",
      description:
        "President Biden has said he plans to run for a second term, but his age has become an uncomfortable issue for him and his party.",
      url: "https://www.nytimes.com/2022/07/09/us/politics/biden-age-democrats.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/07/09/us/politics/09dc-biden1/09dc-biden1-facebookJumbo.jpg",
      publishedAt: "2022-07-10T00:00:55Z",
      content:
        "But overall, Dr. Kevin C. OConnor, the presidents physician, pronounced him a healthy, vigorous 78-year-old male who is fit to successfully execute the duties of the presidency.\r\nQuestions about Mr. … [+1799 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Pamela Brown, CNN",
      title:
        "Cipollone asserted executive privilege to some January 6 committee questions - CNN",
      description:
        "Former Trump White House counsel Pat Cipollone invoked executive privilege in his closed-door interview Friday with the House select committee investigating the January 6, 2021, attack on the US Capitol despite the panel's attempts to pose questions that woul…",
      url: "https://www.cnn.com/2022/07/09/politics/pat-cipollone-january-6-executive-privilege/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220709185926-cipollone-executive-privilege-january-6-committee-super-tease.jpg",
      publishedAt: "2022-07-09T23:54:00Z",
      content:
        "(CNN)Former Trump White House counsel Pat Cipollone invoked executive privilege in his closed-door interview Friday with the House select committee investigating the January 6, 2021, attack on the US… [+2774 chars]",
    },
    {
      source: { id: null, name: "The A.V. Club" },
      author: "William Hughes",
      title:
        'David Chase, Sopranos stars post their tributes to Tony "Paulie Walnuts" Sirico - The A.V. Club',
      description:
        'Chase: "He was a main reason for the success of The Sopranos. I will miss him greatly."',
      url: "https://www.avclub.com/tony-sirico-tributes-david-chase-sopranos-cast-mates-1849161652",
      urlToImage:
        "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/bcd11235cc106ec554502fc1066224da.jpg",
      publishedAt: "2022-07-09T23:37:00Z",
      content:
        "Tony Sirico died yesterday, prompting an outpouring of tributes from fans and former co-workers alikeand especially from The Sopranos, where he played mobster Paulie Walnuts across all six seasons of… [+2316 chars]",
    },
    {
      source: { id: null, name: "KOCO Oklahoma City" },
      author: "KOCO Staff",
      title:
        "Evacuations issued after explosion at ONEOK plant in Medford - KOCO Oklahoma City",
      description:
        "Crews responded to an explosion at a ONEOK plant in Medford.",
      url: "https://www.koco.com/article/oklahoma-medford-oneok-explosion/40564786",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/capture-png-1657408587.png?crop=0.959xw:1.00xh;0.0212xw,0&resize=1200:*",
      publishedAt: "2022-07-09T23:34:00Z",
      content:
        "MEDFORD, Okla. —Evacuations have been issued after an explosion at a ONEOK plant in Medford.\r\nOn Saturday afternoon, officials responded to an explosion at a ONEOK plant in Medford.\r\nOn Facebook, the… [+695 chars]",
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "Wildfire Forced Partial Closure of Yosemite National Park, Thousands Evacuated - NBC News",
      description:
        "A wildfire that spread more than 700 acres has led to the closure of Mariposa Grove in Yosemite National Park in California. Firefighters are scrambling to p...",
      url: "https://www.youtube.com/watch?v=iaa-9yUROw4",
      urlToImage: "https://i.ytimg.com/vi/iaa-9yUROw4/maxresdefault.jpg",
      publishedAt: "2022-07-09T23:15:42Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title: "Jaden Ivey leaves game after apparent ankle injury - ESPN",
      description:
        "Jaden Ivey leaves the Detroit Pistons’ Summer League game vs. the Washington Wizards in the first quarter after stepping on Isaiah Todd’s foot while attempti...",
      url: "https://www.youtube.com/watch?v=e4aRD_yGVo8",
      urlToImage: "https://i.ytimg.com/vi/e4aRD_yGVo8/maxresdefault.jpg",
      publishedAt: "2022-07-09T23:12:34Z",
      content: null,
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Ashley Parker, Yasmeen Abutaleb, Tyler Pager",
      title:
        "Inside Biden's struggle to respond to abortion ruling - The Washington Post",
      description:
        "Many Democrats were dismayed by the slow White House response to the court decision.",
      url: "https://www.washingtonpost.com/politics/2022/07/09/biden-democrats-abortion-dobbs/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/IZRCX5X63YI6ZM45OEYJC2ABJM.jpg&w=1440",
      publishedAt: "2022-07-09T22:33:10Z",
      content:
        "Comment on this story\r\nThree days after the Supreme Court overturned Roe v. Wade, President Biden used a break between Group of Seven summit meetings at the luxury Schloss Elmau resort in Germany to … [+18550 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Amanda Sealy and Carma Hassan, CNN",
      title:
        "Baby formula production resumes at Abbott's Michigan plant after shutdown due to flooding - CNN",
      description:
        "The Abbott formula plant in Sturgis, Michigan, resumed production of EleCare formula on July 1 after a three-week shutdown caused by flooding from severe storms, a company spokesperson said on Saturday.",
      url: "https://www.cnn.com/2022/07/09/health/abbott-formula-plant-reopens/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220707144909-abbott-formula-plant-reopens-super-tease.jpg",
      publishedAt: "2022-07-09T22:32:00Z",
      content:
        "(CNN)The Abbott formula plant in Sturgis, Michigan, resumed production of EleCare formula on July 1 after a three-week shutdown caused by flooding from severe storms, a company spokesperson said on S… [+2003 chars]",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "ABC News",
      title:
        "14-year-old boy fatally stabbed on NYC subway platform, police say - ABC News",
      description:
        "A 14-year-old was stabbed in the abdomen while on the platform at a Manhattan subway station, police said.",
      url: "https://abcnews.go.com/US/14-year-boy-fatally-stabbed-nyc-subway-platform/story?id=86531356",
      urlToImage:
        "https://s.abcnews.com/images/General/Breaking-News-banner-abc-ps-181024_hpMain_16x9_992.jpg",
      publishedAt: "2022-07-09T22:07:16Z",
      content:
        'A 14-year-old boy was fatally stabbed while on a New York City subway platform, police said.\r\nPolice responded around 3 p.m. Saturday to "a crime in progress" inside the 137th Street-City College tra… [+569 chars]',
    },
    {
      source: { id: null, name: "CNET" },
      author: "Adam Oram",
      title:
        "Last Call Alert: These 28 Early Amazon Prime Day Deals Expire Tonight - CNET",
      description:
        "Some of Amazon's absolute best Prime Day deals are here for its own devices, but they won't last for long.",
      url: "https://www.cnet.com/deals/last-call-best-early-prime-day-deals-amazon-devices/",
      urlToImage:
        "https://www.cnet.com/a/img/resize/9568e2b6bd6ae97b3538d989464e37393c1c83e2/2022/07/01/b66a68b9-4a90-46a3-a956-9941313b4da8/prime-day-2022-amazon-products.png?auto=webp&fit=crop&height=630&width=1200",
      publishedAt: "2022-07-09T22:00:14Z",
      content:
        "This story is part of Amazon Prime Day, CNET's guide for everything you need to know and how to find the best deals. \r\nTo save or not to save, that is the question. You can't have Prime Day without s… [+3057 chars]",
    },
    {
      source: { id: null, name: "New York Times" },
      author: "Lauren Hirsch, Kate Conger",
      title:
        "The Elon Musk-Twitter Saga Now Moves to the Courts - The New York Times",
      description:
        "Most legal experts say Twitter has the upper hand. But Musk revels in brinkmanship.",
      url: "https://www.nytimes.com/2022/07/09/technology/twitter-elon-musk-lawsuit.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/07/09/business/09twittermusk-legal/09twittermusk-legal-facebookJumbo.jpg",
      publishedAt: "2022-07-09T21:57:44Z",
      content:
        "The worst-case scenario for the court is that it makes an order and that he doesnt comply, and they have to figure out what to do about it, said Morgan Ricks, a professor at Vanderbilt Law School.\r\nW… [+1755 chars]",
    },
    {
      source: { id: null, name: "Entertainment Tonight" },
      author: "Miguel A. Melendez‍",
      title:
        "Kylie Jenner Calls Out Instacart Guy Who Delivered Food To Her House - Entertainment Tonight",
      description:
        "Jenner said it rubs her 'the wrong way' when people blatantly lie for attention.",
      url: "https://www.etonline.com/kylie-jenner-calls-out-instacart-driver-who-delivered-food-to-her-house-claimed-he-heard-baby",
      urlToImage:
        "https://www.etonline.com/sites/default/files/styles/max_1280x720/public/images/2022-04/Kylie-Jenner-Getty-1339547539_0.jpg?h=0a5738e5&itok=dLUUOBx1",
      publishedAt: "2022-07-09T21:45:32Z",
      content:
        "Kylie Jenner wanted to enjoy her mayo-drenched salami and pepperoni sandwich in peace, but her Instacart delivery driver dampened the mood, albeit briefly.\r\nThe 24-year-old makeup mogul took to socia… [+2100 chars]",
    },
    {
      source: { id: "fox-news", name: "Fox News" },
      author: "Adam Sabes",
      title:
        "Chicago car jumps curb, injures 5 pedestrians and diners; driver flees - Fox News",
      description:
        "Five people were injured in Chicago when a car jumped a curb and drove into an outside patio area of a restaurant on Friday night, according to police.",
      url: "https://www.foxnews.com/us/chicago-car-jumps-curb-injures-pedestrians-diners-driver-flees",
      urlToImage:
        "https://static.foxnews.com/foxnews.com/content/uploads/2022/07/Untitled-design-326.png",
      publishedAt: "2022-07-09T21:34:09Z",
      content:
        "A car in Chicago jumped a curb on Friday night injuring five people who were dining outside a restaurant in the city's Old Town neighborhood, according to police.\r\nThe suspect was driving a silver Le… [+1125 chars]",
    },
    {
      source: { id: "reuters", name: "Reuters" },
      author: null,
      title:
        "Rogers service restored after Canada-wide outage, blames router malfunction - Reuters.com",
      description:
        'Rogers Communications <a href="https://www.reuters.com/companies/RCIb.TO" target="_blank">(RCIb.TO)</a> said on Saturday that its services were close to fully operational after a massive outage it blamed on a router malfunction after maintenance work.',
      url: "https://www.reuters.com/business/media-telecom/rogers-services-restored-majority-customers-after-canada-wide-outage-2022-07-09/",
      urlToImage:
        "https://www.reuters.com/resizer/btsA_-ZNjiyqnOu8mTWREV2BzOI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Y42SCHLNXROOXBDZV3I2YJXHOY.jpg",
      publishedAt: "2022-07-09T21:29:00Z",
      content:
        "July 9 (Reuters) - Rogers Communications (RCIb.TO) said on Saturday that its services were close to fully operational after a massive outage it blamed on a router malfunction after maintenance work.\r… [+2601 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Karla Adam, William Booth",
      title:
        "What next for Boris Johnson? Books, columns, speeches, a comeback? - The Washington Post",
      description:
        "Most think he will write columns and also join the speaker circuit after his post.",
      url: "https://www.washingtonpost.com/world/2022/07/09/what-next-boris-johnson-books-columns-speeches-comeback/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/E4UDMFX7SQI6ZM45OEYJC2ABJM.jpg&w=1440",
      publishedAt: "2022-07-09T20:37:00Z",
      content:
        "Comment on this story\r\nLONDON What is next for Boris Johnson, the most omnipresent, omnivorous British politician of his age, once loved, now not, who delivered Brexit to Britain but now exits the gl… [+8229 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: null,
      title:
        "Sri Lankan President Gotabaya Rajapaksa to resign, Parliament speaker says; protesters storm his residence - CBS News",
      description:
        "The prime minister also announced Saturday that he would step down.",
      url: "https://www.cbsnews.com/news/sri-lankans-storm-presidents-house-office-in-biggest-rally/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2022/07/09/c2d812de-d071-4503-aea5-d595dce77d78/thumbnail/1200x630/53fc42ffab68e08b2098bd047b3ac01d/ap22190635365802.jpg",
      publishedAt: "2022-07-09T20:19:00Z",
      content:
        "Colombo, Sri Lanka — President Gotabaya Rajapaksa has agreed to resign in the coming days, the speaker of Sri Lanka's Parliament said on a tumultuous Saturday that also saw the prime minister say he … [+6532 chars]",
    },
  ];

  constructor() {
    super();
    // console.log("Hello i am the constructor from News class");
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=in&apiKey=2e24f858d2834c769f29f277a171121f&page=1&pagesize=9";
    const data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults,
    });
  }

  handlePreviousClick = async () => {
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2e24f858d2834c769f29f277a171121f&page=${
      this.state.page - 1
    }&pagesize=9`;
    const data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles,
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 9)) {
    } else {
      console.log(this.state.totalResults);
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=2e24f858d2834c769f29f277a171121f&page=${
        this.state.page + 1
      }&pagesize=9`;
      const data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
      });
    }
  };
  render() {
    return (
      <div className="container my-5">
        <h2>NewsMonkey- Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={this.handlePreviousClick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            type="button"
            onClick={this.handleNextClick}
            className="btn btn-dark"
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 9)}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
