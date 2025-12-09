      /*
      function greet(name){
        if (!name){
          console.log('hi there');
        } else {
          console.log(`hi ${name}`);
        }
      }
      greet('ali');
      greet('ahmed');
      greet();
      */

      /*
      function convertToFahrenheit(celsius){
        return(celsius * 9/5)+32;
      }
      console.log(convertToFahrenheit(14));

      function convertToCelsius(Fehrenheit){
        return(Fehrenheit -32) * 5/9;
      }
      console.log(convertToCelsius(86));
      

      function convertTemp(degrees, unit){
        if (unit==='C'){
          const result= convertToFahrenheit(degrees);
          return`${result}F`
        }
        else if (unit==='F'){
          const result= convertToCelsius(degrees);
          return`${result}C`
        }
      }
      console.log(convertTemp(100,'C'));
      console.log(convertTemp(100,'F'));
      */

      function convertLength(length, from, to){

        if (from !== 'km' && from !== 'm' && from !== 'ft' && from !== 'miles'){
          return `invalid unit: ${from}`;
        } else if (to !== 'km' && to !== 'm' && to !== 'ft' && to !== 'miles'){
          return `invalid unit: ${to}`;
        }

        if (from==='miles'){
          const miles_km= length*1.6;
          return(`${length} miles is ${miles_km} km`);
        }
        else if (from==='km'){
          const km_miles=(length/1.6);
          return(`${length} km is ${km_miles} miles`);
        }
        else if (from==='ft'){
          const ft_m=(length*0.3048).toFixed(2)
          return(`${length} feet is ${ft_m} m`);
        }
        else if (from==='m'){
          const m_ft=(length/0.3048).toFixed(2)
          return(`${length} meter is ${m_ft} feet`);
        }
        else if (from==='kg' || to==='0'){
          let from='';
          let to='';
          return(`invalid unit: ${from}`);
        }
      }
      console.log(convertLength(50, 'miles', 'km'));
      console.log(convertLength(32, 'km', 'miles'));
      console.log(convertLength(6, 'ft', 'm'));
      console.log(convertLength(1.7, 'm', 'ft'));
      console.log(convertLength(5, 'm', 'lbs'));