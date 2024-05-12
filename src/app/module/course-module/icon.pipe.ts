import { Pipe, PipeTransform } from "@angular/core"
@Pipe({
    name: "icon"
})
export class IconPipe implements PipeTransform {
    transform(value: number) {
        return value == 0 ? "people" : "videocam";
    }
}