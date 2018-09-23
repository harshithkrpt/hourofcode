import React from "react";
import { withStyles } from "@material-ui/core/styles";

import ButtonWithLink from "../../../../UI/Button/Button";

import FullScreenModal from "../../../../UI/FullScreenModal/FullScreenModal";
import Youtube from "../../../../UI/Youtube/Youtube";
import { Typography } from "@material-ui/core";

import Margin from "../../../../UI/Margin/Margin";
export const VideoComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Understanding Time Complexity
      </Typography>
      <Youtube id="D6xkbGLQesk" />
    </div>
  );
};

export const CodeComponent = props => {
  return (
    <div>
      <Typography
        variant="headline"
        style={{ textAlign: "center", marginTop: "20px" }}
        component="h3"
      >
        Understanding Time Complexity
      </Typography>
    </div>
  );
};

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

const SearchingAndSorting = props => {
  const { classes } = props;
  return (
    <React.Fragment>
      <div className={classes.root}>
        <Typography component="h3" variant="display1" color="primary">
          Sorting
        </Typography>
        <Typography component="p" variant="body2">
          Sorting refers to arranging data in a particular format. Sorting
          algorithm specifies the way to arrange data in a particular order.
          Most common orders are in numerical or lexicographical order.
        </Typography>
        <Margin />
        <Typography component="h4" variant="headline">
          Stable And Not Stable Sorting
        </Typography>
        <Typography component="p" variant="body2">
          If a sorting algorithm, after sorting the contents, does not change
          the sequence of similar content in which they appear, it is called{" "}
          <b>stable sorting.</b>
        </Typography>
        <Typography component="p" variant="body2">
          If a sorting algorithm, after sorting the contents, changes the
          sequence of similar content in which they appear, it is called{" "}
          <b>unstable sorting.</b>
        </Typography>

        <Margin />
        <Typography component="h4" variant="headline">
          In-place Sorting and Not-in-place Sorting
        </Typography>
        <Typography component="p" variant="body2">
          Sorting algorithms may require some extra space for comparison and
          temporary storage of few data elements. These algorithms do not
          require any extra space and sorting is said to happen in-place, or for
          example, within the array itself. This is called{" "}
          <b>in-place sorting</b>. Bubble sort is an example of in-place
          sorting.
        </Typography>
        <Typography component="p" variant="body2">
          However, in some sorting algorithms, the program requires space which
          is more than or equal to the elements being sorted. Sorting which uses
          equal or more space is called <b>not-in-place</b> sorting. Merge-sort
          is an example of not-in-place sorting.
        </Typography>
        <Margin />
        <Typography component="h4" variant="display1">
          Important Terms
        </Typography>
        <Margin />
        <Typography component="h4" variant="headline">
          Increasing Order
        </Typography>
        <Typography component="p" variant="body2">
          A sequence of values is said to be in <b>increasing order</b>, if the
          successive element is greater than the previous one. For example, 1,
          3, 4, 6, 8, 9 are in increasing order, as every next element is
          greater than the previous element.
        </Typography>
        <Margin />
        <Typography component="h4" variant="headline">
          Decreasing Order
        </Typography>
        <Typography component="p" variant="body2">
          A sequence of values is said to be in <b>decreasing order</b>, if the
          successive element is less than the current one. For example, 9, 8, 6,
          4, 3, 1 are in decreasing order, as every next element is less than
          the previous element.
        </Typography>
        <Margin />
        <Typography component="h4" variant="headline">
          Non-Increasing Order
        </Typography>
        <Typography component="p" variant="body2">
          A sequence of values is said to be in <b>non-increasing order</b>, if
          the successive element is less than or equal to its previous element
          in the sequence. This order occurs when the sequence contains
          duplicate values. For example, 9, 8, 6, 3, 3, 1 are in non-increasing
          order, as every next element is less than or equal to (in case of 3)
          but not greater than any previous element.
        </Typography>
        <Margin />
        <Typography component="h4" variant="headline">
          Non-Decreasing Order
        </Typography>
        <Typography component="p" variant="body2">
          A sequence of values is said to be in non-decreasing order, if the
          successive element is greater than or equal to its previous element in
          the sequence. This order occurs when the sequence contains duplicate
          values. For example, 1, 3, 3, 6, 8, 9 are in non-decreasing order, as
          every next element is greater than or equal to (in case of 3) but not
          less than the previous one.
        </Typography>
        <Margin />
        <Margin />
        <Typography
          component="h3"
          variant="display1"
          style={{ color: "purple" }}
        >
          Searching
        </Typography>
        <Typography component="p" variant="body2">
          Searching refers to finding data in a particular group. Most common
          searching techniques are <b>Linear Search and Binary Search</b>.
        </Typography>
        <Margin />
        <Typography component="h4" variant="headline">
          Linear Search
        </Typography>
        <Typography component="p" variant="body2">
          Linear search is a very simple search algorithm. In this type of
          search, a sequential search is made over all items one by one. Every
          item is checked and if a match is found then that particular item is
          returned, otherwise the search continues till the end of the data
          collection.
        </Typography>

        <Margin />
        <Typography component="h4" variant="headline">
          Binary search
        </Typography>
        <Typography component="p" variant="body2">
          Binary search is a fast search algorithm with run-time complexity of
          Ο(log n). This search algorithm works on the principle of divide and
          conquer. For this algorithm to work properly, the data collection
          should be in the sorted form.
        </Typography>
        <Typography component="p" variant="body2">
          Binary search looks for a particular item by comparing the middle most
          item of the collection. If a match occurs, then the index of item is
          returned. If the middle item is greater than the item, then the item
          is searched in the sub-array to the left of the middle item.
          Otherwise, the item is searched for in the sub-array to the right of
          the middle item. This process continues on the sub-array as well until
          the size of the subarray reduces to zero.
        </Typography>
        <div style={{ display: "flex", marginTop: "20px" }}>
          <FullScreenModal
            heading="Analysis of Algorithms"
            component={<VideoComponent />}
            buttonName="Watch Video Samples"
          />
          <FullScreenModal
            heading="Analysis Of Algorithms"
            component={<CodeComponent />}
            buttonName="Watch Code Samples"
          />
        </div>
        <ButtonWithLink
          link="https://www.tutorialspoint.com/data_structures_algorithms/linear_search_algorithm.htm"
          name="For More Click Here"
        />
      </div>
    </React.Fragment>
  );
};

export default withStyles(styles)(SearchingAndSorting);
