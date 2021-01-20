import { DragEventParams, DragHandler, DragStopEventParams } from "./drag-manager";
import { BrowserJsPlumbInstance, jsPlumbDOMElement, PosseSpec } from "./browser-jsplumb-instance";
import { Drag } from "./collicat";
import { Offset, PointArray, RedrawResult } from "@jsplumb/community-core";
export interface DragStopPayload {
    el: jsPlumbDOMElement;
    e: MouseEvent;
    pos: Offset;
    r: RedrawResult;
}
export declare class ElementDragHandler implements DragHandler {
    protected instance: BrowserJsPlumbInstance;
    selector: string;
    private _dragOffset;
    private _groupLocations;
    private _intersectingGroups;
    private _currentDragParentGroup;
    private _posseByElementIdMap;
    private _posseMap;
    private _currentPosse;
    private _currentPosseOffsets;
    private _currentPosseSizes;
    private _dragSelection;
    private _dragSelectionOffsets;
    private _dragSizes;
    protected drag: Drag;
    constructor(instance: BrowserJsPlumbInstance);
    onDragInit(el: jsPlumbDOMElement): jsPlumbDOMElement;
    onDragAbort(el: jsPlumbDOMElement): void;
    onStop(params: DragStopEventParams): void;
    private _cleanup;
    reset(): void;
    init(drag: Drag): void;
    onDrag(params: DragEventParams): void;
    onStart(params: {
        e: MouseEvent;
        el: jsPlumbDOMElement;
        finalPos: PointArray;
        drag: Drag;
    }): boolean;
    addToDragSelection(el: string | jsPlumbDOMElement): void;
    clearDragSelection(): void;
    removeFromDragSelection(el: string | HTMLElement): void;
    toggleDragSelection(el: string | jsPlumbDOMElement): void;
    getDragSelection(): Array<jsPlumbDOMElement>;
    private static decodePosseSpec;
    addToPosse(spec: PosseSpec, ...els: Array<jsPlumbDOMElement>): void;
    removeFromPosse(...els: Array<jsPlumbDOMElement>): void;
    setPosseState(state: boolean, ...els: Array<jsPlumbDOMElement>): void;
    private isActivePosseMember;
}