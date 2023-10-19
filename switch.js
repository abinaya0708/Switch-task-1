

document.write("---Find the price of furniture using switch case---");
document.write("<br>");
document.write("<br>");
var furniture="table";
switch(furniture){
	case "table":
		document.write("Table is 2000 rupees");
	break;
	case "chair":
		document.write("Chair is 200 rupees");
	break;
	case "bench":
		document.write("Bench is 1000 rupees"); 
	break;                                                                                          
	case "sofa":
		document.write("Sofa is 5000 rupees");
	break;
	case "cupboard":
		document.write("Cupboard is 10000 rupees");
	break;
	default:
		document.write("No stack");
}