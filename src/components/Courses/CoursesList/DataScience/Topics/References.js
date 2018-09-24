import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import Button from "../../../../UI/Button/Button";
import Margin from "../../../../UI/Margin/Margin";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Link } from "react-router-dom";

export default () => {
  return (
    <div>
      <Typography component="h3" variant="headline" color="primary">
        References
      </Typography>
      <Margin />
      <Margin />
      <Typography component="p" variant="body2">
        All Links Below are the references that will help you in learning Data
        Science
      </Typography>
      <Margin />
      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Linear Algebra
      </Typography>

      <Youtube id="fNk_zzaMoSs" />
      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            Link-1 (Youtube Videos)
          </Typography>
          <Button
            name="Youtube PlayList"
            link="https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab"
          />
          <Typography component="p" variant="body2">
            Link-2 (Edx Course Foundations)
          </Typography>
          <Button
            name="Edx Course Link"
            link="https://www.edx.org/course/linear-algebra-foundations-frontiers-utaustinx-ut-5-04x#!"
          />
          <Typography component="p" variant="body2">
            Link-3 (Applications of Linear Algebra Part-1)
          </Typography>
          <Button
            name="Edx Course Link"
            link="https://www.edx.org/course/applications-linear-algebra-part-1-davidsonx-d003x-1"
          />
          <Typography component="p" variant="body2">
            Link-4 (Applications of Linear Algebra Part-2)
          </Typography>
          <Button
            name="Edx Course Link"
            link="https://www.edx.org/course/applications-linear-algebra-part-2-davidsonx-d003x-2"
          />
        </CardContent>
      </Card>

      <Margin />
      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Calculus
      </Typography>
      <Margin />
      <Margin />
      <Margin />
      <Youtube id="WUvTyaaNkzM" />
      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            Link-1 (Youtube Videos)
          </Typography>
          <Button
            name="Youtube PlayList"
            link="https://www.youtube.com/playlist?list=PL0-GT3co4r2wlh6UHTUeQsrf3mlS2lk6x"
          />
          <Typography component="p" variant="body2">
            Link-2 (Calculus 1A: Differentiation)
          </Typography>
          <Button
            name="Edx Course Link"
            link="https://www.edx.org/course/calculus-1a-differentiation-mitx-18-01-1x"
          />
          <Typography component="p" variant="body2">
            Link-3 (Calculus 1B: Integration)
          </Typography>
          <Button
            name="Edx Course Link"
            link="https://www.edx.org/course/calculus-1b-integration-mitx-18-01-2x"
          />
          <Typography component="p" variant="body2">
            Link-4 (Calculus 1C: Coordinate Systems & Infinite Series)
          </Typography>
          <Button
            name="Edx Course Link"
            link="https://www.edx.org/course/calculus-1c-coordinate-systems-infinite-mitx-18-01-3x"
          />
        </CardContent>
      </Card>

      <Margin />
      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Multivariable Calculus
      </Typography>
      <Margin />
      <Margin />
      <Margin />
      <Youtube id="TrcCbdWwCBc" />
      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            Link-1 (Youtube Videos)
          </Typography>
          <Button
            name="Youtube PlayList"
            link="https://www.youtube.com/playlist?list=PLSQl0a2vh4HC5feHa6Rc5c0wbRTx56nF7"
          />
          <Typography component="p" variant="body2">
            Link-2 (MIT OCW Multivariable Calculus)
          </Typography>
          <Button
            name="MIT Course Link"
            link="http://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/index.htm"
          />
        </CardContent>
      </Card>

      <Margin />
      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Python
      </Typography>
      <Margin />
      <Margin />
      <Margin />
      <Youtube id="Z1Yd7upQsXY" />
      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            Link-1 (Introduction to Computer Science and Programming Using
            Python)
          </Typography>
          <Button
            name="Edx Course"
            link="https://www.edx.org/course/introduction-computer-science-mitx-6-00-1x-7"
          />
          <Typography component="p" variant="body2">
            Link-2 (Introduction to Computational Thinking and Data Science)
          </Typography>
          <Button
            name="Edx Course"
            link="https://www.edx.org/course/introduction-computational-thinking-data-mitx-6-00-2x-3"
          />
          <Typography component="p" variant="body2">
            Link-3 (Introduction to Python for Data Science)
          </Typography>
          <Button
            name="Edx Course"
            link="https://prod-edx-mktg-edit.edx.org/course/introduction-python-data-science-microsoft-dat208x-1"
          />
          <Typography component="p" variant="body2">
            Link-4 (Programming with Python for Data Science)
          </Typography>
          <Button
            name="Edx Course"
            link="https://www.edx.org/course/programming-python-data-science-microsoft-dat210x"
          />
          <Typography component="p" variant="body2">
            Link-5 (Youtube Playlist)
          </Typography>
          <Button
            link="https://www.youtube.com/watch?v=41qgdwd3zAg&list=PLS1QulWo1RIaJECMeUT4LFwJ-ghgoSH6n"
            name="Youtube Playlist"
          />
        </CardContent>
      </Card>

      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Probability and Statistics
      </Typography>
      <Margin />
      <Margin />
      <Margin />

      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            Link-1 (Introduction to Probability)
          </Typography>
          <Button
            name="Edx Course"
            link="https://www.edx.org/course/introduction-probability-science-mitx-6-041x-1#.U3yb762SzIo"
          />
          <Typography component="p" variant="body2">
            Link-2 (Statistical Reasoning)
          </Typography>
          <Button
            name="Stanford Course"
            link="https://lagunita.stanford.edu/courses/OLI/StatReasoning/Open/about"
          />
          <Typography component="p" variant="body2">
            Link-3 (Introduction to Statistics: Descriptive Statistics)
          </Typography>
          <Button
            name="Edx Course"
            link="https://www.edx.org/course/introduction-statistics-descriptive-uc-berkeleyx-stat2-1x"
          />
          <Typography component="p" variant="body2">
            Link-4 (Introduction to Statistics: Probability)
          </Typography>
          <Button
            name="Edx Course"
            link="https://www.edx.org/course/introduction-statistics-probability-uc-berkeleyx-stat2-2x"
          />
          <Typography component="p" variant="body2">
            Link-5 (Introduction to Statistics: Inference)
          </Typography>
          <Button
            link="https://www.edx.org/course/introduction-statistics-inference-uc-berkeleyx-stat2-3x"
            name="Edx Course"
          />
        </CardContent>
      </Card>

      <Margin />
      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Introduction to Data Science
      </Typography>

      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            Link-1 (Introduction to Data Science)
          </Typography>
          <Button
            name="Coursere Course"
            link="https://www.coursera.org/course/datasci"
          />
          <Typography component="p" variant="body2">
            Link-2 (Data Science - CS109 from Harvard)
          </Typography>
          <Button name="Harward Course" link="http://cs109.github.io/2015/" />
          <Typography component="p" variant="body2">
            Link-3 (The Analytics Edge)
          </Typography>
          <Button
            name="Edx Course "
            link="https://www.edx.org/course/analytics-edge-mitx-15-071x-2"
          />
        </CardContent>
      </Card>

      <Margin />
      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Machine Learning
      </Typography>
      <Typography component="p" variant="body2">
        You can learn machine learning from out website
      </Typography>
      <Link to="/artificial_intelligence" style={{ textDecoration: "none" }}>
        <Typography component="p" color="primary">
          Machine Learning Link
        </Typography>
      </Link>
      <Margin />
      <Margin />
      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            Link-1 (Learning From Data (Introductory Machine Learning)
          </Typography>

          <Button
            name="Edx Course"
            link="https://www.edx.org/course/learning-data-introductory-machine-caltechx-cs1156x"
          />
          <Typography component="p" variant="body2">
            Link-2 (Statistical Learning)
          </Typography>
          <Button name="Harward Course" link="http://cs109.github.io/2015/" />
          <Typography component="p" variant="body2">
            Link-3 (The Analytics Edge)
          </Typography>
          <Button
            name="Edx Course "
            link="https://www.edx.org/course/analytics-edge-mitx-15-071x-2"
          />
        </CardContent>
      </Card>

      <Margin />
      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Build Project's Using Kaggle
      </Typography>
      <Youtube id="m2DfpM6MyB8" />

      <Margin />
      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Convex Optimization
      </Typography>

      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            Link-1 (Introduction to Convex Optimization)
          </Typography>
          <Button
            name="Stanford Course"
            link="https://lagunita.stanford.edu/courses/Engineering/CVX101/Winter2014/about"
          />
        </CardContent>
      </Card>

      <Margin />
      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Data Wrangling with MongoDB
      </Typography>

      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            Link-1 (Data Wrangling with MongoDB course)
          </Typography>
          <Button
            name="Udacity Course"
            link="https://www.udacity.com/course/data-wrangling-with-mongodb--ud032"
          />
        </CardContent>
      </Card>

      <Margin />
      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Big Data
      </Typography>
      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            Link-1 (Intro to Hadoop and MapReduce)
          </Typography>
          <Button
            name="Udacity Course"
            link="https://www.udacity.com/course/intro-to-hadoop-and-mapreduce--ud617"
          />
          <Typography component="p" variant="body2">
            Link-2 (Deploying a Hadoop Cluster)
          </Typography>
          <Button
            name="Udacity Course"
            link="https://www.udacity.com/course/deploying-a-hadoop-cluster--ud1000"
          />
        </CardContent>
      </Card>

      <Margin />
      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Database
      </Typography>

      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            Link-1 (Stanford's Database course)
          </Typography>
          <Button
            name="Link"
            link="https://lagunita.stanford.edu/courses/DB/2014/SelfPaced/about"
          />
        </CardContent>
      </Card>

      <Margin />
      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Natural Language Processing
      </Typography>

      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            Link-1 (Deep Learning for Natural Language Processing)
          </Typography>
          <Button name=" Stanford Link" link="http://cs224d.stanford.edu/" />
        </CardContent>
      </Card>

      <Margin />
      <Margin />
      <Typography component="p" variant="headline" color="primary">
        Deep Learning
      </Typography>

      <Card>
        <CardContent>
          <Typography component="p" variant="body2">
            Link-1 (Deep Learning Course Udacity)
          </Typography>
          <Button
            name="Udacity Course"
            link="https://www.udacity.com/course/deep-learning--ud730"
          />
        </CardContent>
      </Card>
    </div>
  );
};
