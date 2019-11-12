import { Injectable } from "@angular/core";

@Injectable()
export class LuxuryService {
    public getLuxuryItem() : string {
        return "I'm the Luxury Service from the lazily-loaded module!";
    }
}