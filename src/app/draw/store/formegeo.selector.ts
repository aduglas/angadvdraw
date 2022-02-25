import { createFeatureSelector, createSelector } from "@ngrx/store";
import { FormeGeoState , selectIsDrawing ,selectAll } from "./formegeo.reducer";

const formegeosSelector = createFeatureSelector<FormeGeoState>("app");

export const isDrawing = createSelector(formegeosSelector , selectIsDrawing);
export const formegeos = createSelector(formegeosSelector , selectAll);