import { AbstractBezierConnector, AbstractBezierOptions } from "./abstract-bezier-connector";
import { JsPlumbInstance } from "../core";
import { ConnectorComputeParams, PaintGeometry } from "./abstract-connector";
import { Connection } from "./connection-impl";
import { AnchorPlacement } from "../anchor-manager";
export interface StateMachineOptions extends AbstractBezierOptions {
}
export declare class StateMachine extends AbstractBezierConnector {
    connection: Connection;
    type: string;
    _controlPoint: [number, number];
    proximityLimit: number;
    constructor(instance: JsPlumbInstance, connection: Connection, params: StateMachineOptions);
    _computeBezier(paintInfo: PaintGeometry, params: ConnectorComputeParams, sp: AnchorPlacement, tp: AnchorPlacement, w: number, h: number): void;
}
export declare function register(): void;