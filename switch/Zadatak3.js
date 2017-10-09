var day=1;

switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It's a weekday");
        break;
    case 6:
    case 7:
         console.log("It's a weekend");
        break;
  

    default:
        console.log("Input must be number from 1 to 7");
        break;
}