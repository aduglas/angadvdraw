
import { createAction , props} from "@ngrx/store";
import { FormeGeo } from "..";


export const addFomeGeo = createAction(
    '[FormeGeo] Add FormeGeo',
    props<{ formegeo : FormeGeo}>()
);
