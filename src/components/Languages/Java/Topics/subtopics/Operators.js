import React from "react";
import Margin from "../../../../UI/Margin/Margin";

import OutputCard from "../../../../UI/OutPutCard/OutPutCard";
import { CodeData } from "../../../../../Code/CodeData/CodeData";
import { Typography, Divider } from "@material-ui/core";

export default () => {
  return (
    <div style={{ marginTop: "30px", padding: "20px" }}>
      <Typography component="h3" variant="headline" color="primary">
        Operators in Java
      </Typography>
      <Divider />
      <Margin />
      <Typography component="p" variant="body2">
        Operator in java is a symbol that is used to perform operations. For
        example: +, -, *, / etc.
      </Typography>
      <Margin />
      <Typography component="p" variant="body2">
        There are many types of operators in java which are given below:
      </Typography>
      <Margin />
      <Typography component="p" variant="body2">
        1. Unary Operator
      </Typography>
      <Typography component="p" variant="body2">
        2. Arithematic Operator
      </Typography>
      <Typography component="p" variant="body2">
        3. Shift Operator
      </Typography>
      <Typography component="p" variant="body2">
        4. Relational Operator
      </Typography>
      <Typography component="p" variant="body2">
        5. Bitwise Operator
      </Typography>
      <Typography component="p" variant="body2">
        6. Logical Operator
      </Typography>
      <Typography component="p" variant="body2">
        7. Ternary Operator
      </Typography>
      <Typography component="p" variant="body2">
        8. Assignment Operator
      </Typography>

      <Margin />
      <Typography component="h3" variant="headline" color="primary">
        Java Unary Operator
      </Typography>
      <Typography component="p" variant="body2">
        The Java unary operators require only one operand. Unary operators are
        used to perform various operations i.e. :
      </Typography>
      <Margin />
      <Typography component="p" variant="body2">
        Increment/Decrement a value by one
      </Typography>
      <Typography component="p" variant="body2">
        Negation an Expression
      </Typography>
      <Typography component="p" variant="body2">
        inverting the value of a boolean
      </Typography>
      <Margin />

      <Typography component="h3" variant="subheading" color="primary">
        Examples
      </Typography>
      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-1
      </Typography>
      <CodeData code={unaryCode} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={unaryCodeOutput} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-2
      </Typography>
      <CodeData code={unaryCode2} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={unaryCode2Output} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-3
      </Typography>
      <CodeData code={unaryCode3} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={unaryCode3Output} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="headline" color="primary">
        Java Arithmetic Operators
      </Typography>
      <Typography component="p" variant="body2">
        Java arithmatic operators are used to perform addition, subtraction,
        multiplication, and division. They act as basic mathematical operations.
      </Typography>
      <Margin />

      <Typography component="h3" variant="subheading" color="primary">
        Examples
      </Typography>

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-1
      </Typography>
      <CodeData code={arthCode} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={arthCodeOutput} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-2
      </Typography>
      <CodeData code={arthCode2} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={arthCodeOutput2} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="headline" color="primary">
        Java Left Shift Operator
      </Typography>
      <Margin />
      <Typography component="p" variant="body2">
        {`The Java left shift operator << is used to shift all of the bits in a value to the left side of a specified number of times.`}
      </Typography>
      <Margin />

      <Typography component="h3" variant="subheading" color="primary">
        Examples
      </Typography>

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-1
      </Typography>
      <CodeData code={leftShiftExample1} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={leftShiftExample1Output} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="headline" color="primary">
        Java Right Shift Operator
      </Typography>
      <Margin />
      <Typography component="p" variant="body2">
        {`The Java right shift operator >> is used to move left operands value to right by the number of bits specified by the right operand.`}
      </Typography>
      <Margin />

      <Typography component="h3" variant="subheading" color="primary">
        Examples
      </Typography>

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-1
      </Typography>
      <CodeData code={rightShiftExample} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={rightShiftOutput} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="headline" color="primary">
        Java Shift Operator Example: >> vs >>>
      </Typography>
      <Margin />

      <CodeData code={shiftExample} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={shiftExampleOutput} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="headline" color="primary">
        Java AND Operator Example: Logical && and Bitwise &
      </Typography>
      <Margin />
      <Typography component="p" variant="body2">
        {`The logical && operator doesn't check second condition if first condition is false. It checks second condition only if first one is true.`}
      </Typography>
      <Typography component="p" variant="body2">
        The bitwise & operator always checks both conditions whether first
        condition is true or false.
      </Typography>
      <Margin />

      <Typography component="h3" variant="subheading" color="primary">
        Examples
      </Typography>

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-1
      </Typography>
      <CodeData code={andExample1} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={andExample1Output} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-2
      </Typography>
      <CodeData code={andExample2} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={andExample2Output} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="headline" color="primary">
        Java OR Operator Example: Logical || and Bitwise |
      </Typography>
      <Typography component="p" variant="body2">
        {`The logical || operator doesn't check second condition if first condition is true. It checks second condition only if first one is false.`}
      </Typography>
      <Typography component="p" variant="body2">
        The bitwise | operator always checks both conditions whether first
        condition is true or false.
      </Typography>
      <Margin />

      <Typography component="h3" variant="subheading" color="primary">
        Examples
      </Typography>

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-1
      </Typography>
      <CodeData code={orExample1} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={orExample1Output} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="headline" color="primary">
        Java Ternary Operator
      </Typography>
      <Margin />
      <Typography component="p" variant="body2">
        Java Ternary operator is used as one liner replacement for if-then-else
        statement and used a lot in java programming. it is the only conditional
        operator which takes three operands.
      </Typography>
      <Margin />

      <Typography component="h3" variant="subheading" color="primary">
        Examples
      </Typography>

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-1
      </Typography>
      <CodeData code={ternaryExample1} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={ternaryExample1Output} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-2
      </Typography>
      <CodeData code={ternaryExample2} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={ternaryExampleOutput} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="headline" color="primary">
        Java Assignment Operator
      </Typography>
      <Margin />
      <Typography component="p" variant="body2">
        Java assignment operator is one of the most common operator. It is used
        to assign the value on its right to the operand on its left.
      </Typography>
      <Margin />

      <Typography component="h3" variant="subheading" color="primary">
        Examples
      </Typography>

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-1
      </Typography>
      <CodeData code={assignExample1} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={assignExample1Output} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-2
      </Typography>
      <CodeData code={assignExample2} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={assignExample2Output} />
      <Divider />

      <Margin />
      <Typography component="h3" variant="subheading" color="primary">
        Example-3(Type Casting Use)
      </Typography>
      <CodeData code={assignExample3} />
      <Typography component="h3" variant="subheading" color="secondary">
        Output
      </Typography>
      <OutputCard data={assignExample3Output} />
      <Divider />
    </div>
  );
};

// code for operators

const unaryCode = `
class OperatorExample {  
    public static void main(String args[])
    {  
    int x=10;  
    System.out.print(x++);//10 (11)  
    System.out.print(++x);//12  
    System.out.print(x--);//12 (11)  
    System.out.print(--x);//10  
    }
} 
`;

const unaryCode2 = `
class OperatorExample{  
  public static void main(String args[]){  
  int a=10;  
  int b=10;  
  System.out.println(a++ + ++a); //10+12=22  
  System.out.println(b++ + b++); //10+11=21     
  }
}
`;

const unaryCode3 = `
class OperatorExample{  
  public static void main(String args[]){  
  int a=10;  
  int b=-10;  
  boolean c=true;  
  boolean d=false;  
  System.out.println(~a);//-11 (minus of total positive value which starts from 0)  
  System.out.println(~b);//9 (positive of total minus, positive starts from 0)  
  System.out.println(!c);//false (opposite of boolean value)  
  System.out.println(!d);//true  
  }
}  
`;

const arthCode = `
class OperatorExample{  
  public static void main(String args[]){  
  int a=10;  
  int b=5;  
  System.out.println(a+b);//15  
  System.out.println(a-b);//5  
  System.out.println(a*b);//50  
  System.out.println(a/b);//2  
  System.out.println(a%b);//0  
  }
}
`;
const arthCode2 = `
class OperatorExample{  
  public static void main(String args[]){  
  System.out.println(10*10/5+3-1*4/2);  
  }
} 
`;

const leftShiftExample1 = `
class OperatorExample{  
  public static void main(String args[]){  
  System.out.println(10<<2);//10*2^2=10*4=40  
  System.out.println(10<<3);//10*2^3=10*8=80  
  System.out.println(20<<2);//20*2^2=20*4=80  
  System.out.println(15<<4);//15*2^4=15*16=240  
  }
} 
`;

const rightShiftExample = `
class OperatorExample{  
  public static void main(String args[]){  
  System.out.println(10>>2);//10/2^2=10/4=2  
  System.out.println(20>>2);//20/2^2=20/4=5  
  System.out.println(20>>3);//20/2^3=20/8=2  
  }
} 
`;

const shiftExample = `
class OperatorExample{  
  public static void main(String args[]){  
      //For positive number, >> and >>> works same  
      System.out.println(20>>2);  
      System.out.println(20>>>2);  
      //For negative number, >>> changes parity bit (MSB) to 0  
      System.out.println(-20>>2);  
      System.out.println(-20>>>2);  
  }
} 
`;

const andExample1 = `
class OperatorExample{  
  public static void main(String args[]){  
  int a=10;  
  int b=5;  
  int c=20;  
  System.out.println(a<b&&a<c);//false && true = false  
  System.out.println(a<b&a<c);//false & true = false  
  }
}
`;

const andExample2 = `
class OperatorExample{  
  public static void main(String args[]){  
  int a=10;  
  int b=5;  
  int c=20;  
  System.out.println(a<b&&a++<c);//false && true = false  
  System.out.println(a);//10 because second condition is not checked  
  System.out.println(a<b&a++<c);//false && true = false  
  System.out.println(a);//11 because second condition is checked  
  }
} 
`;

const orExample1 = `
class OperatorExample{  
  public static void main(String args[]){  
  int a=10;  
  int b=5;  
  int c=20;  
  System.out.println(a>b||a<c);//true || true = true  
  System.out.println(a>b|a<c);//true | true = true  
  //|| vs |  
  System.out.println(a>b||a++<c);//true || true = true  
  System.out.println(a);//10 because second condition is not checked  
  System.out.println(a>b|a++<c);//true | true = true  
  System.out.println(a);//11 because second condition is checked  
  }
}
`;

const ternaryExample1 = `
class OperatorExample{  
  public static void main(String args[]){  
  int a=2;  
  int b=5;  
  int min=(a<b)?a:b;  
  System.out.println(min);  
  }
}  
`;

const ternaryExample2 = `
class OperatorExample{  
  public static void main(String args[]){  
  int a=10;  
  int b=5;  
  int min=(a<b)?a:b;  
  System.out.println(min);  
  }
}
`;

const assignExample1 = `
class OperatorExample{  
  public static void main(String args[]){  
  int a=10;  
  int b=20;  
  a+=4;//a=a+4 (a=10+4)  
  b-=4;//b=b-4 (b=20-4)  
  System.out.println(a);  
  System.out.println(b);  
  }
}  
`;

const assignExample2 = `
class OperatorExample{  
  public static void main(String[] args){  
  int a=10;  
  a+=3;//10+3  
  System.out.println(a);  
  a-=4;//13-4  
  System.out.println(a);  
  a*=2;//9*2  
  System.out.println(a);  
  a/=2;//18/2  
  System.out.println(a);  
  }
} 
`;

const assignExample3 = `
class OperatorExample{  
  public static void main(String args[]){  
  short a=10;  
  short b=10;  

  //a+=b;//a=a+b internally so fine  
  //a=a+b;//Compile time error because 10+10=20 now int you should type cast  
  a=(short)(a+b);//20 which is int now converted to short  
  System.out.println(a);  
  }}
`;

// output

const assignExample3Output = <pre>20</pre>;
const assignExample2Output = (
  <pre>
    13 <br /> 9 <br /> 18 <br /> 9
  </pre>
);
const assignExample1Output = (
  <pre>
    18 <br /> 16
  </pre>
);
const ternaryExampleOutput = <pre>5</pre>;

const ternaryExample1Output = <pre>2</pre>;
const unaryCodeOutput = <pre>10 12 12 10</pre>;
const unaryCode2Output = (
  <pre>
    22
    <br />
    21
  </pre>
);
const unaryCode3Output = (
  <pre>
    -11
    <br />9 <br />
    false
    <br />
    true
    <br />
  </pre>
);
const arthCodeOutput = (
  <pre>
    15 <br />5 <br />
    50 <br />2 <br />0 <br />
  </pre>
);
const arthCodeOutput2 = <pre>21</pre>;
const leftShiftExample1Output = (
  <pre>
    40
    <br />
    80
    <br />
    80
    <br />
    240
  </pre>
);

const rightShiftOutput = (
  <pre>
    2<br />3 <br />5
  </pre>
);

const shiftExampleOutput = (
  <pre>
    5 <br />5 <br />
    -5 <br />
    1073741819
  </pre>
);

const andExample1Output = (
  <pre>
    false <br />
    false
  </pre>
);

const andExample2Output = (
  <pre>
    false <br />
    10 <br />
    false <br />
    11
  </pre>
);

const orExample1Output = (
  <pre>
    true <br /> true <br /> true <br /> 10 <br /> true <br /> 11
  </pre>
);
