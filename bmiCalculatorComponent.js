import { LightningElement } from 'lwc';

export default class BmiCalculatorComponent extends LightningElement 
{
  height;
  weight;
  nuBMI;
  result;

  inputHandler(event)
  {
    const{name,value} = event.target;
    
    if(name == 'height')
    {
      this.height = value;
    }
    else
    {
      this.weight = value;
    }
  }

  submitHandler(event)
  {
    //To stop refresh while submit
    event.preventDefault();

    console.log('Height : '+this.height);
    console.log('Weight : '+this.weight);

    this.calculate();
  }

  calculate()
  {
    //BMI = weight in KG / (height in m)^2
    let nuHeight = Number(this.height)/100;
    let bmiValue = this.weight / (nuHeight * nuHeight);

    this.nuBMI = Number(bmiValue.toFixed(2));
    console.log('BMI Value : '+this.nuBMI);

    switch(true)
    {
      case (this.nuBMI <18.5):
        this.result = 'Under Weight';
        break;
      case (this.nuBMI>=18.5 && this.nuBMI<24.9):
        this.result = 'Healthy';
        break;
      case (this.nuBMI >= 25.0 && this.nuBMI<=29.9):
        this.result = 'Over weight';
        break;
      case (this.nuBMI > 30):
        this.result = 'Obese';
        break;
      default:
        this.result = 'Invalid BMI';
    }

    console.log('Result : '+this.result);
  }

  recalculateHandler()
  {
    this.height = '';
    this.weight = '';
    this.nuBMI = '';
    this.result = '';    
  }
}