import React from "react";
import "./HomePage.css";
import { Typography, Paper, Divider, Grid } from "@material-ui/core";
import imgpng from "../../assets/images/landingpage.png";
import Margin from "../UI/Margin/Margin";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import YoutubeAvatar from "../UI/YoutubeAvatar/YoutubeAvatar";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  }
});

const HomePage = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className="showcase">
        <div className="content">
          <img src={imgpng} className="logo" alt="Traversy Media" />
          <div className="title" style={{ color: "#fff" }}>
            <Typography component="h3" variant="display1" color="inherit">
              Welcome To Hour Of Code
            </Typography>
          </div>
          <div className="text" style={{ color: "#fff" }}>
            <Typography component="p" variant="subheading" color="inherit">
              Knowledge is of no value unless you put it into practice.
            </Typography>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "70px" }}>
        <Paper
          elevation={2}
          style={{ padding: "15px", marginBottom: "10px", textAlign: "center" }}
        >
          <Typography component="h3" variant="display1" color="primary">
            Courses
          </Typography>
          <Divider />
          <Margin />
          <Button
            component={Link}
            to="/programming_languages/java"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Learn Java
          </Button>
          <Button
            component={Link}
            to="/data_science"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Learn Data Science
          </Button>
          <Button
            component={Link}
            to="/artificial_intelligence"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Learn Machine Learning
          </Button>
        </Paper>
        <Margin />
        <Paper
          elevation={2}
          style={{ padding: "15px", marginBottom: "10px", textAlign: "center" }}
        >
          <Typography component="h3" variant="display1" color="primary">
            For Mobile Users
          </Typography>
          <Divider />
          <Margin />
          <Typography component="p" variant="caption">
            This link is for those who don't have laptop with them but no
            problem. Now You can code using online ide click below
          </Typography>

          <Button
            href="https://www.tutorialspoint.com/compile_java_online.php"
            target="_blank"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Java Online Ide
          </Button>
        </Paper>
        <Paper
          elevation={2}
          style={{ padding: "15px", marginBottom: "10px", textAlign: "center" }}
        >
          <Typography component="h3" variant="display1" color="primary">
            Resources
          </Typography>
          <Divider />
          <Margin />

          <Grid container justify="center" spacing={16}>
            <Grid item xs={12} className="gridarranger">
              <Paper
                elevation={2}
                style={{ padding: "15px", marginBottom: "10px" }}
              >
                <Typography variant="headline" component="h3">
                  Git Hub
                </Typography>

                <Typography variant="caption" component="p">
                  Git Hub is a version control manager. And also you can learn a
                  lot. I recommend you to signup to github .
                </Typography>
                <Margin />
                <Button
                  href="https://github.com"
                  target="_blank"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Git Hub
                </Button>
              </Paper>
              <Paper
                elevation={2}
                style={{ padding: "15px", marginBottom: "10px" }}
              >
                <Typography variant="headline" component="h3">
                  W3 Schools
                </Typography>

                <Typography variant="caption" component="p">
                  W3 Schools is a website for learning computer science related
                  stuff
                </Typography>
                <Margin />
                <Button
                  href="https://www.w3schools.com/"
                  target="_blank"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  W3 Schools
                </Button>
              </Paper>
              <Paper
                elevation={2}
                style={{ padding: "15px", marginBottom: "10px" }}
              >
                <Typography variant="headline" component="h3">
                  The School of AI
                </Typography>

                <Typography variant="caption" component="p">
                  The School of AI is a website for learning machine learning
                  and artificial intelligance
                </Typography>
                <Margin />
                <Button
                  href="https://www.theschool.ai"
                  target="_blank"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  School of AI
                </Button>
              </Paper>

              <Paper
                elevation={2}
                style={{ padding: "15px", marginBottom: "10px" }}
              >
                <Typography variant="headline" component="h3">
                  Tutorials Point
                </Typography>

                <Typography variant="caption" component="p">
                  Tutorials Point is a website for learning computer science
                  related stuff
                </Typography>
                <Margin />
                <Button
                  href="https://tutorialspoint.com"
                  target="_blank"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Tutorials point
                </Button>
              </Paper>
              <Paper
                elevation={2}
                style={{ padding: "15px", marginBottom: "10px" }}
              >
                <Typography variant="headline" component="h3">
                  Geeks For Geeks
                </Typography>

                <Typography variant="caption" component="p">
                  Geeks For Geeks is a website for learning computer science
                  related stuff
                </Typography>
                <Margin />
                <Button
                  href="http://geeksforgeeks.org"
                  target="_blank"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Geeks For Geeks
                </Button>
              </Paper>
              <Paper
                elevation={2}
                style={{ padding: "15px", marginBottom: "10px" }}
              >
                <Typography variant="headline" component="h3">
                  Java T Point
                </Typography>

                <Typography variant="caption" component="p">
                  Java T Point is a website for learning computer science
                  related stuff
                </Typography>
                <Margin />
                <Button
                  href="https://www.javatpoint.com"
                  target="_blank"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Java T point
                </Button>
              </Paper>
              <Paper
                elevation={2}
                style={{ padding: "15px", marginBottom: "10px" }}
              >
                <Typography variant="headline" component="h3">
                  Khan Academy
                </Typography>

                <Typography variant="caption" component="p">
                  Khan Academy is a website for learning anything
                </Typography>
                <Margin />
                <Button
                  href="https://www.khanacademy.org/"
                  target="_blank"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Khan Academy
                </Button>
              </Paper>
              <Paper
                elevation={2}
                style={{ padding: "15px", marginBottom: "10px" }}
              >
                <Typography variant="headline" component="h3">
                  Coursera
                </Typography>

                <Typography variant="caption" component="p">
                  Coursera is a website for learning computer and other tecnical
                  stuff . The content will be in video format
                </Typography>
                <Margin />
                <Button
                  href="https://www.coursera.org"
                  target="_blank"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Coursera
                </Button>
              </Paper>
              <Paper
                elevation={2}
                style={{ padding: "15px", marginBottom: "10px" }}
              >
                <Typography variant="headline" component="h3">
                  Udacity
                </Typography>

                <Typography variant="caption" component="p">
                  Udacity is a website for learning computer and other tecnical
                  stuff . The content will be in video format
                </Typography>
                <Margin />
                <Button
                  href="http://udacity.com"
                  target="_blank"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Udacity
                </Button>
              </Paper>
              <Paper
                elevation={2}
                style={{ padding: "15px", marginBottom: "10px" }}
              >
                <Typography variant="headline" component="h3">
                  Edx
                </Typography>

                <Typography variant="caption" component="p">
                  Edx is a website for learning computer and other tecnical
                  stuff . The content will be in video format
                </Typography>
                <Margin />
                <Button
                  href="https://www.edx.org/"
                  target="_blank"
                  variant="contained"
                  color="primary"
                  className={classes.button}
                >
                  Edx
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Paper>

        <Paper
          elevation={2}
          style={{ marginTop: "15px", padding: "10px", textAlign: "center" }}
        >
          <Typography component="h3" variant="display1" color="primary">
            Youtube Channels
          </Typography>
          <Divider />
          <Margin />
          <Typography>
            Subscribe to these youtube channels each and every channel is
            related to computer science.
          </Typography>
          <Margin />

          <div className="gridarranger">
            <YoutubeAvatar
              href="https://www.youtube.com/channel/UCSJbGtTlrDami-tDGPUV9-w"
              alt="academind link"
              title="Academind"
              imglink="https://yt3.ggpht.com/a-/AN66SAwlysNtd-A8gtL5fyvmEZuWIIXSfyTBBZ7sIQ=s288-mo-c-c0xffffffff-rj-k-no"
            />
            <YoutubeAvatar
              href="https://www.youtube.com/channel/UC8butISFwT-Wl7EV0hUK0BQ"
              alt="free code camp link"
              title="Free Code Camp"
              imglink="https://yt3.ggpht.com/a-/AN66SAxCZFxULNr0S_fHjEvGVUMwJzjbwU-wVularA=s288-mo-c-c0xffffffff-rj-k-no"
            />
            <YoutubeAvatar
              href="https://www.youtube.com/channel/UCYO_jab_esuFRV4b17AJtAw"
              alt="3blue1brown link"
              title="3Blue1Brown"
              imglink="https://yt3.ggpht.com/a-/AN66SAy00AYBvvwpT9hONmlOOSs-QqNJNTfZQxaBHg=s288-mo-c-c0xffffffff-rj-k-no"
            />
            <YoutubeAvatar
              href="https://www.youtube.com/channel/UCtxCXg-UvSnTKPOzLH4wJaQ"
              alt="coding tech link"
              title="Coding Tech"
              imglink="https://yt3.ggpht.com/a-/AN66SAyBKLTLdTfmsp2PPjv-h53iokGAOXzcUVixRA=s288-mo-c-c0xffffffff-rj-k-no"
            />
            <YoutubeAvatar
              href="https://www.youtube.com/channel/UCxX9wt5FWQUAAz4UrysqK9A"
              alt="cs dojo link"
              title="CS Dojo"
              imglink="https://yt3.ggpht.com/a-/AN66SAzMeJs3kHUSIASY2d3U3OwJkxcqtV0CR2QurA=s288-mo-c-c0xffffffff-rj-k-no"
            />
            <YoutubeAvatar
              href="https://www.youtube.com/channel/UCwRXb5dUK4cvsHbx-rGzSgw"
              alt="derek banas link"
              title="Derek Banas"
              imglink="https://yt3.ggpht.com/a-/AN66SAxdYDRNrwcqqpjZBPGxxm8XrTUivPFcM6JkRA=s288-mo-c-c0xffffffff-rj-k-no"
            />
            <YoutubeAvatar
              href="https://www.youtube.com/channel/UCyIe-61Y8C4_o-zZCtO4ETQ"
              alt="dev tips link"
              title="DEV TIPS"
              imglink="https://yt3.ggpht.com/a-/AN66SAwJXtTrxzaTOzCl6Jd69lHLnrS_l2qYJKDeUw=s288-mo-c-c0xffffffff-rj-k-no"
            />
            <YoutubeAvatar
              href="https://www.youtube.com/channel/UCP4bf6IHJJQehibu6ai__cg"
              alt="firebase link"
              title="Firebase"
              imglink="https://yt3.ggpht.com/a-/AN66SAyIbP7WScWwXSuL-fLEVSIVhoGRyrqGDVueOA=s288-mo-c-c0xffffffff-rj-k-no"
            />

            <YoutubeAvatar
              href="https://www.youtube.com/channel/UC_x5XG1OV2P6uZZ5FSM9Ttw"
              alt="google developers link"
              title="Google Developers"
              imglink="https://yt3.ggpht.com/a-/AN66SAxngB279M6JU61S1DNJSq1kpWMKVEAkil2AQw=s288-mo-c-c0xffffffff-rj-k-no"
            />

            <YoutubeAvatar
              href="https://www.youtube.com/channel/UCVTlvUkGslCV_h-nSAId8Sw"
              alt="code academy link"
              title="LearnCode.academy"
              imglink="https://yt3.ggpht.com/a-/AN66SAxhRkYWNtqkIzUVDm2zg0XKg8h4GSBMxslBuA=s288-mo-c-c0xffffffff-rj-k-no"
            />

            <YoutubeAvatar
              href="https://www.youtube.com/channel/UCWv7vMbMWH4-V0ZXdmDpPBA"
              alt="mosh link"
              title="Programming With Mosh"
              imglink="https://yt3.ggpht.com/a-/AN66SAyVVPUlqxAjKzimwT-qxFonNNRbDPXpDdwGXg=s288-mo-c-c0xffffffff-rj-k-no"
            />

            <YoutubeAvatar
              href="https://www.youtube.com/channel/UCfzlCWGWYyIQ0aLC5w48gBQ"
              alt="sentdex link"
              title="Sentdex"
              imglink="https://yt3.ggpht.com/a-/AN66SAx4-bYZlqoeZfF8YtQn7NrRnTJCvSW8S5nWCQ=s288-mo-c-c0xffffffff-rj-k-no"
            />

            <YoutubeAvatar
              href="https://www.youtube.com/channel/UCWN3xxRkmTPmbKwht9FuE5A"
              alt="siraj raval link"
              title="Siraj Raval"
              imglink="https://yt3.ggpht.com/a-/AN66SAzBhX5MbbYYjUfF--qPKDo-dDBx5YAbLJSWyQ=s288-mo-c-c0xffffffff-rj-k-no"
            />

            <YoutubeAvatar
              href="https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA"
              alt="traversy media link"
              title="Traversy Media"
              imglink="https://yt3.ggpht.com/a-/AN66SAy4xcnx6R4BSZN7-NWBLO3LjsVJlSfC_4Rh9w=s288-mo-c-c0xffffffff-rj-k-no"
            />
          </div>
        </Paper>
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(HomePage);
