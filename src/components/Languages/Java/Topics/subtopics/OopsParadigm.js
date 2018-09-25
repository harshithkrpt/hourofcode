import React from "react";

import { Typography, Paper, Divider } from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";
import Youtube from "../../../../UI/Youtube/Youtube";
import oopsimg from "../../../../../assets/images/oops.png";

export const OopsParadigm = () => {
  return (
    <div>
      <Paper
        style={{
          marginTop: "5px",
          padding: "10px",
          width: "90vw",
          marginLeft: "auto",
          marginRight: "auto"
        }}
        elevation={2}
      >
        <Typography component="h3" variant="headline" color="primary">
          Oops Basics
        </Typography>
        <Divider />
        <Margin />
        <img
          src={oopsimg}
          alt="oops"
          style={
            window.innerWidth < 500
              ? { width: "100%" }
              : { width: "50%", margin: "10px auto" }
          }
        />
        <Typography component="h3" variant="subheading" color="primary">
          Object
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          Any entity that has state and behavior is known as an object. For
          example a chair, pen, table, keyboard, bike, etc. It can be physical
          or logical.
        </Typography>
        <Margin />
        <Youtube id="pTB0EiLXUC8" />
        <Margin />
        <Typography component="p" variant="body2">
          An Object can be defined as an instance of a class. An object contains
          an address and takes up some space in memory. Objects can communicate
          without knowing the details of each other's data or code. The only
          necessary thing is the type of message accepted and the type of
          response returned by the objects.
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          <b>Example:</b> A dog is an object because it has states like color,
          name, breed, etc. as well as behaviors like wagging the tail, barking,
          eating, etc.
        </Typography>
        <Margin />
        <Typography component="h3" variant="subheading" color="primary">
          Class
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          Collection of objects is called class. It is a logical entity.
        </Typography>

        <Typography component="p" variant="body2">
          A class can also be defined as a blueprint from which you can create
          an individual object. Class doesn't consume any space.
        </Typography>

        <Margin />
        <Typography component="h3" variant="subheading" color="primary">
          Inheritance
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          When one object acquires all the properties and behaviors of a parent
          object, it is known as inheritance. It provides code reusability. It
          is used to achieve runtime polymorphism.
        </Typography>

        <Margin />
        <Typography component="h3" variant="subheading" color="primary">
          Polymorphisam
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          If one task is performed by different ways, it is known as
          polymorphism. For example: to convince the customer differently, to
          draw something, for example, shape, triangle, rectangle, etc.
        </Typography>
        <Typography component="p" variant="body2">
          In Java, we use method overloading and method overriding to achieve
          polymorphism.
        </Typography>
        <Typography component="p" variant="body2">
          Another example can be to speak something; for example, a cat speaks
          meow, dog barks woof, etc.
        </Typography>

        <Margin />
        <Typography component="h3" variant="subheading" color="primary">
          Abstraction
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          Hiding internal details and showing functionality is known as
          abstraction. For example phone call, we don't know the internal
          processing.
        </Typography>
        <Typography component="p" variant="body2">
          In Java, we use abstract class and interface to achieve abstraction.
        </Typography>

        <Margin />
        <Typography component="h3" variant="subheading" color="primary">
          Encapsulation
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          Binding (or wrapping) code and data together into a single unit are
          known as encapsulation. For example capsule, it is wrapped with
          different medicines.
        </Typography>
        <Typography component="p" variant="body2">
          A java class is the example of encapsulation. Java bean is the fully
          encapsulated class because all the data members are private here.
        </Typography>
      </Paper>
    </div>
  );
};
