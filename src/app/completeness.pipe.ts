import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'completeness',
  pure: false
})
export class CompletenessPipe implements PipeTransform {

  transform(input: Project[], name: string): Project[] {
    var output: Project[] = [];
    if(name === "potatoSalad") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].name === "Potato Salad") {
         output.push(input[i]);
       }
     }
     return output;
   } else if (name === "travelTheUniverse") {
     for (var i = 0; i < input.length; i++) {
       if (input[i].name === 'Travel The Universe') {
         output.push(input[i]);
       }
     }
     return output;
   } else {
     return input;
   }
 }
}
