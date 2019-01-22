import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "pipeinfo"
})
export class PipeinfoPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return value;
  }
}
