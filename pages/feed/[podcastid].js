import { useRouter } from "next/router";
import data from "../../data/data";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import AddIcon from "@material-ui/icons/Add";
import LanguageIcon from "@material-ui/icons/Language";
import Head from "next/head";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Feed = () => {
  const classes = useStyles();
  let uniqueData = new Set(data);
  const router = useRouter();
  const { podcastid } = router.query;
  let parsed = Array.from(uniqueData).filter((item) => item.id === podcastid);
  parsed.length = 1;

  return (
    <div className="container">
      <Head>
        <title>{parsed[0].title}</title>
      </Head>
      <div className="feed_top_hero">
        <div className="feed_top_left">
          <div className="feed_podcast_title">{parsed[0].title}</div>
          <div className="feed_podcast_author">{parsed[0].author}</div>
          <div className="feed_buttons">
            <Button
              variant="outlined"
              color="secondary"
              className={classes.button}
              startIcon={<AddIcon />}
            >
              Subscribe
            </Button>
            <Button
              variant="outlined"
              color="primary"
              className={classes.button}
              startIcon={<LanguageIcon />}
            >
              Visit Website
            </Button>
          </div>
        </div>
        <div className="feed_top_right">
          <img src={parsed[0].cover} />
        </div>
      </div>
      <span className="podcast__desc">
        lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet,
        consectetur adip Everyone needs a little help being a human. From sleep
        to saving money to parenting and more, we talk to the experts to get the
        best advice out there. Life Kit is here to help you get it together
      </span>
    </div>
  );
};

export default Feed;
