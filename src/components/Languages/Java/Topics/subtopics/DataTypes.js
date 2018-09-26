import React from "react";

import {
  Typography,
  Paper,
  Divider,
  TableBody,
  Table,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import Margin from "../../../../UI/Margin/Margin";

const DataTypes = () => {
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
          Data Types
        </Typography>
        <Divider />
        <Margin />
        <Typography component="p" variant="body2">
          Data types specify the different sizes and values that can be stored
          in the variable. There are two types of data types in Java:
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          <b>Primitive data types</b>: The primitive data types include boolean,
          char, byte, short, int, long, float and double.
        </Typography>
        <Typography component="p" variant="body2">
          <b>Non-primitive data types</b>: The non-primitive data types include
          Classes, Interfaces, and Arrays.
        </Typography>
        <Margin />

        <Typography component="h3" variant="headline">
          Java Primitive Data Types
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          In Java language, primitive data types are the building blocks of data
          manipulation. These are the most basic data types available in Java
          language.
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          There are 8 types of Primitive Data Types:
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          1. Boolean Data Type
        </Typography>
        <Typography component="p" variant="body2">
          2. Byte Data Type
        </Typography>
        <Typography component="p" variant="body2">
          3. Char Data Type
        </Typography>
        <Typography component="p" variant="body2">
          4. Short Data Type
        </Typography>
        <Typography component="p" variant="body2">
          5. Int Data Type
        </Typography>
        <Typography component="p" variant="body2">
          6. Long Data Type
        </Typography>
        <Typography component="p" variant="body2">
          7. Float Data Type
        </Typography>
        <Typography component="p" variant="body2">
          8. Double Data Type
        </Typography>
        <Margin />
        <div style={{ overflowX: "auto" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell variant="head">Data Type</TableCell>
                <TableCell variant="head">Default Value</TableCell>
                <TableCell variant="head">Default Size</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Boolean</TableCell>
                <TableCell>false</TableCell>
                <TableCell>1 bit</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Char</TableCell>
                <TableCell>'\u0000'</TableCell>
                <TableCell>2 byte</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Byte</TableCell>
                <TableCell>0</TableCell>
                <TableCell>1 byte</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Short</TableCell>
                <TableCell>0</TableCell>
                <TableCell>2 byte</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Int</TableCell>
                <TableCell>0</TableCell>
                <TableCell>4 byte</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Long</TableCell>
                <TableCell>0L</TableCell>
                <TableCell>8 byte</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Float</TableCell>
                <TableCell>0.0f</TableCell>
                <TableCell>4 byte</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Double</TableCell>
                <TableCell>0.0d</TableCell>
                <TableCell>8 byte</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
        <Margin />
        <Typography component="h3" variant="headline">
          Unicode System
        </Typography>
        <Margin />
        <Typography component="p" variant="body2">
          Unicode is a universal international standard character encoding that
          is capable of representing most of the world's written languages.
        </Typography>
        <Typography component="p" variant="body2">
          Java Uses Unicode System.
        </Typography>
      </Paper>
    </div>
  );
};
export default DataTypes;
