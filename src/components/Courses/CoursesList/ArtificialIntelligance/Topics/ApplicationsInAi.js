import React from "react";
import { Typography } from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";
import Youtube from "../../../../UI/Youtube/Youtube";

export default props => {
  return (
    <div>
      <Typography component="h3" variant="headline">
        Applications in AI and ML
      </Typography>
      <Margin />

      <Typography component="h3" variant="subheading" color="primary">
        Gaming
      </Typography>
      <Typography component="p" variant="body2">
        AI plays crucial role in strategic games such as chess, poker,
        tic-tac-toe, etc., where machine can think of large number of possible
        positions based on heuristic knowledge.
      </Typography>
      <Margin />
      <Margin />
      <Youtube id="Xhec39dVGDE" />
      <Margin />
      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Speech Recognition
      </Typography>
      <Typography component="p" variant="body2">
        Some intelligent systems are capable of hearing and comprehending the
        language in terms of sentences and their meanings while a human talks to
        it. It can handle different accents, slang words, noise in the
        background, change in human’s noise due to cold, etc.
      </Typography>
      <Margin />
      <Margin />
      <Youtube id="D2JirgEnl8Y" />
      <Margin />
      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Handwriting Recognition
      </Typography>
      <Typography component="p" variant="body2">
        The handwriting recognition software reads the text written on paper by
        a pen or on screen by a stylus. It can recognize the shapes of the
        letters and convert it into editable text.
      </Typography>
      <Margin />
      <Margin />

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Intelligent Robots
      </Typography>
      <Typography component="p" variant="body2">
        Robots are able to perform the tasks given by a human. They have sensors
        to detect physical data from the real world such as light, heat,
        temperature, movement, sound, bump, and pressure. They have efficient
        processors, multiple sensors and huge memory, to exhibit intelligence.
        In addition, they are capable of learning from their mistakes and they
        can adapt to the new environment.
      </Typography>
      <Margin />
      <Margin />

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Natural Language Processing
      </Typography>
      <Typography component="p" variant="body2">
        It is possible to interact with the computer that understands natural
        language spoken by humans.
      </Typography>
      <Margin />
      <Margin />
      <Youtube id="fOvTtapxa9c" />
      <Margin />
      <Margin />

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Expert Systems
      </Typography>
      <Typography component="p" variant="body2">
        There are some applications which integrate machine, software, and
        special information to impart reasoning and advising. They provide
        explanation and advice to the users.
      </Typography>
      <Margin />
      <Margin />
      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Vision Systems
      </Typography>
      <Typography component="p" variant="body2">
        These systems understand, interpret, and comprehend visual input on the
        computer. For example,
      </Typography>
      <Typography component="p" variant="body2">
        A spying aeroplane takes photographs, which are used to figure out
        spatial information or map of the areas.
      </Typography>
      <Typography component="p" variant="body2">
        Doctors use clinical expert system to diagnose the patient.
      </Typography>
      <Typography component="p" variant="body2">
        Police use computer software that can recognize the face of criminal
        with the stored portrait made by forensic artist.
      </Typography>
      <Margin />
      <Margin />
      <Margin />
    </div>
  );
};
