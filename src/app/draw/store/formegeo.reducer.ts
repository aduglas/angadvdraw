import { createEntityAdapter, EntityAdapter, EntityState } from "@ngrx/entity";
import { createReducer , on} from "@ngrx/store";
import { FormeGeo } from "..";
import { addFomeGeo  } from "./formegeo.actions";
import { isDrawing } from "./formegeo.selector";

export interface FormeGeoState extends EntityState<FormeGeo>{
    isDrawing: boolean; 
}


export const adapter: EntityAdapter<FormeGeo> = createEntityAdapter<FormeGeo>(
    {
        selectId:  (fg: FormeGeo) => fg.id
    }
);

export const initialState: FormeGeoState = adapter.getInitialState({
    isDrawing: true
});


export const reducer = createReducer(
    initialState,
    on(addFomeGeo,
        (state,action) => adapter.addOne(action.formegeo , {...state , isDrawing : false })
    )
);

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
  } = adapter.getSelectors();

  export const selectIsDrawing = (state: FormeGeoState) => state.isDrawing;


